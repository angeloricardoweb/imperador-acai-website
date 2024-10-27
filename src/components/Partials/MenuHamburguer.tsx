'use client'
import React from 'react'
import useMenuHamburguerStore from '../../stores/useMenuHamburguerStore'
import useNavLinks from '@/hooks/useNavLinks'
import { useRouter } from 'next/navigation'
import { ChevronDown, X } from 'lucide-react'
import { usePrismicLangs } from '@/hooks/usePrismicLangs'
import { useCookies } from '@/stores/useCookies'

export function MenuHamburguer() {
  const { setShowMenuHamburguer, showMenuHamburguer } = useMenuHamburguerStore()
  const { navLinks } = useNavLinks()
  const { availableLangs } = usePrismicLangs()
  const { addCookie, getCookie } = useCookies()

  function addLangCookie(lang: string) {
    addCookie('lang', lang)
    window.location.reload()
  }
  const router = useRouter() // router.push('/')

  function handleRouting(routeName: string) {
    router.push(routeName)
    setShowMenuHamburguer(false)
  }

  return (
    <div
      className={`fixed top-0 z-[999999] flex h-full w-[90%] items-center justify-center bg-white/80 bg-[url(/img/background.png)] bg-cover bg-fixed bg-center shadow-2xl backdrop-blur-md md:hidden ${
        showMenuHamburguer ? 'right-0' : '-right-[700px]'
      } overflow-y-auto transition-all`}
    >
      <div className="relative h-full w-full py-20 border">
        <X
          className="fixed right-5 top-5 text-brand-green cursor-pointer bg-black/10 p-2 rounded-full"
          onClick={() => setShowMenuHamburguer(false)}
          width={32}
          height={32}
        />
        <div className="flex justify-center px-10 py-4">
          <img src="/img/logo.png" alt="logo" />
        </div>

        <div className="py-20">
          {navLinks.map((link: any) => {
            if (link?.submenu) {
              return (
                <div
                  key={link.name}
                  className="border-brand-yellow cursor-pointer border-b bg-white text-2xl text-zinc-900"
                >
                  <div className="flex justify-between border-b p-5">
                    <div className="">{link.name}</div>
                    <ChevronDown size={20} className="mt-2 text-black/40" />
                  </div>
                  <div className="flex flex-col gap-2 px-5 py-1">
                    {link.submenu.map((sublink: any, index: any) => (
                      <div
                        key={sublink.label}
                        className={`cursor-pointer bg-white p-5 text-xl text-zinc-900 ${link.submenu.length - 1 === index ? '' : 'border-b'}`}
                        onClick={() => handleRouting(sublink.href)}
                      >
                        {sublink.label}
                      </div>
                    ))}
                  </div>
                </div>
              )
            } else
              return (
                <div
                  key={link.name}
                  className="border-brand-yellow cursor-pointer border-b bg-white p-5 text-2xl text-zinc-900"
                  onClick={() => handleRouting(link.route)}
                >
                  {link.name}
                </div>
              )
          })}
          <div className="flex justify-center gap-5 mt-5">
            {availableLangs &&
              availableLangs.length > 1 &&
              availableLangs?.map((lang) => (
                <span
                  className="cursor-pointer hover:opacity-70 uppercase text-3xl"
                  key={lang.id}
                  onClick={() => addLangCookie(lang.id)}
                  title={lang.name}
                  style={{ opacity: getCookie('lang') === lang.id ? 1 : 0.5 }}
                >
                  {lang.id.split('-')[1]}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
