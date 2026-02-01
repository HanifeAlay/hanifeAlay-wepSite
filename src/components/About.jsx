import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../style/About.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    if (!aboutRef.current) return;

    const ctx = gsap.context(() => {
      const section = aboutRef.current;
      const title = section.querySelector(".about_baslik");
      const text = section.querySelectorAll(".about_paragraf");
      const chips = section.querySelectorAll(".about_chip");

      // İlk başta gizli başlasın 
      gsap.set([title, text, chips], { opacity: 0, y: 16 });

      const tl = gsap.timeline({ paused: true, defaults: { ease: "power2.out" } });

      tl.to(title, { opacity: 1, y: 0, duration: 0.6 }, 0)
        .to(text, { opacity: 1, y: 0, duration: 0.55, stagger: 0.12 }, 0.08)
        .to(chips, { opacity: 1, y: 0, duration: 0.35, stagger: 0.08 }, 0.25);

      ScrollTrigger.create({
        trigger: section,
        start: "top 75%",
        once: true, // sadece bir kere çalışsın, tekrar etmesin
        onEnter: () => tl.play(),
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={aboutRef} className="about" id="hakkimda">
      <div className="about_container">
        <h2 className="about_baslik">
          <span className="about_baslik_renkli">Hakkımda</span>
        </h2>

        <div className="about_icerik">
          <p className="about_paragraf">
            Frontend geliştirme alanında ilerleyen bir junior yazılımcıyım. React ve JavaScript ağırlıklı çalışıyor, kullanıcı odaklı, sade ve responsive arayüzler geliştirmeye odaklanıyorum.
          </p>

          <p className="about_paragraf">
           HTML, CSS, JavaScript, React, Redux ve Bootstrap teknolojileriyle projeler geliştiriyor, Git ve GitHub kullanarak versiyon kontrolü sağlıyorum. Kodun okunabilir, sürdürülebilir ve düzenli olması benim için önemli.
          </p>

          <p className="about_paragraf">
          Öğrenmeye açık, disiplinli ve gelişim odaklı biriyim. Junior veya staj pozisyonlarında gerçek projelerde yer alarak hem katkı sağlamak hem de profesyonel olarak kendimi geliştirmek istiyorum.

          </p>

          <div className="about_chipler" aria-label="Bildiğim teknolojiler">
           
            <span className="about_chip chip_lila">React</span>
            <span className="about_chip chip_pembe">JavaScript</span>
            <span className="about_chip chip_sari">HTML</span>
            <span className="about_chip chip_yesil">CSS</span>
            <span className="about_chip chip_turuncu">Redux</span>
            <span className="about_chip chip_lila">MUI</span>
            <span className="about_chip chip_pembe">Git / GitHub</span>
            <span className="about_chip chip_sari">Docker</span>
            <span className="about_chip chip_yesil">Photoshop</span>
            <span className="about_chip chip_turuncu">SQL</span>
            <span className="about_chip chip_lila">AutoCAD</span>
            <span className="about_chip chip_pembe">Python</span>
          </div>
        </div>
      </div>

      <div className='about_cizgi' aria-hidden="true" />

    </section>
  );
}

export default About;
