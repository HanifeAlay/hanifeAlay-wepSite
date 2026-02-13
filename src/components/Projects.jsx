import React, { useEffect, useRef } from "react";
import "../style/Projects.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import memoryOyun from "../assets/memoryOyun.png";
import linkedinClon from "../assets/Linkedin-Clon.png";
import ecoflow from "../assets/ecoFlow.png";
import weatherApp from "../assets/havaDurumu.png";
import billGates from "../assets/billgates.png";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);

  // Projeler buradan güncellenecek
  const projects = [
    {
      title: "Memory Game",
      img: memoryOyun,
      link: "https://github.com/HanifeAlay/memory-game.git",
    },
    {
      title: "LinkedIn Clone",
      img: linkedinClon,
      link: "https://github.com/HanifeAlay/Kodluyoruz--dev-Linkedin-clon.git",
    },
    {
      title: "EcoFlow",
      img: ecoflow,
      link: "https://github.com/HanifeAlay/EcoFloww.git",
    },
    {
      title: "Weather App",
      img: weatherApp,
      link: "https://github.com/HanifeAlay/weather-app.git",
    },
    {
      title: "Bill Gates Page",
      img: billGates,
      link: "https://github.com/HanifeAlay/Patika.dev-Bill-Gates-money.git",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const left = section.querySelector(".projects_left");
    const bubbles = section.querySelectorAll(".project_bubble");

    // Başlangıç değerleri (scroll gelmeden görünmesin)
    gsap.set(left, { opacity: 0, y: 20 });
    gsap.set(bubbles, { opacity: 0, scale: 0.92, y: 16 });

    // Scroll ile giriş animasyonu
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",  // bölüm ekrana girince başlasın
        end: "top 40%",
        scrub: false,
        once: true,        // bir kere oynasın, sonra sabit kalsın
      },
      defaults: { ease: "power2.out" },
    });

    tl.to(left, { opacity: 1, y: 0, duration: 0.6 }, 0)
      .to(
        bubbles,
        { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.08 },
        0.15
      );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="projects_section" id="projeler">
      <div className="projects_container">
        {/* SOL: açıklama kutusu */}
        <div className="projects_left">
          <h2 className="projects_title">PROJELER</h2>

          <p className="projects_desc">
            Yazılım eğitim sürecimde geliştirdiğim örnek projelerden seçtiğim 5 tanesini burada
            sergiliyorum. Bu projeler; <span className="accent">React</span>,{" "}
            <span className="accent">JavaScript</span>, <span className="accent">HTML</span> ve{" "}
            <span className="accent">CSS</span> pratiği kazanmak için hazırlanmıştır.
          </p>

          <p className="projects_desc">
            Her yuvarlak görsel bir projeyi temsil eder. Üzerine gelince öne çıkar, tıklayınca
            direkt GitHub reposuna gider. Daha fazla proje ve güncel çalışmalar için GitHub profilime
            göz atabilirsiniz.
          </p>

          <div className="projects_actions">
            <a
              className="projects_btn"
              href="https://github.com/HanifeAlay"
              target="_blank"
              rel="noreferrer"
            >
              GitHub’da Daha Fazlası →
            </a>
          </div>
        </div>

        {/* SAĞ: bubble projeler */}
        <div className="projects_right" aria-label="Proje görselleri">
          <div className="bubbles_wrap">
            {projects.map((p) => (
              <a
                key={p.title}
                className="project_bubble"
                href={p.link}
                target="_blank"
                rel="noreferrer"
                title={p.title}
              >
                <img className="bubble_img" src={p.img} alt={p.title} />
                <span className="bubble_label">{p.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/*  çizgi */}
      <div className="projects_cizgi" aria-hidden="true" />
    </section>
  );
}