import { NextRequest, NextResponse } from 'next/server'
import { sendEmailWithResend } from '@/libs/email-service/sendEmailWithResend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { assunto, name, email, telefone, estado, cidade, mensagem } = body

    // Validar campos obrigatórios
    if (
      !assunto ||
      !name ||
      !email ||
      !telefone ||
      !estado ||
      !cidade ||
      !mensagem
    ) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 },
      )
    }

    // Enviar email
    const response = await sendEmailWithResend({
      assunto,
      name,
      email,
      telefone,
      estado,
      cidade,
      mensagem,
    })

    if (response.error) {
      return NextResponse.json(
        { error: 'Erro ao enviar email' },
        { status: 500 },
      )
    }

    return NextResponse.json(
      { message: 'Email enviado com sucesso' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Erro na API de contato:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 },
    )
  }
}
