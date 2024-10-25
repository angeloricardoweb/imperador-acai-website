import { Button } from '@/components/Buttons/Button'
import Subheader from '@/components/Header/Subheader'
import { Container } from '@/components/Partials/Container'
import SectionCall from '@/components/Sections/SectionCall'
import useLang from '@/hooks/useLang'
import { langData } from '@/location/langData'
import { getInfos } from '@/services/prismicData/getInfos'
import { getProductDetails } from '@/services/prismicData/getProductDetails'
import { Metadata } from 'next'
import React from 'react'
export const fetchCache = 'force-no-store'

export async function generateMetadata({
  params,
}: {
  params: { uid: string }
}): Promise<Metadata> {
  const product = await getProductDetails(params.uid)

  return {
    title: product.data.nome,
    description: product.data.descricao,
    openGraph: {
      images: [
        {
          url: product.data.imagem.url as string,
        },
      ],
    },
  }
}

export default async function Page({ params }: { params: { uid: string } }) {
  const product = await getProductDetails(params.uid)
  const { stringData } = useLang()
  const infos = await getInfos()

  if (!product) {
    return <div>Produto não encontrado</div>
  }

  return (
    <main>
      <Subheader title={product.data.nome as string} />
      <div className="py-10">
        <h2 className="text-center text-brand-green font-bold text-7xl">
          {stringData(langData.OSaborDaAmazonia)}
        </h2>
      </div>
      <Container>
        <section className="md:grid grid-cols-9 gap-20">
          <div className="col-span-4 bg-[url(/img/octogono.svg)] bg-contain bg-no-repeat bg-center flex items-center justify-center p-10">
            <img
              src={product.data.imagem.url as string}
              alt={product.data.imagem.alt ?? 'imagem'}
              className="w-full"
            />
          </div>
          <div className="col-span-5 py-10">
            {
              <div>
                <p className="text-xl">{product.data.categoria}</p>
              </div>
            }
            <h2 className="text-4xl font-bold mb-3">{product.data.nome}</h2>
            <p>{product.data.descricao}</p>
            <div className="flex items-center gap-2 mt-4">
              <div>
                <img src="/img/bag.svg" alt="bag" />
              </div>
              <div>
                <strong>Disponível em:</strong>
                <p>{product.data.disponibilidade}</p>
              </div>
            </div>
            <div className="mt-5">
              <a
                href={infos.data.whatsapp as string}
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="primaryGreen">
                  <p className="text-xl text-white px-3 py-2">Comprar</p>
                </Button>
              </a>
            </div>
            {/* <ContentRichText data={product.data.conteudo} /> */}
          </div>
        </section>
      </Container>
      <SectionCall />
    </main>
  )
}
