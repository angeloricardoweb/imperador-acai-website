import React from 'react'
import { Container } from '../Partials/Container'
import { Button } from '../Buttons/Button'

export default function SectionAboutUs() {
  return (
    <Container>
      <section className="py-10 relative">
        <img src="/img/conheca.svg" alt="topo" className="translate-y-10" />
        <div className="grid grid-cols-9 gap-0">
          <div className="col-span-5">
            <h2 className="text-7xl font-bold mt-10">Quem Somos</h2>
            <p className="mt-5">
              <strong className="text-brand-green">Açaí Imperador </strong>
              surgiu em 2010 através da vontade de integrar uma cadeia
              sustentável de extração de açaí na região amazônica, o objetivo
              foi realizar o manejo das palmeiras transformando-as em palmito em
              conserva e principalmente realizar beneficiamento da polpa de
              açaí.{' '}
            </p>
            <div className="mt-5">
              <Button variant="primaryGreen">Saiba mais</Button>
            </div>
          </div>
          <div className="col-span-4">
            <img
              src="/img/bg-aboutus.png"
              alt="bg"
              className="translate-x-10 scale-110"
            />
          </div>
        </div>
        <div className="col-span-4">
          <img
            src="/img/acai.png"
            alt="bg"
            className="absolute -bottom-10 left-0"
          />
        </div>
      </section>
    </Container>
  )
}
