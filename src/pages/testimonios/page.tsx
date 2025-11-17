
import { useState } from 'react';

export default function Testimonios() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      name: 'María González Fernández',
      location: 'Valladolid Centro',
      rating: 5,
      date: '15 Marzo 2024',
      service: 'Reparación de emergencia',
      comment: 'Excelente servicio. Tuvimos un corte de luz en toda la casa un domingo por la noche y vinieron en menos de 2 horas. Solucionaron el problema rápidamente y el precio fue muy justo. Muy profesionales y educados.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20middle-aged%20woman%20smiling%2C%20satisfied%20customer%20portrait%2C%20clean%20background%2C%20natural%20lighting%2C%20professional%20headshot%20style&width=150&height=150&seq=testimonial-1&orientation=squarish'
    },
    {
      id: 2,
      name: 'Carlos Martín Ruiz',
      location: 'Valladolid Este',
      rating: 5,
      date: '8 Marzo 2024',
      service: 'Instalación completa',
      comment: 'Hicieron la instalación eléctrica completa de mi casa nueva. Trabajo impecable, cumplieron los plazos exactos que me dijeron y el precio fue muy competitivo comparado con otros presupuestos. Los recomiendo 100%.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20middle-aged%20man%20smiling%2C%20satisfied%20customer%20portrait%2C%20clean%20background%2C%20natural%20lighting%2C%20professional%20headshot%20style&width=150&height=150&seq=testimonial-2&orientation=squarish'
    },
    {
      id: 3,
      name: 'Ana Rodríguez López',
      location: 'Valladolid Norte',
      rating: 5,
      date: '2 Marzo 2024',
      service: 'Sistema domótico',
      comment: 'Instalaron un sistema domótico completo en mi hogar. Ahora puedo controlar luces, persianas y calefacción desde el móvil. El técnico me explicó todo perfectamente y me enseñó a usar la aplicación. Muy recomendable.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20young%20woman%20smiling%2C%20satisfied%20customer%20portrait%2C%20clean%20background%2C%20natural%20lighting%2C%20professional%20headshot%20style&width=150&height=150&seq=testimonial-3&orientation=squarish'
    },
    {
      id: 4,
      name: 'José Luis Fernández',
      location: 'Polígono Industrial',
      rating: 5,
      date: '25 Febrero 2024',
      service: 'Mantenimiento preventivo',
      comment: 'Llevamos años con ElectroValladolid para el mantenimiento de nuestras oficinas. Siempre puntuales, eficientes y nos avisan de cualquier problema antes de que se convierta en una avería mayor. Excelente relación calidad-precio.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20businessman%20smiling%2C%20satisfied%20customer%20portrait%2C%20clean%20background%2C%20natural%20lighting%2C%20professional%20headshot%20style&width=150&height=150&seq=testimonial-4&orientation=squarish'
    },
    {
      id: 5,
      name: 'Laura Sánchez García',
      location: 'Valladolid Sur',
      rating: 5,
      date: '18 Febrero 2024',
      service: 'Iluminación LED',
      comment: 'Cambiaron toda la iluminación de mi local comercial a LED. El ahorro en la factura de la luz es increíble, casi un 60% menos. Además, la luz es mucho mejor y más uniforme. Inversión totalmente rentable.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20young%20businesswoman%20smiling%2C%20satisfied%20customer%20portrait%2C%20clean%20background%2C%20natural%20lighting%2C%20professional%20headshot%20style&width=150&height=150&seq=testimonial-5&orientation=squarish'
    },
    {
      id: 6,
      name: 'Miguel Ángel Torres',
      location: 'Casco Histórico',
      rating: 5,
      date: '10 Febrero 2024',
      service: 'Certificación eléctrica',
      comment: 'Necesitaba el certificado eléctrico para vender mi piso. Vinieron al día siguiente, hicieron la inspección completa y me entregaron toda la documentación en 48 horas. Muy profesionales y rápidos.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20senior%20man%20smiling%2C%20satisfied%20customer%20portrait%2C%20clean%20background%2C%20natural%20lighting%2C%20professional%20headshot%20style&width=150&height=150&seq=testimonial-6&orientation=squarish'
    },
    {
      id: 7,
      name: 'Carmen Jiménez Vega',
      location: 'Urbanización Las Flores',
      rating: 5,
      date: '5 Febrero 2024',
      service: 'Instalación exterior',
      comment: 'Instalaron toda la iluminación exterior de mi jardín con sensores de movimiento. Quedó espectacular y funciona perfectamente. Muy contentos con el resultado y la atención recibida.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20middle-aged%20woman%20smiling%2C%20satisfied%20customer%20portrait%2C%20clean%20background%2C%20natural%20lighting%2C%20professional%20headshot%20style&width=150&height=150&seq=testimonial-7&orientation=squarish'
    },
    {
      id: 8,
      name: 'Roberto Díaz Moreno',
      location: 'Valladolid Oeste',
      rating: 5,
      date: '28 Enero 2024',
      service: 'Reparación urgente',
      comment: 'Saltó el diferencial por la noche y no conseguíamos que funcionara. Llamé a las 11 de la noche y vinieron en 1 hora. Encontraron el problema rápidamente y lo solucionaron. Servicio excepcional.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20middle-aged%20man%20smiling%2C%20satisfied%20customer%20portrait%2C%20clean%20background%2C%20natural%20lighting%2C%20professional%20headshot%20style&width=150&height=150&seq=testimonial-8&orientation=squarish'
    }
  ];

  const stats = [
    { number: '500+', label: 'Clientes Satisfechos', icon: 'ri-user-heart-line' },
    { number: '4.9/5', label: 'Valoración Media', icon: 'ri-star-line' },
    { number: '98%', label: 'Recomendación', icon: 'ri-thumb-up-line' },
    { number: '24h', label: 'Tiempo Respuesta', icon: 'ri-time-line' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-gray-900 cursor-pointer" style={{ fontFamily: '"Pacifico", serif' }}>
                ElectroValladolid
              </a>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Inicio</a>
                <a href="/#servicios" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Servicios</a>
                <a href="/galeria" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Galería</a>
                <a href="/blog" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Blog</a>
                <a href="/testimonios" className="text-gray-900 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Testimonios</a>
                <a href="/#contacto" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Contacto</a>
                <a href="tel:+34641847249" className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer">
                  <i className="ri-phone-line mr-2"></i>Llamar Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Testimonios de Clientes</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Descubre lo que opinan nuestros clientes sobre nuestros servicios eléctricos profesionales
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${stat.icon} text-2xl text-teal-600`}></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo que Dicen Nuestros Clientes</h2>
            <p className="text-xl text-gray-600">
              Testimonios reales de clientes satisfechos con nuestros servicios eléctricos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 cursor-pointer group"
                onClick={() => setSelectedTestimonial(testimonial.id)}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                    <p className="text-xs text-gray-400">{testimonial.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4 italic line-clamp-4">
                  "{testimonial.comment}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="text-sm text-teal-600 font-medium">{testimonial.service}</p>
                  <div className="flex items-center text-teal-600 font-medium group-hover:text-teal-700 transition-colors mt-2">
                    Leer completo <i className="ri-arrow-right-line ml-2"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Quieres Ser Nuestro Próximo Cliente Satisfecho?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Únete a más de 500 clientes que confían en ElectroValladolid para sus proyectos eléctricos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contacto" className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-mail-line mr-2"></i>Solicitar Presupuesto
            </a>
            <a href="tel:+34641847249" className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-phone-line mr-2"></i>641 847 249
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial Modal */}
      {selectedTestimonial && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div className="bg-white rounded-xl max-w-2xl max-h-full overflow-y-auto p-8 relative">
            <button
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
            
            {(() => {
              const testimonial = testimonials.find(t => t.id === selectedTestimonial);
              if (!testimonial) return null;
              
              return (
                <div>
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover mr-6"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-500">{testimonial.location}</p>
                      <p className="text-sm text-gray-400">{testimonial.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-yellow-400 text-xl"></i>
                    ))}
                    <span className="ml-2 text-gray-600">({testimonial.rating}/5)</span>
                  </div>
                  
                  <div className="mb-6">
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                      {testimonial.service}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    "{testimonial.comment}"
                  </p>
                </div>
              );
            })()}
          </div>
        </div>
      )}

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
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/" className="hover:text-white transition-colors cursor-pointer">Inicio</a></li>
                <li><a href="/galeria" className="hover:text-white transition-colors cursor-pointer">Galería</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors cursor-pointer">Blog</a></li>
                <li><a href="/testimonios" className="hover:text-white transition-colors cursor-pointer">Testimonios</a></li>
                <li><a href="/#contacto" className="hover:text-white transition-colors cursor-pointer">Contacto</a></li>
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
                  <i className="ri-mail-line mr-2"></i>
                  Servirepararar@gmail.com
                </li>
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
