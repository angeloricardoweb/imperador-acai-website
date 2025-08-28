'use server'
import ReportChanellEmail, {
  ReportChanellEmailProps,
} from '@/components/EmailsTemplates/ReportChanellEmail'
import { render } from '@react-email/components'
import { Resend } from 'resend'

const resend = new Resend('re_UEBC2hzC_NgfWPEZjjBesoMHyoQ34K8Yi')
// assunto,
//   name,
//   email,
//   telefone,
//   estado,
//   cidade,
//   mensagem,
export async function sendDenunciaEmail({
  email,
  descricao,
  desejaSerInformado,
  relacao,
  arquivo,
}: ReportChanellEmailProps & { arquivo?: any }) {
  const emailHtml = await render(
    <ReportChanellEmail
      email={email}
      relacao={relacao}
      descricao={descricao}
      desejaSerInformado={desejaSerInformado}
    />,
  )

  const response = await resend.emails.send({
    from: 'Novo Email <send@imperadoracai.com>',
    to: ['angeloengcomp@gmail.com'],
    subject: 'Novo contato via Site',
    html: emailHtml as string,
    attachments: arquivo
      ? [
          {
            filename: arquivo.name,
            path: arquivo.name,
          },
        ]
      : undefined,
  })

  return response
}
