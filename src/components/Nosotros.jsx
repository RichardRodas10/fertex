import { useEffect, useRef, useState } from 'react';
import '../styles/Content.css';

function Nosotros() {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTextVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    if (textRef.current) {
      textObserver.observe(textRef.current);
    }

    return () => {
      if (imageRef.current) {
        imageObserver.unobserve(imageRef.current);
      }
      if (textRef.current) {
        textObserver.unobserve(textRef.current);
      }
    };
  }, []);
  
  return (
    <div className="w-full bg-white rounded-b-[60px] md:rounded-b-[90px]">
      <section id="nosotros" className="max-w-[1425px] mx-auto px-4 pt-5 pb-12 lg:pb-25 text-(--oscuro)">

        <h2 className="relative inline-block pt-[30px] mb-[45px] md:pt-[50px] md:mb-[70px] text-[2rem] md:text-[45px] font-semibold after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-10px] after:w-[90px] after:h-[5px] after:bg-(--naranja) after:rounded-sm">Sobre Nosotros</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-center">
          <div 
            ref={imageRef}
            className={`order-1 lg:order-2 transition-all duration-1000 ease-out ${
              isImageVisible 
                ? 'opacity-100 translate-y-0 lg:translate-x-0' 
                : 'opacity-0 translate-y-[50px] lg:translate-y-0 lg:translate-x-[50px]'
            }`}
          >
            <img 
              src="/images/fertex-taekwondo-maestros-instructores-03.webp" 
              alt="Maestros e instructores de taekwondo" 
              className='rounded-2xl shadow-xl w-full h-[300px] sm:h-[400px] lg:h-[470px] object-cover'
            />
          </div>
          
          <div 
            ref={textRef}
            className={`text-start order-2 lg:order-1 transition-all duration-1000 ease-out ${
              isTextVisible 
                ? 'opacity-100 translate-y-0 lg:translate-x-0' 
                : 'opacity-0 translate-y-[50px] lg:translate-y-0 lg:-translate-x-[50px]'
            }`}
          >
            <h3 className='w-[350px] bg-[linear-gradient(90deg,#fff5f0_0%,#ffffff_80%)] p-[12px_20px] rounded-xl border-l-4 border-l-(--naranja) text-2xl lg:text-3xl font-semibold mb-4 md:mb-5'>Nuestra Historia</h3>
            <p className='text-base text-(--texto) text-justify md:text-lg font-normal leading-7 mb-4'>
              Hace más de 20 años nació <span className="font-semibold text-(--naranja)">FERTEX</span>, una academia dedicada a la enseñanza y formación en artes marciales. Desde nuestros inicios, tuvimos el sueño de crear un espacio donde niños, jóvenes y adultos puedan desarrollar disciplina, carácter y valores a través del Taekwondo ITF, Muay Thai y Capoeira.
            </p>
            <p className='text-base text-(--texto) text-justify md:text-lg font-normal leading-7 mb-4'>
              Con el tiempo, nuestra escuela se convirtió en una gran familia, marcada por el esfuerzo, la constancia y la pasión por superarse día a día. Cada alumno que ha pasado por <span className="font-semibold">FERTEX</span> ha llevado consigo no solo técnicas y habilidades, sino también valores como el respeto, la perseverancia y la humildad.
            </p>
            <p className='text-base text-(--texto) text-justify md:text-lg font-normal leading-7 mb-2'>
              Hoy continuamos avanzando, formando personas íntegras y deportistas comprometidos, orgullosos de ver cómo nuestra comunidad crece y cómo nuestros alumnos conquistan metas dentro y fuera del tatami.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nosotros;