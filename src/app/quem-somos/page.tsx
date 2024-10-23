import Subheader from '@/components/Header/Subheader'
import { Container } from '@/components/Partials/Container'
import ContentRichText from '@/components/Prismic/ContentRichText'
import ContentRichTextWhite from '@/components/Prismic/ContentRichTextWhite'
import useLang from '@/hooks/useLang'
import { langData } from '@/location/langData'
import { getAboutUsPage } from '@/services/prismicData/getAboutUsPage'
import { getSocialCommitment } from '@/services/prismicData/getSocialCommitment'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quem Somos',
}

export default async function Page() {
  const { data } = await getAboutUsPage()
  const { data: compromissoSocial } = await getSocialCommitment()
  const { stringData } = useLang()

  if (!data) return null

  return (
    <main className="">
      <Subheader title={'Quem Somos'} />
      <Container>
        <div className="my-10">
          <h3 className="text-7xl text-brand-green text-center font-bold">
            {data.titulo}
          </h3>
        </div>
        <section className="grid grid-cols-5 gap-5">
          <div className="bg-[url(/img/img-quem-somos.png)] bg-cover col-span-2 h-full"></div>
          <div className="col-span-3">
            <ContentRichText data={data.conteudo} />
          </div>
        </section>
        <section className="flex justify-between gap-5 flex-wrap my-40">
          <div className="max-w-[260px] space-y-5">
            <img className="h-40" src="/img/missao.svg" alt="missao" />
            <h3 className="font-bold text-3xl">
              {stringData(langData.mission)}
            </h3>
            <p>{data.missao}</p>
          </div>
          <div className="max-w-[260px] space-y-5">
            <img className="h-40" src="/img/visao.svg" alt="visao" />
            <h3 className="font-bold text-3xl">
              {stringData(langData.vision)}
            </h3>
            <p>{data.visao}</p>
          </div>
          <div className="max-w-[260px] space-y-5">
            <img className="h-40" src="/img/valores.svg" alt="valores" />
            <h3 className="font-bold text-3xl">
              {stringData(langData.values)}
            </h3>
            <p>{data.valores}</p>
          </div>
        </section>
      </Container>
      <Container>
        <section className="bg-[url(/img/bg-barco.png)] bg-cover bg-center">
          <div className="p-20 max-w-2xl">
            <h2 className="text-5xl font-bold text-white mb-5">
              {compromissoSocial.titulo}
            </h2>
            <ContentRichTextWhite data={compromissoSocial.conteudo} />
          </div>
        </section>
      </Container>
    </main>
  )
}
