'use client'
import React, {useMemo, useState} from 'react'
import Image from 'next/image'

export default function Page(){
  const [lang,setLang]=useState<'ar'|'en'>('en')
  const t = useMemo(()=>tr(lang),[lang])
  const CAN_IMG={mint:'/cans/can_mint.png',ice:'/cans/can_ice.png',citrus:'/cans/can_citrus.png',berry:'/cans/can_berry.png',licorice:'/cans/can_licorice.png',apple:'/cans/can_apple.png',ginger:'/cans/can_ginger.png',tea:'/cans/can_tea.png'} as const
  const PRODUCTS=[
    {nEn:'Falketind Menthol S6', nAr:'فالكتيند منتول S6', fmt:'Slim', nic:'20 mg/g', net:'15.5 g', cat:'mint'},
    {nEn:'Folgefonna Peppermint S5', nAr:'فولجفونّا بيبرمنت S5', fmt:'Slim', nic:'16 mg/g', net:'15.5 g', cat:'ice'},
    {nEn:'Galdhøpiggen Mint S2', nAr:'جالهوبغن منت S2', fmt:'Slim', nic:'8 mg/g', net:'15.5 g', cat:'mint'},
    {nEn:'Hardanger Strawberry S3', nAr:'هاردانغر فراولة S3', fmt:'Slim', nic:'12 mg/g', net:'15.5 g', cat:'berry'},
  ] as const
  const dir=lang==='ar'?'rtl':'ltr'
  return (
    <div dir={dir} className="min-h-screen bg-gradient-to-b from-[#eaf4ff] to-white">
      <header className="bg-white/80 backdrop-blur border-b border-blue-100">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full"/>
            <div className="font-semibold">Nefas White — MENA Wholesale</div>
          </div>
          <div className="inline-flex rounded-xl border border-blue-200 overflow-hidden">
            <button onClick={()=>setLang('ar')} className={`px-3 py-1.5 text-sm ${lang==='ar'?'bg-[#2f80ed] text-white':'bg-white'}`}>AR</button>
            <button onClick={()=>setLang('en')} className={`px-3 py-1.5 text-sm ${lang==='en'?'bg-[#2f80ed] text-white':'bg-white'}`}>EN</button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold">{t.h1}</h1>
        <p className="mt-3 text-neutral-700">{t.sub}</p>

        <h2 className="mt-10 text-2xl font-bold">{t.productsTitle}</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRODUCTS.map((p,i)=>(
            <div className="rounded-2xl border border-blue-100 p-4 bg-white" key={i}>
              <div className="h-40 grid place-content-center"><img src={CAN_IMG[p.cat as keyof typeof CAN_IMG]} className="h-36 mx-auto" alt="can"/></div>
              <div className="mt-2 font-semibold">{lang==='ar'?p.nAr:p.nEn}</div>
              <div className="text-sm text-neutral-600">{p.fmt} • {p.nic} • {p.net}</div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-[#2f80ed] text-white"><div className="mx-auto max-w-6xl px-4 py-6 text-sm">Email: nefaswhite@gmail.com</div></footer>
    </div>
  )
}

function tr(lang:'ar'|'en'){
  if(lang==='ar') return {h1:'نَفَس وايت — أبيض كلياً، صنع في النرويج', sub:'بوابة جملة للشرق الأوسط (AR/EN).', productsTitle:'المنتجات'}
  return {h1:'Nefas White — All-White, Made in Norway', sub:'Wholesale gateway for MENA (AR/EN).', productsTitle:'Products'}
}