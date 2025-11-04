import { useEffect, useRef, useState } from "react";
import '../styles/Content.css';

function Galeria() {
  const [selectedImg, setSelectedImg] = useState(null);
  const gridRef = useRef(null);

  const images = [
    { src: "/images/fertex-taekwondo-competencia-01.webp", alt: "Competencia de Taekwondo ITF Fertex" },
    { src: "/images/fertex-taekwondo-entrenamiento-06.webp", alt: "Entrenamiento de Taekwondo en Fertex" },
    { src: "/images/fertex-taekwondo-entrenamiento-07.webp", alt: "Práctica de Taekwondo infantil en Fertex" },
    { src: "/images/fertex-capoeira-entrenamiento-01.webp", alt: "Clase de Capoeira en Fertex" },
    { src: "/images/fertex-taekwondo-entrenamiento-04.webp", alt: "Ejercicios de pateo en Taekwondo" },
    { src: "/images/fertex-muaythai-entrenamiento-02.webp", alt: "Entrenamiento de Muay Thai en Fertex" },
    { src: "/images/fertex-muaythai-entrenamiento-05.webp", alt: "Sesión de Muay Thai para jóvenes" },
    { src: "/images/fertex-capoeira-competencia-01.webp", alt: "Presentación de Capoeira en evento" },
    { src: "/images/fertex-taekwondo-competencia-03.webp", alt: "Competencia de Taekwondo Fertex" },
    { src: "/images/fertex-taekwondo-competencia-06.webp", alt: "Campeonato de Taekwondo Fertex" },
    { src: "/images/fertex-taekwondo-competencia-04.webp", alt: "Exhibición de Taekwondo ITF" },
    { src: "/images/fertex-muaythai-entrenamiento-07.webp", alt: "Práctica de defensa en Muay Thai en Fertex" }
  ];

  useEffect(() => {
    const nodes = gridRef.current?.querySelectorAll("[data-reveal]");
    if (!nodes || nodes.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-fadeInUp");
            e.target.classList.remove("opacity-0");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section id="galeria" className="galeria-container">
      <h2 className="galeria-title">Galería</h2>

      <div ref={gridRef} className="columns-2 md:columns-4 gap-4">
        {images.map((img, i) => (
          <img 
            key={i}
            data-reveal
            className="mb-4 rounded-xl cursor-pointer transform transition duration-300 hover:scale-98 opacity-0"
            src={img.src}
            alt={img.alt}
            onClick={() => {
              setSelectedImg(img.src);
              document.body.style.overflow = "hidden";
              document.body.classList.add("modal-open");
            }}
          />
        ))}
      </div>
      
    {selectedImg && (
        <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]"
            onClick={() => {
            setSelectedImg(null);
            document.body.style.overflow = "auto";
            document.body.classList.remove("modal-open");
            }}
        >
            <img 
            src={selectedImg} 
            className="rounded-lg shadow-lg animate-fadeIn max-h-[85%] max-w-[90%] md:max-w-[40%]"
            alt=""
            />
        </div>
    )}
    </section>
  );
}

export default Galeria;
