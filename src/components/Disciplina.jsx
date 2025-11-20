import { useEffect, useRef, useState } from 'react';

function Disciplina() {
  const [visibleCards, setVisibleCards] = useState([false, false, false]);
  const cardRefs = useRef([]);
  const [visibleParagraph1, setVisibleParagraph1] = useState(false);
  const [visibleParagraph2, setVisibleParagraph2] = useState(false);
  const [visibleParagraph3, setVisibleParagraph3] = useState(false);
  const [visibleInstructors, setVisibleInstructors] = useState([]);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const paragraph3Ref = useRef(null);
  const instructorRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((cardRef, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        },
        {
          threshold: 0.2,
          rootMargin: '0px'
        }
      );

      if (cardRef) {
        observer.observe(cardRef);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (cardRefs.current[index]) {
          observer.unobserve(cardRefs.current[index]);
        }
      });
    };
  }, []);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleParagraph1(true);
        }
      },
      { threshold: 0.2 }
    );

    if (paragraph1Ref.current) {
      observer1.observe(paragraph1Ref.current);
    }

    return () => {
      if (paragraph1Ref.current) {
        observer1.unobserve(paragraph1Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleParagraph2(true);
        }
      },
      { threshold: 0.2 }
    );

    if (paragraph2Ref.current) {
      observer2.observe(paragraph2Ref.current);
    }

    return () => {
      if (paragraph2Ref.current) {
        observer2.unobserve(paragraph2Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleParagraph3(true);
        }
      },
      { threshold: 0.2 }
    );

    if (paragraph3Ref.current) {
      observer3.observe(paragraph3Ref.current);
    }

    return () => {
      if (paragraph3Ref.current) {
        observer3.unobserve(paragraph3Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observers = instructorRefs.current.map((instructorRef, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleInstructors(prev => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        },
        { threshold: 0.2 }
      );

      if (instructorRef) {
        observer.observe(instructorRef);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (instructorRefs.current[index]) {
          observer.unobserve(instructorRefs.current[index]);
        }
      });
    };
  }, []);

    const disciplinas = [
    {
      nombre: "Taekwondo",
      imagen: "images/fertex-taekwondo-competencia-01.webp",
      descripcion: "Arte marcial coreano que desarrolla disciplina, técnica y autocontrol a través de patadas dinámicas y defensa personal."
    },
    {
      nombre: "Muay Thai",
      imagen: "images/fertex-muaythai-entrenamiento-05.webp",
      descripcion: "Boxeo tailandés tradicional que combina puños, codos, rodillas y patadas para un entrenamiento completo."
    },
    {
      nombre: "Capoeira",
      imagen: "images/fertex-capoeira-entrenamiento-01.webp",
      descripcion: "Arte marcial afro-brasileño que fusiona movimientos acrobáticos, música y expresión cultural en cada ginga."
    }
  ];
  
  const getAnimationClasses = (index, isVisible) => {
    const animations = [
      // Primera carta
      isVisible 
        ? 'opacity-100 translate-y-0 lg:translate-x-0' 
        : 'opacity-0 translate-y-[50px] lg:translate-y-0 lg:-translate-x-[50px]',
      // Segunda carta
      isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-[50px]',
      // Tercera carta
      isVisible 
        ? 'opacity-100 translate-y-0 lg:translate-x-0' 
        : 'opacity-0 translate-y-[50px] lg:translate-y-0 lg:translate-x-[50px]'
    ];
    
    return animations[index];
  };


  const [hoveredCard, setHoveredCard] = useState(null);
  const instructores = [
    {
      id: 1,
      nombre: "Paco Orizano",
      cargo: "INSTRUCTOR INTERNACIONAL",
      imagen: "/images/instructor-muaythai.webp",
    },
    {
      id: 2,
      nombre: "Tomas Luna",
      cargo: "CINTA NEGRA",
      imagen: "/images/instructor-taekwondo-01.webp",
    },
    {
      id: 3,
      nombre: "Edson Suarez",
      cargo: "INSTRUCTOR",
      imagen: "/images/instructor-capoeira.webp",
    }
  ];

  return (
    <div className="w-full bg-[(--oscuro)]">
      <section id="disciplina" className="max-w-[1250px] mx-auto px-4 pb-20 md:pb-25 pt-8 text-black">
        <h2 className="relative inline-block pt-[30px] mb-[35px] md:pt-[50px] md:mb-[45px] text-[2rem] md:text-[45px] font-semibold after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2.5 after:w-[90px] after:h-[5px] after:bg-(--naranja) after:rounded-sm">
          Disciplinas
        </h2>
        <p 
          ref={paragraph1Ref}
          className={`text-base md:text-lg text-(--oscuro) mb-10 md:mb-15 leading-relaxed max-w-4xl mx-auto transition-all duration-1000 ease-out ${
            visibleParagraph1 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-[30px]'
          }`}
        >
          En FERTEX ofrecemos tres disciplinas de artes marciales, 
          cada una diseñada para desarrollar fuerza, disciplina y 
          confianza en personas de todas las edades.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {disciplinas.map((disciplina, index) => (
            <div 
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`relative rounded-2xl shadow-2xl overflow-hidden group cursor-pointer h-[420px] md:h-[470px] md:w-90 mx-auto w-90 max-w-[350px] md:max-w-none transition-all duration-1000 ease-out ${getAnimationClasses(index, visibleCards[index])}`}
            >
              <img 
                src={disciplina.imagen} 
                loading="lazy"
                alt={`Práctica de ${disciplina.nombre}`} 
                className='w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75'
              />
              
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent lg:from-black/70 lg:via-black/30"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="text-white text-3xl md:text-4xl font-semibold mb-3 transition-all duration-300 group-hover:mb-4">
                  {disciplina.nombre}
                </h3>
                
                <div className="rounded-xl w-16 h-1 bg-(--naranja) mb-4 transition-all duration-300 group-hover:w-24"></div>
                
                <p className="text-white/90 text-base font-normal md:font-light md:text-base leading-6 md:max-h-0 md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100 transition-all duration-500 overflow-hidden max-h-40 opacity-100">
                  {disciplina.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* Instructores */}
      <div className="w-full bg-white rounded-t-[60px] rounded-b-[60px] md:rounded-t-[90px] md:rounded-b-[90px]">
        <section id="instructores" className="max-w-[1250px] mx-auto px-4 pb-16 md:pb-25 pt-8 text-(--oscuro)">
          
          <div className="text-center mb-10 md:mb-15">
            <p className="text-(--naranja) font-semibold md:text-2xl text-lg uppercase tracking-widest pt-12 md:pt-15">
              Nuestros Instructores
            </p>
            
            <h2 className="relative inline-block mb-[45px] pt-0 md:mb-[55px] text-[2rem] md:text-[45px] font-semibold after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 md:after:-bottom-2.5 after:-bottom-4 after:w-[90px] after:h-[5px] after:bg-(--naranja) after:rounded-sm">
              Conoce a Nuestro Equipo
            </h2>

            <p 
              ref={paragraph2Ref}
              className={`text-base md:text-lg text-(--texto) leading-relaxed max-w-4xl mx-auto transition-all duration-1000 ease-out ${
                visibleParagraph2 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-[30px]'
              }`}
            >
              Profesionales certificados con más de 20 años de experiencia formando 
              campeones y transmitiendo valores fundamentales a través de las artes marciales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {instructores.map((instructor, index) => (
              <div
                key={instructor.id}
                ref={el => instructorRefs.current[index] = el}
                className={`group cursor-pointer h-[420px] md:h-[470px] md:w-90 mx-auto w-90 max-w-[350px] md:max-w-none relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-1000 ease-out ${
                  visibleInstructors.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-[50px]'
                }`}
                onMouseEnter={() => setHoveredCard(instructor.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Imagen */}
                <div className="relative aspect-3/4 overflow-hidden">
                  <img 
                    src={instructor.imagen} 
                    alt={instructor.nombre}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-2xl font-semibold mb-1 tracking-tight">
                    {instructor.nombre}
                  </h3>
                  <p className="text-(--naranja) font-semibold text-base uppercase tracking-wide">
                    {instructor.cargo}
                  </p>
                  
                  <div 
                    className={`rounded-xl w-0 h-1 bg-(--naranja) mt-3 transition-all duration-500 ${
                      hoveredCard === instructor.id ? 'w-20' : 'w-0'
                    }`}
                  ></div>
                </div>

                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            ))}
          </div>

          <div 
              ref={paragraph3Ref}
              className={`text-center mt-12 md:mt-16 transition-all duration-1000 ease-out ${
                visibleParagraph3 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-[30px]'
              }`}
          >
            <p className="text-(--texto) text-base md:text-lg mb-6">
              ¿Quieres formar parte de nuestro equipo de campeones?
            </p>
            <a 
              href="https://api.whatsapp.com/send/?phone=51944351592&text=Hola%2C+me+gustar%C3%ADa+recibir+m%C3%A1s+informaci%C3%B3n.&type=phone_number&app_absent=0"
              target="_blank" 
              className="inline-block bg-(--naranja) hover:bg-(--naranja) text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-101 hover:shadow-lg"
            >
              Agenda tu Clase de Prueba
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Disciplina;