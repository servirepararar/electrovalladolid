
import { useState } from 'react';

export default function Galeria() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Instalación Eléctrica Completa - Vivienda Unifamiliar',
      category: 'instalaciones',
      location: 'Valladolid Centro',
      description: 'Instalación eléctrica completa en vivienda de 200m² con sistema domótico integrado',
      image: 'https://readdy.ai/api/search-image?query=Complete%20electrical%20installation%20in%20modern%20home%2C%20electrical%20panel%20with%20organized%20wiring%2C%20professional%20electrical%20work%2C%20residential%20electrical%20system%2C%20clean%20installation&width=600&height=400&seq=gallery-1&orientation=landscape'
    },
    {
      id: 2,
      title: 'Reparación de Emergencia - Corte de Suministro',
      category: 'reparaciones',
      location: 'Valladolid Este',
      description: 'Reparación urgente de avería en cuadro eléctrico que causaba cortes intermitentes',
      image: 'https://readdy.ai/api/search-image?query=Emergency%20electrical%20repair%2C%20electrician%20fixing%20electrical%20panel%20at%20night%2C%20urgent%20electrical%20service%2C%20professional%20emergency%20work%2C%20electrical%20troubleshooting&width=600&height=400&seq=gallery-2&orientation=landscape'
    },
    {
      id: 3,
      title: 'Iluminación LED - Local Comercial',
      category: 'led',
      location: 'Centro Comercial',
      description: 'Renovación completa de iluminación a LED en local comercial de 150m²',
      image: 'https://readdy.ai/api/search-image?query=LED%20lighting%20installation%20in%20commercial%20space%2C%20modern%20LED%20fixtures%2C%20bright%20commercial%20lighting%2C%20energy%20efficient%20lighting%20system%2C%20professional%20LED%20installation&width=600&height=400&seq=gallery-3&orientation=landscape'
    },
    {
      id: 4,
      title: 'Sistema Domótico - Casa Inteligente',
      category: 'domotica',
      location: 'Valladolid Norte',
      description: 'Instalación de sistema domótico completo con control de iluminación, climatización y seguridad',
      image: 'https://readdy.ai/api/search-image?query=Smart%20home%20automation%20installation%2C%20home%20automation%20control%20panel%2C%20intelligent%20lighting%20system%2C%20modern%20smart%20home%20technology%2C%20automated%20home%20controls&width=600&height=400&seq=gallery-4&orientation=landscape'
    },
    {
      id: 5,
      title: 'Mantenimiento Preventivo - Edificio de Oficinas',
      category: 'mantenimiento',
      location: 'Polígono Industrial',
      description: 'Mantenimiento anual de instalaciones eléctricas en edificio de oficinas de 5 plantas',
      image: 'https://readdy.ai/api/search-image?query=Electrical%20maintenance%20in%20office%20building%2C%20professional%20electrician%20checking%20electrical%20systems%2C%20preventive%20maintenance%20work%2C%20commercial%20electrical%20inspection&width=600&height=400&seq=gallery-5&orientation=landscape'
    },
    {
      id: 6,
      title: 'Certificación Eléctrica - Vivienda Antigua',
      category: 'certificaciones',
      location: 'Casco Histórico',
      description: 'Inspección y certificación eléctrica para vivienda del siglo XIX completamente renovada',
      image: 'https://readdy.ai/api/search-image?query=Electrical%20inspection%20and%20certification%2C%20electrician%20testing%20electrical%20installation%2C%20electrical%20safety%20inspection%2C%20professional%20electrical%20testing%20equipment&width=600&height=400&seq=gallery-6&orientation=landscape'
    },
    {
      id: 7,
      title: 'Instalación Industrial - Nave de Producción',
      category: 'instalaciones',
      location: 'Polígono San Cristóbal',
      description: 'Instalación eléctrica de alta potencia para nave industrial de 1000m²',
      image: 'https://readdy.ai/api/search-image?query=Industrial%20electrical%20installation%2C%20high%20voltage%20electrical%20work%2C%20industrial%20electrical%20panel%2C%20professional%20industrial%20electrical%20system%2C%20large%20scale%20electrical%20installation&width=600&height=400&seq=gallery-7&orientation=landscape'
    },
    {
      id: 8,
      title: 'Iluminación Exterior - Jardín Residencial',
      category: 'led',
      location: 'Urbanización Las Flores',
      description: 'Sistema de iluminación LED exterior con control automático y sensores de movimiento',
      image: 'https://readdy.ai/api/search-image?query=Outdoor%20LED%20lighting%20installation%2C%20garden%20lighting%20system%2C%20exterior%20LED%20fixtures%2C%20landscape%20lighting%2C%20automated%20outdoor%20lighting&width=600&height=400&seq=gallery-8&orientation=landscape'
    },
    {
      id: 9,
      title: 'Reparación de Cortocircuito - Urgente',
      category: 'reparaciones',
      location: 'Valladolid Sur',
      description: 'Localización y reparación de cortocircuito en instalación residencial',
      image: 'https://readdy.ai/api/search-image?query=Electrical%20short%20circuit%20repair%2C%20electrician%20using%20testing%20equipment%2C%20electrical%20fault%20finding%2C%20professional%20electrical%20repair%20work%2C%20electrical%20troubleshooting&width=600&height=400&seq=gallery-9&orientation=landscape'
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos los Proyectos' },
    { id: 'instalaciones', name: 'Instalaciones' },
    { id: 'reparaciones', name: 'Reparaciones' },
    { id: 'led', name: 'Iluminación LED' },
    { id: 'domotica', name: 'Domótica' },
    { id: 'mantenimiento', name: 'Mantenimiento' },
    { id: 'certificaciones', name: 'Certificaciones' }
  ];

  const filteredProjects = selectedCategory === 'todos' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const testimonials = [
    {
      id: 1,
      name: 'María González',
      location: 'Valladolid Centro',
      rating: 5,
      comment: 'Excelente servicio. Vinieron en menos de 2 horas para una emergencia y solucionaron el problema rápidamente. Muy profesionales.',
      service: 'Reparación de emergencia'
    },
    {
      id: 2,
      name: 'Carlos Martín',
      location: 'Valladolid Este',
      rating: 5,
      comment: 'Hicieron la instalación eléctrica completa de mi casa. Trabajo impecable, cumplieron los plazos y el precio fue muy competitivo.',
      service: 'Instalación completa'
    },
    {
      id: 3,
      name: 'Ana Rodríguez',
      location: 'Valladolid Norte',
      rating: 5,
      comment: 'Instalaron un sistema domótico en mi hogar. Ahora puedo controlar todo desde el móvil. Muy recomendable.',
      service: 'Sistema domótico'
    },
    {
      id: 4,
      name: 'José Luis Fernández',
      location: 'Polígono Industrial',
      rating: 5,
      comment: 'Llevamos años con ellos para el mantenimiento de nuestras oficinas. Siempre puntuales y eficientes.',
      service: 'Mantenimiento preventivo'
    }
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
                <a href="/galeria" className="text-gray-900 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Galería</a>
                <a href="/blog" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Blog</a>
                <a href="/testimonios" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Testimonios</a>
                <a href="/preguntas-frecuentes" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">FAQ</a>
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
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Galería de Trabajos</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Descubre algunos de nuestros proyectos más destacados y las opiniones de nuestros clientes satisfechos
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === category.id
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(project.id)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {categories.find(cat => cat.id === project.category)?.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <i className="ri-eye-line text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <i className="ri-map-pin-line mr-2"></i>
                    {project.location}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Opiniones de Nuestros Clientes</h2>
            <p className="text-xl text-gray-600">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <p className="text-sm text-teal-600 font-medium mt-1">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Quieres que tu Proyecto sea el Próximo?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contacta con nosotros para un presupuesto gratuito y sin compromiso
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

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors cursor-pointer z-10"
            >
              <i className="ri-close-line"></i>
            </button>
            <img 
              src={projects.find(p => p.id === selectedImage)?.image}
              alt={projects.find(p => p.id === selectedImage)?.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
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
                <li><a href="/preguntas-frecuentes" className="hover:text-white transition-colors cursor-pointer">FAQ</a></li>
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
