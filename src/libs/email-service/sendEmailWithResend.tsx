'use server'
import AWSVerifyEmail from '@/components/EmailsTemplates/AWSVerifyEmail'
import { render } from '@react-email/components'
import { Resend } from 'resend'

const resend = new Resend('re_UEBC2hzC_NgfWPEZjjBesoMHyoQ34K8Yi')

export async function sendEmailWithResend() {
  const emailHtml = await render(<AWSVerifyEmail verificationCode="123456" />)

  const response = await resend.emails.send({
    from: 'Novo Email <send@imperadoracai.com>',
    to: ['angeloengcomp@gmail.com'],
    subject: 'Hello World',
    html: emailHtml as string,
  })

  console.log(response)

  return response
}
