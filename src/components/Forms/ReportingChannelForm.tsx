'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../Buttons/Button'
import { ZodAllErrors } from './components/ZodAllErrors'
import toast from 'react-hot-toast'
// import AWSVerifyEmail from '../EmailsTemplates/AWSVerifyEmail'
import useSWR from 'swr'
import { getReportingPage } from '@/services/prismicData/getReportingPage'
import ContentRichText from '../Prismic/ContentRichText'
import axios from 'axios'
const registerSchema = z.object({
  assunto: z.string().min(1, { message: 'Selecione um tipo de ocorrência' }),
  email: z.any(),
  descricao: z.string().min(10, { message: 'Mensagem muito curta' }),
})

type FormData = z.infer<typeof registerSchema>

export function ReportingChannelForm() {
  const [documento, setDocumento] = useState('')
  const [desejoSerInformado, setDesejoSerInformado] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  const { data } = useSWR('getReportingPage', async () => {
    const response = await getReportingPage()
    return response
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(registerSchema) })

  async function postForm(data: FormData) {
    setShowMessage(false)

    try {
      const formData = new FormData()

      formData.append('nome_remetente', 'Canal de denúncia')
      formData.append('email_remetente', data.email)
      formData.append(
        'conteudo_html',
        `<div>
            <h2 style="font-size:'20px'">Solicitação de contato via site<h2>
            <p style="font-size:16px;font-weight: normal;"><strong>Nome:</strong> ${data.assunto}<p>
            <p style="font-size:16px;font-weight: normal;"><strong>Usuário deseja ser informado:</strong> ${
              desejoSerInformado ? 'Sim' : 'Não'
            }<p>
            <p style="font-size:16px;font-weight: normal;"><strong>E-mail:</strong> ${data.email || 'Não informado'}<p>
            <p style="font-size:16px;font-weight: normal;"><strong>Descrição:</strong> ${data.descricao}<p>
            <div>`,
      )
      formData.append('assunto', 'Contato via Site')
      formData.append('nome_destinatario', 'Açaí Imperador')
      formData.append('email_destinatario', data.email)
      formData.append('cco', 'angeloricardodev@gmail.com')

      if (documento?.length > 0) {
        for (let i = 0; i < documento.length; i++) {
          formData.append(`arquivo[]`, documento[i])
        }
      }

      await axios.post(
        'https://email-service.egidesolutions.com/api/send-email',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      toast.success('E-mail enviado com sucesso')
      setShowMessage(true)
      reset()
    } catch (error) {
      toast.error('Erro ao enviar e-mail, tente novamente mais tarde')
    }
  }

  return (
    <div className="mt-5">
      <form
        onSubmit={handleSubmit(postForm)}
        className="grid grid-cols-2 gap-2"
      >
        <fieldset className="col-span-2">
          <label htmlFor="assunto" className="b-label">
            Selecione a opção que melhor descreve sua relação com o Açaí
            Imperador:
          </label>
          <select
            id="assunto"
            className="b-input-select"
            {...register('assunto')}
            style={errors.assunto && { border: '1px solid red' }}
          >
            <option defaultValue={''}>Selecione</option>
            <option value="Quero ser um revendedor">
              Quero ser um revendedor
            </option>
            <option value="Colaborador">Colaborador</option>
            <option value="Cliente">Cliente</option>
            <option value="Fornecedor">Fornecedor</option>
            <option value="Outro">Outro</option>
          </select>
        </fieldset>

        <fieldset className="col-span-2">
          <label htmlFor="descricao" className="b-label">
            Descrição da ocorrência
          </label>
          <textarea
            id="₢"
            rows={4}
            {...register('descricao')}
            style={errors.descricao && { border: '1px solid red' }}
            className="b-input-textarea"
            placeholder="Descreva a ocorrência"
          ></textarea>
        </fieldset>

        <fieldset className="col-span-2">
          <label htmlFor="documento" className="b-label">
            Evidências ou Documentos (opcional)
          </label>
          <input
            type="file"
            id="documento"
            multiple
            onChange={(e) => setDocumento(e.target.value)}
            className="b-input-file"
          />
        </fieldset>
        <fieldset className="col-span-2">
          <label
            htmlFor="desejoSerInformado"
            className="flex items-center gap-1"
          >
            <input
              type="checkbox"
              id="desejoSerInformado"
              defaultChecked={desejoSerInformado}
              onChange={() => setDesejoSerInformado(!desejoSerInformado)}
              className="rounded"
            />
            Desejo ser informado
          </label>
        </fieldset>

        {desejoSerInformado && (
          <fieldset className="col-span-2">
            <label htmlFor="email" className="b-label">
              Email para receber informações
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              style={errors.email && { border: '1px solid red' }}
              className="b-input-text"
              placeholder="Email para receber informações"
            />
          </fieldset>
        )}

        <div className="col-span-2">
          <ZodAllErrors errors={errors} />
        </div>

        <div className="col-span-2">
          {showMessage && (
            <div className="bg-green-100 p-4 rounded-lg mb-4">
              <ContentRichText data={data?.data.mensagem_de_confirmacao} />
            </div>
          )}
          <Button variant="primaryGreen" type="submit" isLoading={isSubmitting}>
            Enviar
          </Button>
        </div>
      </form>
    </div>
  )
}
