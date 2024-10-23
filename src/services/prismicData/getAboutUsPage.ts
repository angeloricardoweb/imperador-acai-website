'use server'
import { getCurrentLang } from './getCurrentLang'
import { client } from '../prismicClient'

export const getAboutUsPage = async () => {
  const lang = await getCurrentLang()
  const data = await client.getSingle('pagina_quem_somos', {
    lang: lang ?? ('pt-br' as any),
  })
  return data
}
