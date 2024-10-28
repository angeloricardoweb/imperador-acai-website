import Subheader from '@/components/Header/Subheader'
import { Container } from '@/components/Partials/Container'
import ContentRichText from '@/components/Prismic/ContentRichText'
import ContentRichTextWhite from '@/components/Prismic/ContentRichTextWhite'
import useLang from '@/hooks/useLang'
import { langData } from '@/location/langData'
import { getAboutUsPage } from '@/services/prismicData/getAboutUsPage'
import { getSocialCommitment } from '@/services/prismicData/getSocialCommitment'
import { getSustentability } from '@/services/prismicData/getSustentability'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quem Somos',
}

export default async function Page() {
  const { data } = await getAboutUsPage()
  const { data: compromissoSocial } = await getSocialCommitment()
  const { data: sustentabilidade } = await getSustentability()
  const { stringData } = useLang()

  if (!data) return null

  return (
    <main className="">
      <Subheader title={stringData(langData.About)} />
      <Container>
        <div className="my-10">
          <h3 className="text-5xl md:text-7xl text-brand-green md:text-center font-bold">
            {data.titulo}
          </h3>
        </div>
        <section className="md:grid grid-cols-5 gap-5">
          <div className="bg-[url(/img/img-quem-somos.png)] bg-cover col-span-2 h-full"></div>
          <div className="col-span-3">
            <ContentRichText data={data.conteudo} />
          </div>
        </section>
        <section className="flex justify-center md:justify-between gap-5 flex-wrap my-10 md:my-40 items-center">
          <div className="max-w-[260px] space-y-5">
            <img className="h-40 mx-auto" src="/img/missao.svg" alt="missao" />
            <h3 className="font-bold text-3xl text-center">
              {stringData(langData.mission)}
            </h3>
            <p className="text-center">{data.missao}</p>
          </div>
          <div className="max-w-[260px] space-y-5">
            <img className="h-40" src="/img/visao.svg" alt="visao" />
            <h3 className="font-bold text-3xl text-center">
              {stringData(langData.vision)}
            </h3>
            <p className="text-center">{data.visao}</p>
          </div>
          <div className="max-w-[260px] space-y-5">
            <img className="h-40" src="/img/valores.svg" alt="valores" />
            <h3 className="font-bold text-3xl text-center">
              {stringData(langData.values)}
            </h3>
            <p className="text-center">{data.valores}</p>
          </div>
        </section>
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
