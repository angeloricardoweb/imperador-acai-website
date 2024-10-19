'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { DepoimentosDocumentData } from '../../../prismicio-types'

export default function SwiperTestimonials({
  data,
}: {
  data: DepoimentosDocumentData
}) {
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
      {data.items.map((item) => {
        return (
          <SwiperSlide key={item.descricao}>
            <div
              className="flex justify-center items-end overflow-hidden p-10 mb-10 bg-cover bg-center bg-no-repeat aspect-[5/7] relative rounded-lg shadow"
              style={{
                backgroundImage: `url(${item?.imagem.url as string})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-0"></div>
              <div className="w-80 z-10">
                <p className="text-sm text-white">{item.descricao}</p>
                <h3 className="font-bold text-white mt-3 text-sm">
                  {item.autor}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
