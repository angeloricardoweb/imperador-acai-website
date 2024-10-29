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

  const response = await resend.emails.send({
    from: 'Novo Email <send@imperadoracai.com>',
    to: ['angeloengcomp@gmail.com', 'douglas@produtosimperador.com.br'],
    subject: 'Novo contato via Site',
    html: emailHtml as string,
  })

  return response
}
