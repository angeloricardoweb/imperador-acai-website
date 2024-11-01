import FadeAnimation from '@/components/Animations/FadeAnimation'
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
      <Subheader title={`Certificações / Certifications`} />
      <Container>
        <div className="my-10">
          <FadeAnimation direction="down">
            <h3 className="text-5xl md:text-7xl text-brand-green text-center font-bold">
              {stringData(langData.QualidadeComprovada)}
            </h3>
          </FadeAnimation>
        </div>
        <section className="grid md:grid-cols-2 gap-5 mb-20">
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {data?.itens.map((certification) => {
              return (
                <img
                  src={certification.certificacao.url as string}
                  key={certification.certificacao.url}
                  alt="Certificação"
                  width={120}
                  height={120}
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
