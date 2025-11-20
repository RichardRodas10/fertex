import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const headerHeight = document.querySelector('.header')?.offsetHeight || 90;
    const normalize = str => str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    const navLinks = Array.from(document.querySelectorAll('.nav-links a'))
      .filter(a => a.getAttribute('href')?.startsWith('#'));

    const sections = navLinks
      .map(a => document.getElementById(normalize(a.getAttribute('href').slice(1))))
      .filter(Boolean);

    if (sections.length === 0) return;

    let observerActive = true;
    const observer = new IntersectionObserver(
      entries => {
        if (!observerActive) return;
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          const mostVisible = visible.reduce((a, b) =>
            a.intersectionRatio > b.intersectionRatio ? a : b
          );
          const id = normalize(mostVisible.target.id);
          navLinks.forEach(a => a.classList.remove('active'));
          const link = navLinks.find(
            a => normalize(a.getAttribute('href').slice(1)) === id
          );
          if (link) link.classList.add('active');
        }
      },
      { rootMargin: `-${headerHeight}px 0px 0% 0px`, threshold: [0.25, 0.5, 0.75] }
    );

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    const headerHeight = document.querySelector('.header')?.offsetHeight || 90;

    if (target) {
      window.scrollTo({
        top: target.offsetTop - headerHeight,
        behavior: 'smooth',
      });
    }
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
      <div className="site-logo">
        <img 
          src="/images/logo-fertex.webp" 
          alt="Logo Fertex Artes Marciales" 
          className="logo-img"
        />
      </div>

        {/* Botón hamburguesa */}
        <button
          className="menu-btn"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Overlay */}
        <div
          className={`overlay ${menuOpen ? 'show' : ''}`}
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* Menú lateral */}
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <div className="close-container">
            <button
              className="close-btn"
              aria-label="Cerrar menú"
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <ul className="nav-links">
            <li><a className='a' href="#inicio" onClick={e => handleNavClick(e, 'inicio')}>Inicio</a></li>
            <li><a className='a' href="#nosotros" onClick={e => handleNavClick(e, 'nosotros')}>Nosotros</a></li>
            <li><a className='a' href="#disciplina" onClick={e => handleNavClick(e, 'disciplina')}>Disciplinas</a></li>
            <li><a className='a' href="#galeria" onClick={e => handleNavClick(e, 'galeria')}>Galería</a></li>
            <li><a className='a' href="#contacto" onClick={e => handleNavClick(e, 'contacto')}>Locales</a></li>
            <a href="https://api.whatsapp.com/send/?phone=51944351592&text=Hola%2C+me+gustar%C3%ADa+recibir+m%C3%A1s+informaci%C3%B3n.&type=phone_number&app_absent=0" target="_blank" class="header-button type1">
              <span class="header-btn-txt">Contáctanos</span>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;