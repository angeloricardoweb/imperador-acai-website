import Subheader from '@/components/Header/Subheader'
import SectionCall from '@/components/Sections/SectionCall'
import SectionProducts from '@/components/Sections/SectionProducts'
import React from 'react'

export default function Page() {
  return (
    <main>
      <Subheader title={'Produtos'} />
      <SectionProducts />
      <SectionCall />
    </main>
  )
}
