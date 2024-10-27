'use client'
import { ContactForm } from '@/components/Forms/ContactForm'
import Subheader from '@/components/Header/Subheader'
import { Container } from '@/components/Partials/Container'
import ContentRichText from '@/components/Prismic/ContentRichText'
import useLang from '@/hooks/useLang'
import { langData } from '@/location/langData'
import { getContactPage } from '@/services/prismicData/getContactPage'
import { getInfos } from '@/services/prismicData/getInfos'
import useSWR from 'swr'

export default async function Page() {
  const { stringData } = useLang()

  const { data: infos } = useSWR('getInfos', async () => {
    const response = await getInfos()
    return response
  })

  const { data: contact } = useSWR('getContactPage', async () => {
    const response = await getContactPage()
    return response
  })

  return (
    <main className="">
      <Subheader title={stringData(langData.ContactUs)} />
      <Container>
        <div className="grid md:grid-cols-2 gap-10 py-10">
          <section>
            <ContentRichText data={contact?.data.descricao} />
            <ContactForm />
          </section>
          <section>
            <div className="flex items-center justify-center gap-5">
              <img src="/img/calendar.svg" alt="calendar" />
              <div>
                <strong className="text-lg">
                  {stringData(langData.WorkingHours)}
                </strong>
                <p>{infos?.data.horario_de_funcionamento}</p>
              </div>
            </div>
            <div className="mt-10">
              <strong className="text-lg">
                {stringData(langData.OndeEstamos)}
              </strong>
              <p>{infos?.data.endereco}</p>
              {contact?.data.mapa_iframe && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: contact?.data.mapa_iframe,
                  }}
                />
              )}
            </div>
          </section>
        </div>
      </Container>
    </main>
  )
}
