'use server'
import AWSVerifyEmail, {
  AWSVerifyEmailProps,
} from '@/components/EmailsTemplates/AWSVerifyEmail'
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
export async function sendEmailWithResend({
  assunto,
  name,
  email,
  telefone,
  estado,
  cidade,
  mensagem,
}: AWSVerifyEmailProps) {
  const emailHtml = await render(
    <AWSVerifyEmail
      assunto={assunto}
      name={name}
      email={email}
      telefone={telefone}
      estado={estado}
      cidade={cidade}
      mensagem={mensagem}
    />,
  )

  // Determinar o destinatário baseado no assunto
  let toEmails: string[]
  if (assunto === 'Comercial/Vendas') {
    toEmails = ['douglas@produtosimperador.com.br']
  } else {
    toEmails = ['sacpa@produtosimperador.com.br']
  }

  const response = await resend.emails.send({
    from: 'Novo Email <send@imperadoracai.com>',
    to: toEmails,
    subject: `Novo contato via Site - ${assunto}`,
    html: emailHtml as string,
  })

  return response
}
