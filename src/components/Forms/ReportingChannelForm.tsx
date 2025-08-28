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

const formSchema = z.object({
  assunto: z.string().min(1, { message: 'Selecione um tipo de ocorrência' }),
  email: z.any(),
  descricao: z.string().min(10, { message: 'Mensagem muito curta' }),
})

export function ReportingChannelForm({
  destinatario,
}: {
  destinatario: string
}) {
  const [desejoSerInformado, setDesejoSerInformado] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [attachments, setAttachments] = useState<FileList | undefined>(
    undefined,
  )

  const { data } = useSWR('getReportingPage', async () => {
    const response = await getReportingPage()
    return response
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      assunto: '',
      descricao: '',
      email: '',
    },
  })

  async function postForm(values: z.infer<typeof formSchema>) {
    setShowMessage(false)
    try {
      const response = await fetch('/api/canal-de-denuncia', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_destinatario: destinatario,
          assunto: values.assunto,
          email: values.email,
          descricao: values.descricao,
          desejaSerInformado: desejoSerInformado,
          attachments,
        }),
      })
      console.log(response)
      toast.success('E-mail enviado com sucesso')
      setShowMessage(true)
      reset()
    } catch (error) {
      console.log(error)
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
            multiple
            onChange={(e) => {
              const files = e.target.files
              if (files) {
                Promise.all(
                  Array.from(files).map(async (file) => ({
                    filename: file.name,
                    content: Buffer.from(await file.arrayBuffer()).toString(
                      'base64',
                    ),
                  })),
                ).then((filesArray) => {
                  setAttachments(filesArray as any)
                })
              }
            }}
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
          <small>
            Ao marcar esta opção, você concorda em fornecer um endereço de
            e-mail para receber atualizações sobre sua denúncia. Isso significa
            que sua denúncia deixará de ser anônima, mas suas informações serão
            tratadas com confidencialidade.
          </small>
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
