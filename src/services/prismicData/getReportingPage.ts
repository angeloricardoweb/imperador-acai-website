'use server'
import { getCurrentLang } from './getCurrentLang'
import { client } from '../prismicClient'

export const getReportingPage = async () => {
  const lang = await getCurrentLang()
  const data = await client.getSingle('canal_de_denuncia', {
    lang: lang ?? ('pt-br' as any),
  })
  return data
}
