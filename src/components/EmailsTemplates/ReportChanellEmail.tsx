/* eslint-disable react/no-unescaped-entities */
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import * as React from 'react'

export interface ReportChanellEmailProps {
  email?: string
  descricao?: string
  desejaSerInformado?: boolean
  relacao: string
}

// more examples in https://react.email/templates
export default function ReportChanellEmail({
  email,
  descricao,
  desejaSerInformado,
  relacao,
}: ReportChanellEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Você recebeu um mensagem do seu site!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={coverSection}>
            <Section style={imageSection}>
              <Img
                src={`https://imperador-acai.vercel.app/img/logo-sqr.png`}
                width="178"
                height="110"
                style={{ margin: '0 auto' }}
                alt="Logo imperador"
              />
            </Section>
            <Section style={upperSection}>
              <Heading style={h1}>Novo contato via Site</Heading>
              <Text style={strongText}>Assunto:</Text>
              <Text style={text}>{'Canal de Denúncia'}</Text>
              <Text style={strongText}>Email:</Text>
              <Text style={text}>{email}</Text>
              <Text style={strongText}>Deseja ser informado:</Text>
              <Text style={text}>{desejaSerInformado ? 'Sim' : 'Não'}</Text>
              <Text style={strongText}>Descrição:</Text>
              <Text style={text}>{descricao}</Text>
              <Text style={strongText}>Relação:</Text>
              <Text style={text}>{relacao}</Text>
            </Section>
            <Hr />
          </Section>
          <Text style={footerText}>
            Você está recebendo este e-mail porque alguém enviou uma mensagem de{' '}
            <Link href="https://imperadoracai.com" target="_blank" style={link}>
              imperadoracai.com
            </Link>
            .
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#fff',
  color: '#212121',
}

const container = {
  padding: '20px',
  margin: '0 auto',
  backgroundColor: '#eee',
}

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '15px',
}

const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
}

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
}

const imageSection = {
  backgroundColor: '#e3e3e3',
  display: 'flex',
  padding: '20px 0',
  alignItems: 'center',
  justifyContent: 'center',
}

const coverSection = { backgroundColor: '#fff' }

const upperSection = { padding: '25px 35px' }

const footerText = {
  ...text,
  fontSize: '12px',
  padding: '0 20px',
}
const strongText = { ...text, fontWeight: 'bold' }
