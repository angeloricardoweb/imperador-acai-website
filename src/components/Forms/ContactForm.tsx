'use client'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../Buttons/Button'
import { normalizePhoneNumber } from './masks'
import { ZodAllErrors } from './components/ZodAllErrors'
import toast from 'react-hot-toast'
// import AWSVerifyEmail from '../EmailsTemplates/AWSVerifyEmail'

const registerSchema = z.object({
  assunto: z.string().min(1, { message: 'Selecione uma linguagem' }),
  name: z
    .string()
    .min(3, { message: 'Nome deve conter no minimo 3 caracteres' }),
  email: z.string().email({ message: 'Email inválido' }),
  telefone: z.string().min(15, { message: 'Telefone inválido' }),
  estado: z.string().min(2, { message: 'Estado inválido' }),
  cidade: z.string().min(2, { message: 'Cidade inválida' }),
  mensagem: z.string().min(10, { message: 'Mensagem muito curta' }),
})

type FormData = z.infer<typeof registerSchema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({ resolver: zodResolver(registerSchema) })

  const phoneValue = watch('telefone')

  async function postForm(data: FormData) {
    try {
      const { assunto, name, email, telefone, estado, cidade, mensagem } = data

      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          assunto,
          name,
          email,
          telefone,
          estado,
          cidade,
          mensagem,
        }),
      })

      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem')
      }

      reset()
      toast.success('Mensagem enviada com sucesso!')
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      toast.error('Erro ao enviar mensagem. Tente novamente.')
    }
  }

  useEffect(() => {
    setValue('telefone', normalizePhoneNumber(phoneValue))
  }, [phoneValue, setValue])

  return (
    <div className="mt-5">
      <form
        onSubmit={handleSubmit(postForm)}
        className="grid grid-cols-2 gap-2"
      >
        <fieldset className="col-span-2">
          <label htmlFor="assunto" className="b-label">
            Escolha o assunto
          </label>
          <select
            id="assunto"
            className="b-input-select"
            {...register('assunto')}
            style={errors.assunto && { border: '1px solid red' }}
          >
            <option defaultValue={''}>Selecione</option>
            <option value="Comercial/Vendas">Comercial/Vendas</option>
            <option value="Sugestão">Sugestão</option>
            <option value="Elogio">Elogio</option>
            <option value="Reclamação">Reclamação</option>
            <option value="Dúvidas">Dúvidas</option>
          </select>
        </fieldset>

        <fieldset className="col-span-2">
          <label htmlFor="nome" className="b-label">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            {...register('name')}
            style={errors.name && { border: '1px solid red' }}
            className="b-input-text"
            placeholder="John"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="email" className="b-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            style={errors.email && { border: '1px solid red' }}
            className="b-input-text"
            placeholder="voce@email.com"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="telefone" className="b-label">
            Telefone
          </label>
          <input
            type="text"
            id="telefone"
            placeholder="(99) 99999-9999"
            {...register('telefone')}
            className="b-input-text"
            style={errors.telefone && { border: '1px solid red' }}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="estado" className="b-label">
            Estado
          </label>
          <input
            type="text"
            id="estado"
            {...register('estado')}
            style={errors.estado && { border: '1px solid red' }}
            className="b-input-text"
            placeholder="Pará"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="cidade" className="b-label">
            Cidade
          </label>
          <input
            type="text"
            id="cidade"
            {...register('cidade')}
            style={errors.cidade && { border: '1px solid red' }}
            className="b-input-text"
            placeholder="Belém"
          />
        </fieldset>

        <fieldset className="col-span-2">
          <label htmlFor="descricao" className="b-label">
            Mensagem
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('mensagem')}
            style={errors.mensagem && { border: '1px solid red' }}
            className="b-input-textarea"
            placeholder="Escreva sua mensagem aqui..."
          ></textarea>
        </fieldset>

        <div className="col-span-2">
          <ZodAllErrors errors={errors} />
        </div>

        <div className="col-span-2">
          <Button variant="primaryGreen" type="submit" isLoading={isSubmitting}>
            Enviar
          </Button>
        </div>
      </form>
      {/* <AWSVerifyEmail
        assunto="Quero ser um revendedor"
        name="John Doe"
        email="teste@email.com"
        telefone="(99) 99999-9999"
        estado="Pará"
        cidade="Belém"
        mensagem="Mensagem de teste"
      /> */}
    </div>
  )
}
