import { CalendarDays, Menu, User, Clock, Award, Heart, Star, MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import './App.css';

function App() {
  // Estado para controlar qué imagen se está viendo en la galería
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = 3; // Simularemos 3 fotografías del estudio

  return (
    <div className="app-container">

      {/* 1. BARRA DE NAVEGACIÓN */}
      <nav className="navbar">
        <div className="logo-container">
          <div className="logo-icon">
            <span>P</span>
          </div>
          <h1 className="logo-text">Studio Pilates</h1>
        </div>

        <div className="desktop-menu">
          <a href="#">Clases</a>
          <a href="#">Horarios</a>
          <a href="#">Nosotros</a>
        </div>

        <div className="user-actions">
          <button className="btn-login">
            <User size={18} />
            Iniciar Sesión
          </button>
        </div>

        <button className="mobile-menu-btn">
          <Menu size={28} />
        </button>
      </nav>

      {/* 2. SECCIÓN PRINCIPAL (HERO) */}
      <main className="hero-section">
        <span className="hero-subtitle">
          Transforma tu cuerpo y mente
        </span>
        <h2 className="hero-title">
          Encuentra tu centro con <span>movimiento consciente</span>
        </h2>
        <p className="hero-description">
          Únete a nuestras clases personalizadas. Fortalece tu core, mejora tu flexibilidad y eleva tu energía diaria en un espacio diseñado para tu bienestar.
        </p>

        <button className="btn-primary">
          <CalendarDays size={24} />
          Ver Horarios y Reservar
        </button>
      </main>

      {/* 3. SECCIÓN DE HORARIOS Y CLASES */}
      <section className="schedule-section">
        <div className="schedule-header">
          <h3 className="schedule-title">Clases de la Semana</h3>
          <p className="schedule-subtitle">Encuentra el horario que mejor se adapte a tu rutina</p>
        </div>

        <div className="classes-grid">
          {/* Tarjeta 1 */}
          <div className="class-card">
            <span className="class-day">Lunes</span>
            <h4 className="class-name">Pilates Reformer</h4>
            <div className="class-info">
              <Clock size={16} /> <span>08:00 AM - 09:00 AM</span>
            </div>
            <div className="class-info">
              <User size={16} /> <span>Lugares disponibles: 4</span>
            </div>
            <button className="btn-reserve">Reservar Lugar</button>
          </div>

          {/* Tarjeta 2 */}
          <div className="class-card">
            <span className="class-day">Miércoles</span>
            <h4 className="class-name">Pilates Mat (Piso)</h4>
            <div className="class-info">
              <Clock size={16} /> <span>06:00 PM - 07:00 PM</span>
            </div>
            <div className="class-info">
              <User size={16} /> <span>Lugares disponibles: 2</span>
            </div>
            <button className="btn-reserve">Reservar Lugar</button>
          </div>

          {/* Tarjeta 3 */}
          <div className="class-card">
            <span className="class-day">Viernes</span>
            <h4 className="class-name">Reformer Avanzado</h4>
            <div className="class-info">
              <Clock size={16} /> <span>09:00 AM - 10:00 AM</span>
            </div>
            <div className="class-info">
              <User size={16} /> <span>Lugares disponibles: 1</span>
            </div>
            <button className="btn-reserve">Reservar Lugar</button>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN DE INSTRUCTORA */}
      <section className="instructor-section">
        <div className="instructor-container">

          {/* Espacio para la fotografía */}
          <div className="instructor-image-placeholder">
            <span className="text-pilates-cream font-medium tracking-wider">
              [Fotografía de la Instructora]
            </span>
          </div>

          {/* Información y Perfil */}
          <div className="instructor-info">
            <span className="instructor-title">Conoce a tu Instructora</span>
            <h3 className="instructor-name">María Pérez</h3>
            <p className="instructor-bio">
              Con más de 5 años de experiencia especializada en Pilates Reformer y Mat. Mi objetivo es guiarte en cada movimiento para que logres la mejor versión de ti mismo, conectando tu respiración con la fuerza y el control de tu cuerpo.
            </p>

            <div className="instructor-badges">
              <span className="badge">
                <Award size={18} className="text-pilates-terra" />
                Certificación Internacional
              </span>
              <span className="badge">
                <Heart size={18} className="text-pilates-terra" />
                Atención Personalizada
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SECCIÓN DE INSTALACIONES (GALERÍA VISUAL) */}
      <section className="gallery-section">
        <div className="gallery-header">
          <h3 className="gallery-title">Nuestras Instalaciones</h3>
          <p className="gallery-subtitle">Un espacio diseñado para tu tranquilidad, enfoque y movimiento.</p>
        </div>

        <div className="gallery-carousel-container">
          {/* Contenedor de la Imagen */}
          <div className="gallery-image-wrapper">
            <span className="gallery-placeholder">
              [Fotografía del Estudio {currentImage + 1}]
            </span>
          </div>

          {/* Controles: Solo Puntos de Navegación */}
          <div className="gallery-dots">
            {Array.from({ length: totalImages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`dot ${currentImage === index ? 'active' : ''}`}
                aria-label={`Ver imagen ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECCIÓN DE PAQUETES Y PRECIOS */}
      <section className="pricing-section">
        <div className="pricing-header">
          <h3 className="pricing-title">Planes y Membresías</h3>
          <p className="pricing-subtitle">Invierte en tu bienestar. Elige el paquete que mejor se adapte a tu ritmo.</p>
        </div>

        <div className="pricing-grid">

          {/* Tarjeta 1: Clase Suelta */}
          <div className="pricing-card">
            <h4 className="pricing-tier">Clase Suelta</h4>
            <div className="pricing-cost">
              <span className="currency">$</span>
              <span className="amount">350</span>
              <span className="period">/clase</span>
            </div>
            <ul className="pricing-features">
              <li>Válido por 1 mes</li>
              <li>Atención personalizada</li>
              <li>Cancelación 12h antes</li>
            </ul>
            <button className="btn-pricing">Comprar</button>
          </div>

          {/* Tarjeta 2: Paquete Popular (Destacada) */}
          <div className="pricing-card popular">
            <div className="popular-badge">Más Popular</div>
            <h4 className="pricing-tier text-pilates-terra">Paquete 8 Clases</h4>
            <div className="pricing-cost">
              <span className="currency">$</span>
              <span className="amount">2,400</span>
              <span className="period">/mes</span>
            </div>
            <ul className="pricing-features">
              <li>Ideal para 2 clases por semana</li>
              <li>Válido por 1 mes</li>
              <li>Atención personalizada</li>
              <li>Prioridad de reserva</li>
            </ul>
            <button className="btn-pricing-popular">Adquirir Paquete</button>
          </div>

          {/* Tarjeta 3: Mensualidad */}
          <div className="pricing-card">
            <h4 className="pricing-tier">Mensualidad</h4>
            <div className="pricing-cost">
              <span className="currency">$</span>
              <span className="amount">3,500</span>
              <span className="period">/mes</span>
            </div>
            <ul className="pricing-features">
              <li>Asiste a clases todos los días</li>
              <li>Válido por 1 mes</li>
              <li>Descuento en talleres</li>
              <li>Evaluación mensual</li>
            </ul>
            <button className="btn-pricing">Comprar</button>
          </div>

        </div>
      </section>

      {/* 7. SECCIÓN DE TESTIMONIOS */}
      <section className="testimonials-section">
        <div className="testimonials-header">
          <h3 className="testimonials-title">Lo que dicen nuestros alumnos</h3>
        </div>
        <div className="testimonials-grid">

          {/* Testimonio 1 */}
          <div className="testimonial-card">
            <div className="stars">
              <Star fill="#C86F5E" stroke="none" size={20} />
              <Star fill="#C86F5E" stroke="none" size={20} />
              <Star fill="#C86F5E" stroke="none" size={20} />
              <Star fill="#C86F5E" stroke="none" size={20} />
              <Star fill="#C86F5E" stroke="none" size={20} />
            </div>
            <p className="testimonial-text">
              "Las clases han transformado mi postura y mi energía. El ambiente del estudio es increíble y la atención es súper personalizada."
            </p>
            <span className="testimonial-author">- Laura M.</span>
          </div>

          {/* Testimonio 2 */}
          <div className="testimonial-card">
            <div className="stars">
              <Star fill="#C86F5E" stroke="none" size={20} />
              <Star fill="#C86F5E" stroke="none" size={20} />
              <Star fill="#C86F5E" stroke="none" size={20} />
              <Star fill="#C86F5E" stroke="none" size={20} />
              <Star fill="#C86F5E" stroke="none" size={20} />
            </div>
            <p className="testimonial-text">
              "Nunca pensé que el Pilates fuera tan retador y a la vez tan relajante. Empecé desde cero y me he sentido guiada en todo momento."
            </p>
            <span className="testimonial-author">- Sofía R.</span>
          </div>

        </div>
      </section>

      {/* 8. SECCIÓN DE CONTACTO */}
      <section className="contact-section">
        <div className="contact-container">

          {/* Información y Mapa Falso */}
          <div className="contact-info">
            <h3 className="contact-title">Visítanos</h3>
            <p className="contact-detail"><MapPin size={20} className="text-pilates-terra" /> Av. Principal 123, Colonia Centro</p>
            <p className="contact-detail"><Phone size={20} className="text-pilates-terra" /> +52 55 1234 5678</p>
            <p className="contact-detail"><Mail size={20} className="text-pilates-terra" /> hola@studiopilates.com</p>

            <div className="map-placeholder">
              <span className="text-gray-500 font-medium tracking-wider">[Mapa de Google Maps]</span>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="contact-form-container">
            <h3 className="contact-title">Escríbenos</h3>
            <form className="contact-form">
              <input type="text" placeholder="Tu Nombre Completo" className="form-input" />
              <input type="email" placeholder="Tu Correo Electrónico" className="form-input" />
              <textarea placeholder="¿En qué te podemos ayudar?" className="form-textarea"></textarea>
              <button type="button" className="btn-submit">Enviar Mensaje</button>
            </form>
          </div>

        </div>
      </section>

      {/* 9. PIE DE PÁGINA (FOOTER) */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">© 2026 Studio Pilates. Todos los derechos reservados.</p>
          <div className="social-links">

          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;