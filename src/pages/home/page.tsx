
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('instalaciones');

  const services = [
    {
      id: 'instalaciones',
      title: 'Instalaciones Eléctricas',
      description: 'Instalaciones completas para viviendas y locales comerciales',
      icon: 'ri-home-line'
    },
    {
      id: 'reparaciones',
      title: 'Reparaciones y urgencias 24 horas',
      description: 'Servicio de emergencia disponible las 24 horas',
      icon: 'ri-tools-line'
    },
    {
      id: 'mantenimiento',
      title: 'Mantenimiento y reparacion',
      description: 'Mantenimiento preventivo y reparacion de instalaciones eléctricas',
      icon: 'ri-settings-line'
    },
    {
      id: 'mantenimiento',
      title: 'Mantenimiento',
      description: 'Mantenimiento y reparacion de aire acondicionado',
      icon: 'ri-settings-line'
    },
    {
      id: 'certificaciones',
      title: 'Certificaciones',
      description: 'Certificados e inspecciones eléctricas oficiales',
      icon: 'ri-award-line'
    },
    {
      id: 'domotica',
      title: 'Domótica',
      description: 'Automatización del hogar y sistemas inteligentes',
      icon: 'ri-smartphone-line'
    },
    {
      id: 'boletines electricos',
      title: 'boletines electricos',
      description: 'Emision de boletines electricos, certificados en Valladolid',
      icon: 'ri-smartphone-line'
    },
    {
      id: 'instalacion de cargadores para coches electricos',
      title: 'instalacion de cargadores para coches electricos',
      description: 'Instalacion de cargadores electricos en Valladolid, rapida, segura y certificada',
      icon: 'ri-tools-line'
    },
    {
      id: 'led',
      title: 'Iluminación LED',
      description: 'Instalación de sistemas de iluminación eficientes',
      icon: 'ri-lightbulb-line'
    }
  ];

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://readdy.ai/api/form/d3rsh6tunt03ug6cushg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString()
      });
      
      if (response.ok) {
        alert('¡Mensaje enviado correctamente! Te contactaremos pronto.');
        (e.target as HTMLFormElement).reset();
      } else {
        alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-900" style={{ fontFamily: '"Pacifico", serif' }}>
                ElectroValladolid
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#inicio" className="text-gray-900 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Inicio</a>
                <a href="#servicios" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Servicios</a>
                <a href="/galeria" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Galería</a>
                <a href="/blog" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Blog</a>
                <a href="/testimonios" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Testimonios</a>
                <a href="/preguntas-frecuentes" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">FAQ</a>
                <a href="#nosotros" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Nosotros</a>
                <a href="#contacto" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Contacto</a>
                <a href="tel:+34641847249" className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer">
                  <i className="ri-phone-line mr-2"></i>Llamar Ahora
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900 focus:outline-none cursor-pointer"
              >
                <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <a href="#inicio" className="text-gray-900 block px-3 py-2 text-base font-medium cursor-pointer">Inicio</a>
              <a href="#servicios" className="text-gray-700 block px-3 py-2 text-base font-medium cursor-pointer">Servicios</a>
              <a href="/galeria" className="text-gray-700 block px-3 py-2 text-base font-medium cursor-pointer">Galería</a>
              <a href="/blog" className="text-gray-700 block px-3 py-2 text-base font-medium cursor-pointer">Blog</a>
              <a href="/testimonios" className="text-gray-700 block px-3 py-2 text-base font-medium cursor-pointer">Testimonios</a>
              <a href="/preguntas-frecuentes" className="text-gray-700 block px-3 py-2 text-base font-medium cursor-pointer">FAQ</a>
              <a href="#nosotros" className="text-gray-700 block px-3 py-2 text-base font-medium cursor-pointer">Nosotros</a>
              <a href="#contacto" className="text-gray-700 block px-3 py-2 text-base font-medium cursor-pointer">Contacto</a>
              <a href="tel:+34641847249" className="bg-teal-600 text-white block px-3 py-2 text-base font-medium rounded-lg mx-3 mt-2 text-center cursor-pointer">
                <i className="ri-phone-line mr-2"></i>Llamar Ahora
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20electrician%20working%20with%20electrical%20panel%20in%20modern%20home%2C%20clean%20background%20with%20electrical%20tools%20and%20safety%20equipment%2C%20professional%20lighting%2C%20high%20quality%20photography%2C%20modern%20electrical%20installation&width=1920&height=1080&seq=hero-electrician&orientation=landscape')`
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                ELECTRICISTAS PROFESIONALES EN VALLADOLID.
                <span className="text-teal-400 block">SERVICIOS DE URGENCIAS 24 HORAS</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                En ElectroValladolid ofrecemos servicios profesionales de electricista en Valladolid, especializados en instalaciones eléctricas, boletines eléctricos (certificado de instalación), altas de luz, mantenimiento y reparaciones, incluyendo urgencias eléctricas 24 horas. Trabajamos con rapidez, garantía y precios competitivos en viviendas, locales y empresas, cumpliendo con la normativa vigente y ofreciendo atención inmediata en toda Valladolid y alrededores.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contacto" className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors text-center whitespace-nowrap cursor-pointer">
                  <i className="ri-mail-line mr-2"></i>Solicitar Presupuesto
                </a>
                <a href="tel:+34641847249" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center whitespace-nowrap cursor-pointer">
                  <i className="ri-phone-line mr-2"></i>641 847 249
                </a>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-gray-300">
                <div className="flex items-center">
                  <i className="ri-time-line mr-2 text-teal-400"></i>
                  Emergencias 24h
                </div>
                <div className="flex items-center">
                  <i className="ri-shield-check-line mr-2 text-teal-400"></i>
                  Totalmente Asegurado
                </div>
              </div>
            </div>
            <div className="lg:text-right">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20electrician%20in%20safety%20gear%20working%20on%20electrical%20installation%2C%20modern%20tools%20and%20equipment%2C%20clean%20professional%20appearance%2C%20electrical%20panel%20background%2C%20high%20quality%20professional%20photography&width=600&height=700&seq=electrician-profile&orientation=portrait"
                alt="Electricista profesional"
                className="rounded-2xl shadow-2xl object-cover w-full h-96 lg:h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios eléctricos para satisfacer todas tus necesidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 cursor-pointer group"
                onClick={() => setSelectedService(service.id)}
              >
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                  <i className={`${service.icon} text-2xl text-teal-600 group-hover:text-white transition-colors`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-6">
                  <span className="text-teal-600 font-medium group-hover:text-teal-700 transition-colors">
                    Más información <i className="ri-arrow-right-line ml-1"></i>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">¿Por Qué Elegirnos?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Somos la empresa de confianza en Valladolid para todos tus proyectos eléctricos
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-award-line text-xl text-teal-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">+15 Años de Experiencia</h3>
                    <p className="text-gray-600">Amplia experiencia en todo tipo de instalaciones eléctricas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-time-line text-xl text-teal-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Servicio 24 Horas</h3>
                    <p className="text-gray-600">Disponibles para emergencias las 24 horas del día</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-shield-check-line text-xl text-teal-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Totalmente Asegurados</h3>
                    <p className="text-gray-600">Todos nuestros trabajos están completamente asegurados</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-price-tag-line text-xl text-teal-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Precios Competitivos</h3>
                    <p className="text-gray-600">Presupuestos sin compromiso y precios justos</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20electrical%20installation%20in%20residential%20home%2C%20clean%20wiring%20and%20electrical%20panel%2C%20professional%20electrical%20work%2C%20bright%20lighting%2C%20safety%20equipment%20visible%2C%20high%20quality%20photography&width=600&height=500&seq=electrical-work&orientation=landscape"
                alt="Trabajo eléctrico profesional"
                className="rounded-2xl shadow-xl object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Nosotros</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empresa familiar con más de 15 años de experiencia en el sector eléctrico en Valladolid
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-team-line text-3xl text-teal-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Clientes Satisfechos</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-tools-line text-3xl text-teal-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600">Proyectos Completados</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-calendar-line text-3xl text-teal-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Años de Experiencia</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-600">
              Resolvemos las dudas más comunes sobre nuestros servicios eléctricos
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Ofrecen servicio de emergencia 24 horas?</h3>
              <p className="text-gray-600">
                Sí, estamos disponibles las 24 horas del día, los 7 días de la semana para emergencias eléctricas. 
                Llama al 641 847 249 y te atenderemos inmediatamente.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Cuánto tiempo tardan en dar un presupuesto?</h3>
              <p className="text-gray-600">
                Normalmente podemos dar un presupuesto en el mismo día. Para trabajos complejos, 
                máximo 48 horas después de la visita técnica gratuita.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Están asegurados y tienen licencia?</h3>
              <p className="text-gray-600">
                Sí, somos electricistas autorizados con más de 15 años de experiencia. 
                Todos nuestros trabajos están completamente asegurados y ofrecemos garantía.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Qué tipos de certificaciones eléctricas realizan?</h3>
              <p className="text-gray-600">
                Realizamos certificados de instalación eléctrica, boletines eléctricos, 
                inspecciones ITC-BT y todos los certificados oficiales requeridos por la normativa.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Trabajan en toda la provincia de Valladolid?</h3>
              <p className="text-gray-600">
                Sí, ofrecemos nuestros servicios en Valladolid capital y toda la provincia. 
                Para emergencias, nos desplazamos sin coste adicional en un radio de 30 km.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Qué garantía ofrecen en sus trabajos?</h3>
              <p className="text-gray-600">
                Ofrecemos 2 años de garantía en instalaciones nuevas y 1 año en reparaciones. 
                Todos los materiales utilizados son de primeras marcas con garantía del fabricante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contacta con Nosotros</h2>
            <p className="text-xl text-gray-600">
              Solicita tu presupuesto gratuito sin compromiso
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-map-pin-line text-xl text-teal-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dirección</h4>
                    <p className="text-gray-600">Calle Isabel la Católica 6, 47465 Valladolid, España</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-phone-line text-xl text-teal-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Teléfono</h4>
                    <p className="text-gray-600">641 847 249</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-mail-line text-xl text-teal-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">Servirepararar@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-time-line text-xl text-teal-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Horario</h4>
                    <p className="text-gray-600">Atención al cliente 24 horas</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-whatsapp-line text-xl text-teal-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">641 847 249 (8:00 - 20:00)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2936.8!2d-4.7245!3d41.6518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDM5JzA2LjUiTiA0wrA0MycyOC4yIlc!5e0!3m2!1ses!2ses!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            <div>
              <form onSubmit={handleContactSubmit} className="bg-gray-50 rounded-xl p-8" data-readdy-form id="contacto-electricista">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Solicitar Presupuesto</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                      placeholder="Tu teléfono"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Servicio
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="instalacion">Instalación Eléctrica</option>
                    <option value="reparacion">Reparación</option>
                    <option value="mantenimiento">Mantenimiento</option>
                    <option value="certificacion">Certificación</option>
                    <option value="domotica">Domótica</option>
                    <option value="led">Iluminación LED</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    required
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-none"
                    placeholder="Describe tu proyecto o necesidad..."
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">Máximo 500 caracteres</p>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-send-plane-line mr-2"></i>
                  Enviar Solicitud
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4" style={{ fontFamily: '"Pacifico", serif' }}>
                ElectroValladolid
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Tu electricista de confianza en Valladolid. Más de 15 años ofreciendo servicios eléctricos de calidad con garantía total.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors cursor-pointer">
                  <i className="ri-facebook-fill"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors cursor-pointer">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors cursor-pointer">
                  <i className="ri-linkedin-fill"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#servicios" className="hover:text-white transition-colors cursor-pointer">Instalaciones Eléctricas</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors cursor-pointer">Reparaciones 24h</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors cursor-pointer">Mantenimiento</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors cursor-pointer">Certificaciones</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors cursor-pointer">Domótica</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <i className="ri-phone-line mr-2"></i>
                  641 847 249
                </li>
                <li className="flex items-center">
                  <i className="ri-whatsapp-line mr-2"></i>
                  641 847 249 (8:00 - 20:00)
                </li>
                <li className="flex items-center">
                  <i className="ri-mail-line mr-2"></i>
                  Servirepararar@gmail.com
                </li>
                <li className="flex items-start">
                  <i className="ri-map-pin-line mr-2 mt-1"></i>
                  <span>Calle Isabel la Católica 6<br />47465 Valladolid</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#servicios" className="hover:text-white transition-colors cursor-pointer">Servicios</a></li>
                <li><a href="/galeria" className="hover:text-white transition-colors cursor-pointer">Galería</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors cursor-pointer">Blog</a></li>
                <li><a href="/testimonios" className="hover:text-white transition-colors cursor-pointer">Testimonios</a></li>
                <li><a href="/preguntas-frecuentes" className="hover:text-white transition-colors cursor-pointer">FAQ</a></li>
                <li><a href="#nosotros" className="hover:text-white transition-colors cursor-pointer">Nosotros</a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors cursor-pointer">Contacto</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ElectroValladolid. Todos los derechos reservados.
            </p>
            <a 
              href="https://readdy.ai/?origin=logo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer mt-2 md:mt-0"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
