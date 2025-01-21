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
    const { assunto, email, descricao } = data
    console.log({ assunto, email, descricao, documento })
    setShowMessage(true)
    reset()
    toast.success('Mensagem enviada com sucesso!')
  }

  return (
    <div className="mt-5">
      <form
        onSubmit={handleSubmit(postForm)}
        className="grid grid-cols-2 gap-2"
      >
        <fieldset className="col-span-2">
          <label htmlFor="assunto" className="b-label">
            Tipo de denúncia
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
            Documento
          </label>
          <input
            type="file"
            id="documento"
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
          <div className="bg-green-100 p-4 rounded-lg mb-4">
            {showMessage && (
              <ContentRichText data={data?.data.mensagem_de_confirmacao} />
            )}
          </div>
          <Button variant="primaryGreen" type="submit" isLoading={isSubmitting}>
            Enviar
          </Button>
        </div>
      </form>
    </div>
  )
}
