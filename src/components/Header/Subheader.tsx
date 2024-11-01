'use client'
import { Container } from '../Partials/Container'

export default function Subheader({ title }: { title: string }) {
  return (
    <div className="border-b pt-20 pb-5 bg-[url(/img/topo.png)]">
      <Container>
        {/* <span className="text-zinc-800">Você está em</span> */}
        <h2 className="text-white font-bold text-3xl">{title}</h2>
      </Container>
    </div>
  )
}
