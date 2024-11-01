import FadeAnimation from '@/components/Animations/FadeAnimation'
import Subheader from '@/components/Header/Subheader'
import { Container } from '@/components/Partials/Container'
import ContentRichText from '@/components/Prismic/ContentRichText'
import ContentRichTextWhite from '@/components/Prismic/ContentRichTextWhite'
import SectionMVV from '@/components/Sections/SectionMVV'
import { getAboutUsPage } from '@/services/prismicData/getAboutUsPage'
import { getSocialCommitment } from '@/services/prismicData/getSocialCommitment'
import { getSustentability } from '@/services/prismicData/getSustentability'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quem Somos',
}

export default async function Page() {
  const { data } = await getAboutUsPage()
  const { data: sustentabilidade } = await getSustentability()
  const { data: compromissoSocial } = await getSocialCommitment()

  if (!data) return null

  return (
    <main className="">
      <Subheader title={`Sobre nós / About us`} />
      <Container>
        <div className="my-10">
          <FadeAnimation direction="down">
            <h3 className="text-5xl md:text-7xl text-brand-green md:text-center font-bold">
              {data.titulo}
            </h3>
          </FadeAnimation>
        </div>
        <section className="md:grid grid-cols-5 gap-5">
          <div className="bg-[url(/img/img-quem-somos.png)] bg-cover col-span-2 h-full"></div>
          <div className="col-span-3">
            <ContentRichText data={data.conteudo} />
          </div>
        </section>
        <SectionMVV data={data} />
      </Container>
      <Container>
        <section className="bg-[url(/img/bg-barco.png)] bg-cover bg-center">
          <div className="p-20 max-w-2xl">
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-5">
              {compromissoSocial.titulo}
            </h2>
            <ContentRichTextWhite data={compromissoSocial.conteudo} />
          </div>
        </section>
        <section className="my-40">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <h2 className="text-5xl md:text-7xl md:text-center font-bold">
                {sustentabilidade?.titulo}
              </h2>
              <div className="mt-5 mb-12">
                <div className="text-white">
                  <ContentRichText data={sustentabilidade.conteudo} />
                </div>
              </div>
            </div>
            <div>
              <img
                className="h-96 object-contain w-full"
                src={'/img/tucano.png'}
                alt="tucano"
              />
            </div>
          </div>
        </section>
      </Container>
    </main>
  )
}
