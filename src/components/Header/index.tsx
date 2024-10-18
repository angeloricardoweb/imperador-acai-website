'use client'
import NavLinks from './NavLinks'
import { useWindowScroll } from 'react-use'
import Link from 'next/link'
import { Container } from '../Partials/Container'
import useMenuHamburguerStore from '../../stores/useMenuHamburguerStore'
import { useEffect } from 'react'
import Icon from '../Adapters/Icon'
import { usePrismicLangs } from '@/hooks/usePrismicLangs'
import { useCookies } from '@/stores/useCookies'

export function Header() {
  const { y } = useWindowScroll()
  const { setShowMenuHamburguer } = useMenuHamburguerStore()
  const { availableLangs } = usePrismicLangs()
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''
  const { addCookie, getCookie } = useCookies()

  function addLangCookie(lang: string) {
    addCookie('lang', lang)
    window.location.reload()
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 w-full shadow-xl backdrop-blur transition-all ${
        y > 0 ? 'bg-white/70' : 'bg-white'
      } `}
    >
      {/* <TopBar /> */}
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <img
              src="/img/logo.png"
              alt=""
              className="cursor-pointer py-3 transition-all"
              style={{ height: y > 0 ? '4rem' : '5rem' }}
            />
          </Link>
          <div className="hidden items-center gap-3 md:flex">
            <NavLinks />
            {availableLangs &&
              availableLangs.length > 1 &&
              availableLangs?.map((lang) => (
                <span
                  className="text-sm cursor-pointer hover:opacity-70 uppercase"
                  key={lang.id}
                  onClick={() => addLangCookie(lang.id)}
                  title={lang.name}
                  style={{ opacity: getCookie('lang') === lang.id ? 1 : 0.5 }}
                >
                  {lang.id.split('-')[1]}
                </span>
              ))}
          </div>
          <div
            className="md:hidden"
            onClick={() => setShowMenuHamburguer(true)}
          >
            <Icon icon="mdi:menu" className="text-3xl text-white" />
          </div>
        </div>
      </Container>
    </header>
  )
}
