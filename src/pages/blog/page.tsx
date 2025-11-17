
import { useState } from 'react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const articles = [
    {
      id: 1,
      title: '5 Señales de que Necesitas Renovar tu Instalación Eléctrica',
      excerpt: 'Descubre cuándo es el momento de actualizar tu sistema eléctrico para mayor seguridad y eficiencia.',
      category: 'seguridad',
      date: '15 Marzo 2024',
      readTime: '5 min',
      image: 'https://readdy.ai/api/search-image?query=Old%20electrical%20panel%20with%20outdated%20wiring%2C%20safety%20concerns%2C%20residential%20electrical%20installation%2C%20warning%20signs%20of%20electrical%20problems%2C%20professional%20electrical%20inspection&width=400&height=250&seq=blog-1&orientation=landscape'
    },
    {
      id: 2,
      title: 'Ventajas de la Iluminación LED en tu Hogar',
      excerpt: 'Conoce todos los beneficios económicos y ambientales de cambiar a iluminación LED.',
      category: 'eficiencia',
      date: '10 Marzo 2024',
      readTime: '4 min',
      image: 'https://readdy.ai/api/search-image?query=Modern%20LED%20lighting%20installation%20in%20home%2C%20energy%20efficient%20bulbs%2C%20bright%20modern%20interior%20lighting%2C%20LED%20strips%20and%20fixtures%2C%20contemporary%20home%20lighting%20design&width=400&height=250&seq=blog-2&orientation=landscape'
    },
    {
      id: 3,
      title: 'Domótica: Convierte tu Casa en un Hogar Inteligente',
      excerpt: 'Guía completa sobre sistemas domóticos y cómo pueden mejorar tu calidad de vida.',
      category: 'domotica',
      date: '5 Marzo 2024',
      readTime: '6 min',
      image: 'https://readdy.ai/api/search-image?query=Smart%20home%20automation%20system%2C%20modern%20home%20with%20intelligent%20lighting%20and%20controls%2C%20tablet%20controlling%20home%20systems%2C%20futuristic%20home%20technology%2C%20clean%20modern%20interior&width=400&height=250&seq=blog-3&orientation=landscape'
    },
    {
      id: 4,
      title: 'Mantenimiento Preventivo de Instalaciones Eléctricas',
      excerpt: 'Consejos para mantener tu sistema eléctrico en perfecto estado y evitar averías.',
      category: 'mantenimiento',
      date: '28 Febrero 2024',
      readTime: '5 min',
      image: 'https://readdy.ai/api/search-image?query=Electrical%20maintenance%20work%2C%20professional%20electrician%20checking%20electrical%20panel%2C%20preventive%20maintenance%20tools%2C%20electrical%20safety%20inspection%2C%20modern%20electrical%20equipment&width=400&height=250&seq=blog-4&orientation=landscape'
    },
    {
      id: 5,
      title: 'Certificaciones Eléctricas: Todo lo que Debes Saber',
      excerpt: 'Información completa sobre certificados eléctricos obligatorios y su importancia.',
      category: 'certificaciones',
      date: '20 Febrero 2024',
      readTime: '7 min',
      image: 'https://readdy.ai/api/search-image?query=Electrical%20certification%20documents%2C%20official%20electrical%20inspection%2C%20professional%20electrical%20testing%20equipment%2C%20electrical%20safety%20certificates%2C%20compliance%20documentation&width=400&height=250&seq=blog-5&orientation=landscape'
    },
    {
      id: 6,
      title: 'Emergencias Eléctricas: Qué Hacer y Cuándo Llamar',
      excerpt: 'Guía de actuación ante emergencias eléctricas y cuándo contactar a un profesional.',
      category: 'seguridad',
      date: '15 Febrero 2024',
      readTime: '4 min',
      image: 'https://readdy.ai/api/search-image?query=Electrical%20emergency%20situation%2C%20electrical%20panel%20with%20warning%20signs%2C%20emergency%20electrical%20repair%2C%20safety%20equipment%2C%20urgent%20electrical%20service%20call&width=400&height=250&seq=blog-6&orientation=landscape'
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos los Artículos' },
    { id: 'seguridad', name: 'Seguridad' },
    { id: 'eficiencia', name: 'Eficiencia' },
    { id: 'domotica', name: 'Domótica' },
    { id: 'mantenimiento', name: 'Mantenimiento' },
    { id: 'certificaciones', name: 'Certificaciones' }
  ];

  const filteredArticles = selectedCategory === 'todos' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

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
                <a href="/blog" className="text-gray-900 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Blog</a>
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
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Blog de ElectroValladolid</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Consejos, guías y novedades sobre instalaciones eléctricas, seguridad y eficiencia energética
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

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden cursor-pointer group">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {categories.find(cat => cat.id === article.category)?.name}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <i className="ri-calendar-line mr-2"></i>
                    {article.date}
                    <span className="mx-2">•</span>
                    <i className="ri-time-line mr-2"></i>
                    {article.readTime}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center text-teal-600 font-medium group-hover:text-teal-700 transition-colors">
                    Leer más <i className="ri-arrow-right-line ml-2"></i>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Necesitas Ayuda con tu Instalación Eléctrica?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Nuestro equipo de expertos está disponible 24/7 para resolver cualquier emergencia eléctrica
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
