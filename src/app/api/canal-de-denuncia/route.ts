import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import ReportChanellEmail from '@/components/EmailsTemplates/ReportChanellEmail'

const resend = new Resend('re_UEBC2hzC_NgfWPEZjjBesoMHyoQ34K8Yi')

export async function POST(req: NextRequest) {
  const json = req.json()
  const {
    email,
    relacao,
    descricao,
    desejaSerInformado,
    attachments,
    email_destinatario: emailDestinatario,
  } = await json

  try {
    const data = await resend.emails.send({
      from: 'Novo Email <send@imperadoracai.com>',
      to: [emailDestinatario, 'angeloricardodev@gmail.com'],
      subject: 'Novo contato via Site',
      react: ReportChanellEmail({
        email,
        relacao,
        descricao,
        desejaSerInformado,
      }),
      attachments: attachments.map((file: any) => ({
        filename: file.filename,
        content: file.content,
      })),
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
