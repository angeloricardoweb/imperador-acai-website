'use server'
import { getCurrentLang } from './getCurrentLang'
import { client } from '../prismicClient'

export const getSocialCommitment = async () => {
  const lang = await getCurrentLang()
  const data = await client.getSingle('compromisso_social', {
    lang: lang ?? ('pt-br' as any),
  })
  return data
}
