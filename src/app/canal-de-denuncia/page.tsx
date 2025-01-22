'use client'
import { ReportingChannelForm } from '@/components/Forms/ReportingChannelForm'
import Subheader from '@/components/Header/Subheader'
import { Container } from '@/components/Partials/Container'
import ContentRichText from '@/components/Prismic/ContentRichText'
import { getReportingPage } from '@/services/prismicData/getReportingPage'
import useSWR from 'swr'

export default async function Page() {
  const { data } = useSWR('getReportingPage', async () => {
    const response = await getReportingPage()
    return response
  })

  return (
    <main className="">
      <Subheader title={`Canal de denúncia / Reporting channel`} />
      <Container>
        <div className="grid md:grid-cols-2 gap-10 py-10">
          <section>
            <ContentRichText data={data?.data.conteudo} />
            <ReportingChannelForm />
          </section>
          <section
            className="bg-cover bg-center bg-no-repeat rounded"
            style={{
              backgroundImage: `url(${data?.data.banner.url})`,
            }}
          ></section>
        </div>
      </Container>
    </main>
  )
}
