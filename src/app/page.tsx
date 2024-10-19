import SwiperHero from '@/components/Swipers/SwiperHero'
import SectionFaq from '@/components/Sections/SectionFaq'
import { Metadata } from 'next'
import { getHeroBanners } from '@/services/prismicData/getHeroBanners'
import SectionAboutUs from '@/components/Sections/SectionAboutUs'
import SectionProducts from '@/components/Sections/SectionProducts'
import SectionBenefits from '@/components/Sections/SectionBenefits'
import SectionSustentabilidade from '@/components/Sections/SectionSustentabilidade'
import SectionPartner from '@/components/Sections/SectionPartner'
import SectionTestimonials from '@/components/Sections/SectionTestimonials'
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
        <SectionSustentabilidade />
        <SectionPartner />
        <SectionTestimonials />
        <SectionFaq />
        {/* <SectionInstagram /> */}
      </div>
    </main>
  )
}
