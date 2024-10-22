import Subheader from '@/components/Header/Subheader'
import useLang from '@/hooks/useLang'
import { langData } from '@/location/langData'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quem Somos',
}

export default function Home() {
  const { stringData } = useLang()

  return (
    <main className="">
      <Subheader title={'Quem Somos'} />
      <div className="my-10">
        <h3 className="text-7xl text-brand-green text-center font-bold">
          {stringData(langData.AKingOfQuality)}
        </h3>
      </div>
      <section className="grid grid-cols-5 gap-5">
        <div className="bg-[url(/img/img-quem-somos.png)] col-span-2 h-full"></div>
      </section>
    </main>
  )
}
