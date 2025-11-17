
import { useState } from 'react';

export default function PreguntasFrecuentes() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      category: 'Servicios Generales',
      question: '¿Ofrecen servicio de emergencia 24 horas?',
      answer: 'Sí, estamos disponibles las 24 horas del día, los 7 días de la semana para emergencias eléctricas. Nuestro tiempo de respuesta promedio es de 1-2 horas en Valladolid capital y alrededores. Para emergencias, llama al 641 847 249 y te atenderemos inmediatamente.'
    },
    {
      id: 2,
      category: 'Presupuestos',
      question: '¿Cuánto tiempo tardan en dar un presupuesto?',
      answer: 'Para trabajos estándar, podemos dar un presupuesto en el mismo día de la visita. Para proyectos más complejos que requieren estudio detallado, máximo 48 horas después de la inspección técnica. La visita para presupuesto es completamente gratuita y sin compromiso.'
    },
    {
      id: 3,
      category: 'Licencias y Seguros',
      question: '¿Están asegurados y tienen licencia?',
      answer: 'Sí, somos electricistas autorizados con más de 15 años de experiencia y todas las certificaciones requeridas. Contamos con seguro de responsabilidad civil que cubre todos nuestros trabajos. Todos nuestros técnicos están certificados y en formación continua.'
    },
    {
      id: 4,
      category: 'Certificaciones',
      question: '¿Qué tipos de certificaciones eléctricas realizan?',
      answer: 'Realizamos todos los tipos de certificaciones eléctricas: certificados de instalación eléctrica (CIE), boletines eléctricos, inspecciones ITC-BT, certificados de eficiencia energética, inspecciones periódicas y todos los certificados oficiales requeridos por la normativa vigente.'
    },
    {
      id: 5,
      category: 'Cobertura',
      question: '¿Trabajan en toda la provincia de Valladolid?',
      answer: 'Sí, ofrecemos nuestros servicios en Valladolid capital y toda la provincia. Para emergencias, nos desplazamos sin coste adicional en un radio de 30 km desde Valladolid capital. Para distancias mayores, consultamos el coste de desplazamiento previamente.'
    },
    {
      id: 6,
      category: 'Garantías',
      question: '¿Qué garantía ofrecen en sus trabajos?',
      answer: 'Ofrecemos 2 años de garantía en instalaciones nuevas completas, 1 año en reparaciones y modificaciones, y 6 meses en mantenimientos. Todos los materiales utilizados son de primeras marcas (Schneider, ABB, Legrand) con garantía del fabricante. La mano de obra está garantizada según el tipo de trabajo.'
    },
    {
      id: 7,
      category: 'Instalaciones',
      question: '¿Realizan instalaciones eléctricas completas?',
      answer: 'Sí, realizamos instalaciones eléctricas completas para viviendas, locales comerciales, oficinas y naves industriales. Incluimos diseño, proyecto técnico, instalación, legalización y puesta en marcha. Trabajamos con las últimas normativas y tecnologías.'
    },
    {
      id: 8,
      category: 'Domótica',
      question: '¿Qué incluye un sistema domótico?',
      answer: 'Nuestros sistemas domóticos incluyen control de iluminación, persianas, climatización, seguridad, videoporteros, y gestión energética. Todo controlable desde smartphone o tablet. Ofrecemos desde sistemas básicos hasta instalaciones completas de hogar inteligente con integración de voz (Alexa, Google).'
    },
    {
      id: 9,
      category: 'Iluminación LED',
      question: '¿Cuánto se ahorra cambiando a iluminación LED?',
      answer: 'El ahorro típico está entre 60-80% en el consumo eléctrico comparado con iluminación tradicional. Una inversión en LED se amortiza normalmente en 12-18 meses. Además, los LEDs duran 25 veces más que las bombillas incandescentes y requieren menos mantenimiento.'
    },
    {
      id: 10,
      category: 'Emergencias',
      question: '¿Qué se considera una emergencia eléctrica?',
      answer: 'Consideramos emergencias: cortes de suministro eléctrico, cortocircuitos, salto constante de diferenciales, chispas o humo en instalaciones, cables expuestos peligrosos, y cualquier situación que comprometa la seguridad. En estos casos, desconecta la electricidad y llámanos inmediatamente.'
    },
    {
      id: 11,
      category: 'Mantenimiento',
      question: '¿Con qué frecuencia se debe hacer mantenimiento eléctrico?',
      answer: 'Recomendamos inspección anual para viviendas, semestral para locales comerciales y trimestral para instalaciones industriales. El mantenimiento preventivo evita el 90% de las averías y garantiza la seguridad. Ofrecemos contratos de mantenimiento con descuentos especiales.'
    },
    {
      id: 12,
      category: 'Precios',
      question: '¿Cómo calculan los precios de sus servicios?',
      answer: 'Nuestros precios se basan en: complejidad del trabajo, materiales necesarios, tiempo estimado y urgencia. Siempre damos presupuesto detallado antes de comenzar. No hay costes ocultos. Para emergencias nocturnas y festivos aplicamos un suplemento del 25% sobre tarifa normal.'
    },
    {
      id: 13,
      category: 'Materiales',
      question: '¿Qué marcas de materiales utilizan?',
      answer: 'Trabajamos exclusivamente con marcas de primera calidad: Schneider Electric, ABB, Legrand, Simon, Siemens y Hager. Todos los materiales tienen certificación CE y cumplen normativas europeas. Ofrecemos garantía tanto de materiales como de instalación.'
    },
    {
      id: 14,
      category: 'Pagos',
      question: '¿Qué formas de pago aceptan?',
      answer: 'Aceptamos efectivo, transferencia bancaria, tarjeta de crédito/débito y Bizum. Para trabajos grandes ofrecemos facilidades de pago fraccionado. Emitimos factura con IVA incluido. Para empresas, trabajamos con pago a 30 días previa aprobación.'
    },
    {
      id: 15,
      category: 'Normativas',
      question: '¿Están al día con las últimas normativas eléctricas?',
      answer: 'Sí, nuestro equipo se forma continuamente en las últimas normativas. Cumplimos estrictamente el REBT (Reglamento Electrotécnico de Baja Tensión), normativas ITC-BT, y todas las regulaciones autonómicas y locales. Garantizamos que todos nuestros trabajos pasan cualquier inspección oficial.'
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

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
                <a href="/preguntas-frecuentes" className="text-gray-900 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">FAQ</a>
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
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Preguntas Frecuentes</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Resolvemos todas tus dudas sobre servicios eléctricos, presupuestos, garantías y más
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Todo lo que Necesitas Saber</h2>
            <p className="text-xl text-gray-600">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios eléctricos
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <span
                key={category}
                className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {category}
              </span>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white border border-gray-200 rounded-xl shadow-sm">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div>
                    <span className="text-xs text-teal-600 font-medium">{faq.category}</span>
                    <h3 className="text-lg font-semibold text-gray-900 mt-1">{faq.question}</h3>
                  </div>
                  <i className={`ri-${openFaq === faq.id ? 'subtract' : 'add'}-line text-xl text-gray-400`}></i>
                </button>
                
                {openFaq === faq.id && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿No Encuentras la Respuesta?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Nuestro equipo está disponible 24/7 para resolver cualquier duda específica sobre tu proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contacto" className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-mail-line mr-2"></i>Hacer Consulta
            </a>
            <a href="tel:+34641847249" className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-phone-line mr-2"></i>Llamar Ahora
            </a>
            <button 
              onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-chat-voice-line mr-2"></i>Chat en Vivo
            </button>
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
