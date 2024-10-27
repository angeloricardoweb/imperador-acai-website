'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { Button } from '../Buttons/Button'
import Link from 'next/link'
import { ProdutoDocument } from '../../../prismicio-types'
import useLang from '@/hooks/useLang'
import { langData } from '@/location/langData'

export default function SwiperProducts({
  products,
}: {
  products: ProdutoDocument[]
}) {
  const { stringData } = useLang()

  return (
    <Swiper
      spaceBetween={30}
      slidesPerGroup={1}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
      className="px-4 py-8"
      breakpoints={{
        1120: {
          slidesPerView: 3,
          spaceBetween: 24,
          slidesPerGroup: 3,
        },
      }}
    >
      {products?.map((product) => {
        return (
          <SwiperSlide key={product.id} className="flex justify-center mb-10">
            <Link
              href={`/produtos/${product.uid}`}
              className="hover:scale-95 transition-all"
            >
              <img
                src={product?.data.imagem.url as string}
                alt={product.data.nome as string}
              />
              <div className="md:w-80">
                <h3 className="font-bold text-white text-center text-4xl">
                  {product.data.nome}
                </h3>
                <div className="flex translate-y-10 justify-center">
                  <Button variant={'outlinedWhite'}>
                    {stringData(langData.SaibaMais)}
                  </Button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
