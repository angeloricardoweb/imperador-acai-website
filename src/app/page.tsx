import SwiperHero from '@/components/Swipers/SwiperHero'
import SectionFaq from '@/components/Sections/SectionFaq'
import { Metadata } from 'next'
import { getHeroBanners } from '@/services/prismicData/getHeroBanners'
import SectionAboutUs from '@/components/Sections/SectionAboutUs'
import SectionProducts from '@/components/Sections/SectionProducts'
import SectionBenefits from '@/components/Sections/SectionBenefits'
// import { SectionInstagram } from '@/components/Sections/SectionInstagram'

export async function generateMetadata(): Promise<Metadata> {
  return {
    openGraph: {
      images: [
        {
          url: 'https://' + process.env.VERCEL_URL + '/seo.png',
        },
      ],
    },
  }
}

export default async function Home() {
  const banners = await getHeroBanners()
  return (
    <main>
      {banners && <SwiperHero banners={banners.data} />}
      <div>
        <SectionAboutUs />
        <SectionProducts />
        <SectionBenefits />
        <SectionFaq />
        {/* <SectionInstagram /> */}
      </div>
    </main>
  )
}
