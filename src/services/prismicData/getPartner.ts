'use server'
import { redirect } from 'next/navigation'
import { client } from '../prismicClient'
import { getCurrentLang } from './getCurrentLang'

export const getPartner = async () => {
  const lang = await getCurrentLang()
  const data = await client
    .getSingle('secao_seja_um_distribuidor', {
      lang: lang ?? 'pt-br',
    })
    .catch(() => {
      redirect('/404')
    })
  return data
}
