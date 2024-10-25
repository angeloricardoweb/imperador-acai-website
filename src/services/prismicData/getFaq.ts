'use server'
import { redirect } from 'next/navigation'
import { client } from '../prismicClient'
import { getCurrentLang } from './getCurrentLang'

export const getFaq = async () => {
  const lang = await getCurrentLang()
  const data = await client
    .getSingle('faq', {
      lang: lang ?? 'pt-br',
    })
    .catch(() => {
      redirect('/404')
    })
  return data
}
