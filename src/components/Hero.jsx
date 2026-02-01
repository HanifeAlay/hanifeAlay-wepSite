import React from 'react'
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";
import "../style/Hero.css"
import laptopResim from '../assets/macbook.avif'
import memojiResim from '../assets/hanifeAlay-memoji.png'

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  // Sahne 
  const sahneRef = useRef(null);

  useEffect (() => {
    const sahne = sahneRef.current;
    if(!sahne) 
      return;

    // yazı duvarı
    const yaziDuvari = sahne.querySelector(".yazi_duvari");
    const kelimeler = sahne.querySelectorAll(".kelime");

    // ön katman elemanları 
    const laptopKapsayici = sahne.querySelector(".laptop_kapsayici");
    const memoji = sahne.querySelector(".memoji");

    //güvenlik 
    if(!yaziDuvari || kelimeler.length === 0 ||  !laptopKapsayici || !memoji)
      return;

    // başlangıç
    gsap.set(yaziDuvari, { opacity: 0 });
    gsap.set(kelimeler, { opacity: 0, y: 10 });

    gsap.set(laptopKapsayici, { opacity: 0, y: 60, scale: 0.98 });
    gsap.set(memoji, { opacity: 0, y: 18, scale: 0.98 });

    // Intro
    const intro = gsap.timeline({defaults: {ease: "power2.out" } });
    

    intro
    // önce yazi duvarı 
    .to(yaziDuvari, { opacity: 1, duration: 0.8 }, 0.05)
    // sonra kelimler 
    .to(kelimeler, { opacity: 1, y: 0, duration: 0.45, stagger: 0.02 }, 0.20)
    // laptop 
    .to(laptopKapsayici, { opacity: 1, y: 0, scale: 1, duration: 0.7 }, 0.20)
    // memoji
    .to(memoji, { opacity: 1, y: 0, scale: 1, duration: 0.55 }, 0.45);

    const kaydirma = gsap.timeline({
      scrollTrigger: {
        trigger: sahne,
        start: "top top",
        end: "+=900",
        once: true,
        scrub: true,
        pinSpacing: true,
      },
      defaults: { ease: "none"},
    });

    // laptop kapanması
    kaydirma
    .to (
      laptopKapsayici,
      {
        y: 18,
        rotateX: 70, // 3D kapanma hissi
        scaleY: 0.22, // yükseliş küçülür
        opacity: 0.95,
        duration: 1,
        ease: "power2.out",
      })
    //memoji yükselişi 
    .to(
      memoji,
      {
        y: -12,
        scale: 1.05,
        opacity: 1,
        duration: 0.8,
      }, "-=0.6")
    // arka planda yazılar biraz geride kalsın 
    .to(
      yaziDuvari,
      {
        opacity: 0.85,
        duration: 0.6,
      }, 0);

   // component kapanırsa temizle 
   return () => {
    intro.kill();
    kaydirma.kill();
  
   };
  }, []);

  return (
    <section ref={sahneRef} className='sahne' id='giris'>
      {/* Arka plan yazı katmanı */}
      <div className='yazi_duvari' aria-hidden="true">
         {/* Satır 1 */}
        <div className="yazi_satiri yazi_on_planda">
          <span className="kelime renk_lila vurgu">FRONTEND DEVELOPER</span>
          <span className="kelime renk_pembe">ARAYÜZ</span>
          <span className="kelime renk_sari">TASARIM</span>
          <span className="kelime renk_yesil">REACT DEVELOPER</span>
          <span className="kelime renk_turuncu">PORTFÖY</span>
          <span className="kelime renk_lila">ÜRETİM</span>
          <span className="kelime renk_pembe">DİSİPLİN</span>
          <span className="kelime renk_sari">HTML</span>
          <span className="kelime renk_yesil">CSS</span>
        </div>

        {/* Satır 2 */}
        <div className="yazi_satiri yazi_on_planda">
          <span className="kelime renk_turuncu">UI/UX</span>
          <span className="kelime renk_yesil">ÖĞRENME</span>
          <span className="kelime renk_sari vurgu">JAVASCRIPT</span>
          <span className="kelime renk_pembe">GİTHUB</span>
          <span className="kelime kelime_onde  renk_lila">Hanife Alay</span>
          <span className="kelime renk_turuncu">REDUX</span>
          <span className="kelime renk_yesil">REACT</span>
          <span className="kelime renk_sari">PROJE</span>
        </div>

         {/* Satır 3 */}
        <div className="yazi_satiri yazi_on_planda">
          <span className="kelime renk_turuncu">PROJE</span>
          <span className="kelime renk_yesil">TASARIM</span>
          <span className="kelime renk_sari vurgu">GİTHUP</span>
          <span className="kelime renk_pembe">React</span>
          <span className="kelime kelime_onde renk_sari">FRONTEND DEVELOPER</span>
          <span className="kelime renk_turuncu">GELİŞTİRME</span>
          <span className="kelime renk_yesil">REACT</span>
          <span className="kelime renk_sari">PROJE</span>
        </div>

         {/* Satır 4 */}
        <div className="yazi_satiri yazi_on_planda">
          <span className="kelime renk_turuncu">PROJE</span>
          <span className="kelime renk_yesil">DOCKER</span>
          <span className="kelime renk_sari vurgu">DOCKER</span>
          <span className="kelime renk_pembe">ÜRETİM</span>
          <span className="kelime kelime_onde renk_pembe">FREELANCE DESINGER</span>
          <span className="kelime renk_turuncu">GELİŞTİRME</span>
          <span className="kelime renk_yesil">REACT</span>
          <span className="kelime renk_sari">GİTHUP</span>
        </div>

         {/* Satır 5 */}
        <div className="yazi_satiri yazi_on_planda">
          <span className="kelime renk_turuncu">PROJE</span>
          <span className="kelime renk_yesil">ÖĞRENME</span>
          <span className="kelime renk_sari vurgu">GİTHUB</span>
          <span className="kelime renk_pembe">ÜRETİM</span>
          <span className="kelime kelime_onde renk_turuncu">MOBİL DEVELOPER</span>
          <span className="kelime renk_turuncu">GELİŞTİRME</span>
          <span className="kelime renk_yesil">REACT</span>
          <span className="kelime renk_sari">PROJE</span>
        </div>

         {/* Satır 6 */}
        <div className="yazi_satiri yazi_on_planda">
          <span className="kelime renk_turuncu">PROJE</span>
          <span className="kelime renk_yesil">GİTHUP</span>
          <span className="kelime renk_sari vurgu">FRONTEND DEVELOPER</span>
          <span className="kelime renk_pembe">ÜRETİM</span>
          <span className="kelime renk_lila">MUI</span>
          <span className="kelime renk_turuncu">GELİŞTİRME</span>
          <span className="kelime renk_yesil">TYPESCRIPT</span>
          <span className="kelime renk_sari">PROJE</span>
        </div>

         {/* Satır 7 */}
        <div className="yazi_satiri yazi_on_planda">
          <span className="kelime renk_turuncu">PROJELER</span>
          <span className="kelime renk_yesil">ÖĞRENME</span>
          <span className="kelime renk_sari vurgu">DEVELOPER</span>
          <span className="kelime renk_pembe">PYTHON</span>
          <span className="kelime renk_lila">WEPSİTE</span>
          <span className="kelime renk_turuncu">GELİŞTİRME</span>
          <span className="kelime renk_yesil">DEVELOPER</span>
          <span className="kelime renk_sari">PROJE</span>
        </div>
         {/* Satır 8 */}
        <div className="yazi_satiri yazi_on_planda">
          <span className="kelime renk_turuncu">PROJE</span>
          <span className="kelime renk_yesil">ÖĞRENME</span>
          <span className="kelime renk_sari vurgu">SQL</span>
          <span className="kelime renk_pembe">ÜRETİM</span>
          <span className="kelime renk_lila">DİSİPLİN</span>
          <span className="kelime renk_turuncu">GELİŞTİRME</span>
          <span className="kelime renk_yesil">DOCKER</span>
          <span className="kelime renk_sari">PROJE</span>
        </div>

         {/* Satır 9 */}
        <div className="yazi_satiri yazi_on_planda">
          <span className="kelime renk_turuncu">PROJE</span>
          <span className="kelime renk_yesil">ÖĞRENME</span>
          <span className="kelime renk_sari vurgu">AUTOCAD</span>
          <span className="kelime renk_pembe">ÜRETİM</span>
          <span className="kelime renk_lila">PHOTOSHOP</span>
          <span className="kelime renk_turuncu">GELİŞTİRME</span>
          <span className="kelime renk_yesil">REACT</span>
          <span className="kelime renk_sari">EXCEL</span>
        </div>

       {/* Satır 10 */}
        <div className="yazi_satiri yazi_on_planda ">
          <span className="kelime renk_turuncu">UI/UX</span>
          <span className="kelime renk_yesil">ÖĞRENME</span>
          <span className="kelime renk_sari vurgu">GİTHUP</span>
          <span className="kelime renk_pembe">BOOTSTRAP</span>
          <span className="kelime renk_lila">TYPESCRIPT</span>
          <span className="kelime renk_turuncu">REDUX</span>
          <span className="kelime renk_yesil">REACT</span>
          <span className="kelime renk_sari">PROJE</span>
        </div>
     </div>

     {/* Ön katman laptop/memoji */}
     <div className='on_katman'>

      <div className='laptop_kapsayici' aria-hidden="true">
          <img className='laptop_resim' src={laptopResim} alt="Laptop" />
      </div>

       <div className='memoji_kapsayici'>
      <img className='memoji' src={memojiResim} alt="Memoji" />
      </div>
     </div>

     <div className='hero_cizgi' aria-hidden="true" />
    </section>
  )
}

export default Hero;