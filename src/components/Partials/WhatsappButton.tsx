import { getInfos } from '@/services/prismicData/getInfos'
import { Icon } from '@iconify/react'
import useSWR from 'swr'

export function WhatsappButton() {
  const { data } = useSWR('getInfos', async () => {
    const response = await getInfos()
    return response
  })
  return (
    <a
      href={
        data?.data.whatsapp ||
        'https://api.whatsapp.com/send?phone=5511999999999'
      }
      target="_blank"
      className="fixed bottom-32 right-12 z-50 md:bottom-12"
      rel="noreferrer"
    >
      <Icon
        icon="logos:whatsapp-icon"
        className="transition-all hover:scale-105"
        fontSize={48}
      />
    </a>
  )
}
