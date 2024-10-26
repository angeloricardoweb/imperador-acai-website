import Subheader from '@/components/Header/Subheader'
import { Container } from '@/components/Partials/Container'
import ContentRichText from '@/components/Prismic/ContentRichText'
import useLang from '@/hooks/useLang'
import { langData } from '@/location/langData'
import { getCertifications } from '@/services/prismicData/getCertifications'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Certificações',
}

export default async function Page() {
  const { data } = await getCertifications()
  const { stringData } = useLang()

  if (!data) return null

  return (
    <main>
      <Subheader title={stringData(langData.Certifications)} />
      <Container>
        <div className="my-10">
          <h3 className="text-7xl text-brand-green text-center font-bold">
            {stringData(langData.QualidadeComprovada)}
          </h3>
        </div>
        <section className="grid grid-cols-2 gap-5 mb-20">
          <div className="flex items-center justify-center gap-5">
            {data?.itens.map((certification) => {
              return (
                <img
                  src={certification.certificacao.url as string}
                  key={certification.certificacao.url}
                  alt="Certificação"
                  width={90}
                  height={90}
                />
              )
            })}
          </div>
          <ContentRichText data={data.conteudo} />
        </section>
      </Container>
    </main>
  )
}
