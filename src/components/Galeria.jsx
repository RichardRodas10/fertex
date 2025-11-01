import { useState } from "react";
import '../styles/Content.css';

function Galeria() {
  const [selectedImg, setSelectedImg] = useState(null);

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

  return (
    <div id="galeria" className="galeria-container">
      <h2 className="galeria-title">Galería</h2>

      <div className="columns-2 md:columns-4 gap-4">
        {images.map((img, i) => (
          <img 
            key={i}
            className="mb-4 rounded-lg cursor-pointer transform transition duration-300 hover:scale-102"
            src={img.src}
            alt={img.alt}
            onClick={() => {
              setSelectedImg(img.src);
              document.body.style.overflow = "hidden";
            }}
          />
        ))}
      </div>
      
    {selectedImg && (
        <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm"
            onClick={() => {
            setSelectedImg(null);
            document.body.style.overflow = "auto";
            }}
        >
            <img 
            src={selectedImg} 
            className="rounded-lg shadow-lg animate-fadeIn max-h-[85%] max-w-[85%] md:max-w-[22%]"
            alt=""
            />
        </div>
    )}
    </div>
  );
}

export default Galeria;
