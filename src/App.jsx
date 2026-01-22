import logo from './assets/logo-protoslab.webp'
import heroImage from './assets/foto/foto-10.webp'
import studioImage1 from './assets/foto/foto-7.webp'
import studioImage2 from './assets/foto/foto-2.webp'
import studioImage3 from './assets/foto/foto-5.webp'
import studioImage4 from './assets/foto/foto-14.webp'

function App() {
  const services = [
    {
      title: "Personal Training 1 to 1",
      description: "Sessioni individuali con trainer dedicato. Programmazione personalizzata, monitoraggio progressi costante e correzione tecnica in tempo reale.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Preparazioni Atletiche",
      description: "Preparazione per gare di bodybuilding, competizioni fitness, sport-specifica. Peak week e gestione completa delle gare.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Bodybuilding",
      description: "Programmi di ipertrofia muscolare, allenamento per massa, definizione e cutting, ricomposizione corporea scientifica.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h2m12 0h2M6 8v8m12-8v8M8 8h8M8 16h8m-8-4h8" />
        </svg>
      )
    },
    {
      title: "Fitness & Benessere",
      description: "Tonificazione generale, dimagrimento, miglioramento della composizione corporea. Il percorso ideale per salute e benessere.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ]

  const features = [
    { label: "Esclusività", value: "Solo su appuntamento" },
    { label: "Attenzione", value: "100% dedicata a te" },
    { label: "Privacy", value: "Ambiente riservato" },
    { label: "Risultati", value: "Programmazione scientifica" }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="PROTOS LAB Logo"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div className="hidden sm:block">
                <p className="font-display text-xl tracking-wider text-white">PROTOS LAB</p>
                <p className="text-xs text-white/50 tracking-widest">PERSONAL TRAINING</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#servizi" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Servizi</a>
              <a href="#metodo" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Il Metodo</a>
              <a href="#studio" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Lo Studio</a>
              <a href="#contatti" className="btn-primary px-5 py-2.5 rounded-lg text-white font-medium text-sm">
                Prenota Ora
              </a>
            </div>

            {/* Mobile menu button */}
            <a href="#contatti" className="md:hidden btn-primary px-4 py-2 rounded-lg text-white font-medium text-sm">
              Prenota
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="PROTOS LAB Studio"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#C41E3A] animate-pulse-red"></span>
              <span className="text-sm text-white/80">Solo su appuntamento</span>
            </div>

            {/* Main Title */}
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider mb-4">
              <span className="text-white">PROTOS</span>
              <span className="text-gradient-red"> LAB</span>
            </h1>

            <p className="text-xl sm:text-2xl text-white/60 tracking-[0.3em] uppercase mb-8">
              Personal Training
            </p>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-12">
              Il tuo studio privato di allenamento in Valle Camonica.<br />
              <span className="text-[#C41E3A]">1 to 1</span> — Programmi personalizzati — Risultati garantiti
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contatti"
                className="btn-primary px-8 py-4 rounded-xl text-white font-semibold text-lg inline-flex items-center justify-center gap-2"
              >
                Prenota la tua sessione
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#servizi"
                className="btn-outline px-8 py-4 rounded-xl text-white font-semibold text-lg inline-flex items-center justify-center gap-2"
              >
                Scopri i servizi
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {features.map((feature, index) => (
              <div key={index} className="py-8 px-4 text-center">
                <p className="text-[#C41E3A] font-semibold text-sm uppercase tracking-wider mb-1">{feature.label}</p>
                <p className="text-white/70 text-sm">{feature.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servizi" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-[#C41E3A] font-medium tracking-widest uppercase mb-4">I Nostri Servizi</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-wide">
              ALLENAMENTO SU MISURA
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Ogni programma è costruito sulle tue esigenze specifiche, i tuoi obiettivi e il tuo stile di vita.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-hover bg-[#111111] border border-white/5 rounded-2xl p-8 group"
              >
                <div className="text-[#C41E3A] mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider max-w-4xl mx-auto"></div>

      {/* Method Section */}
      <section id="metodo" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <p className="text-[#C41E3A] font-medium tracking-widest uppercase mb-4">Il Metodo</p>
              <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wide mb-6">
                DIVENTA LA TUA<br />
                <span className="text-gradient-red">VERSIONE MIGLIORE</span>
              </h2>
              <div className="space-y-6 text-white/70">
                <p>
                  <strong className="text-white">PROTOS</strong> deriva dal greco antico "πρῶτος" — <em>primo, migliore</em>.
                  Questo è esattamente ciò che ti aiutiamo a diventare: la versione migliore di te stesso.
                </p>
                <p>
                  A differenza delle palestre tradizionali, qui lavori <strong className="text-white">esclusivamente 1 to 1</strong> con il tuo trainer.
                  Nessuna distrazione, nessuna attesa, nessun compromesso.
                </p>
                <p>
                  Ogni sessione è progettata intorno a te: ai tuoi obiettivi, ai tuoi limiti, al tuo potenziale.
                  La <strong className="text-white">programmazione scientifica</strong> garantisce risultati misurabili e duraturi.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                <div>
                  <p className="font-display text-4xl text-[#C41E3A]">100%</p>
                  <p className="text-white/50 text-sm">Attenzione dedicata</p>
                </div>
                <div>
                  <p className="font-display text-4xl text-[#C41E3A]">1:1</p>
                  <p className="text-white/50 text-sm">Allenamento privato</p>
                </div>
                <div>
                  <p className="font-display text-4xl text-[#C41E3A]">∞</p>
                  <p className="text-white/50 text-sm">Il tuo potenziale</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src={studioImage4}
                  alt="Allenamento personalizzato"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-[#C41E3A]/30 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section id="studio" className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-[#C41E3A] font-medium tracking-widest uppercase mb-4">Lo Studio</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-wide">
              IL TUO SPAZIO PRIVATO
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Attrezzatura professionale, ambiente esclusivo, zero distrazioni. Solo tu e i tuoi obiettivi.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
              <img src={studioImage1} alt="PROTOS LAB Studio" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img src={studioImage2} alt="Power rack" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img src={studioImage3} alt="Pesi" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden aspect-video">
              <img src={studioImage4} alt="Allenamento" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          {/* Equipment List */}
          <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["Power Rack Professionale", "Manubri & Bilancieri", "Macchine a Cavi", "Cardio Equipment"].map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-white/70">
                <svg className="w-5 h-5 text-[#C41E3A]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#C41E3A] blur-[200px]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-wide mb-6">
            PRONTO A INIZIARE?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Il primo passo verso i tuoi obiettivi inizia con una sessione conoscitiva.
            Scopri il metodo PROTOS LAB e inizia la tua trasformazione.
          </p>
          <a
            href="#contatti"
            className="btn-primary px-10 py-5 rounded-xl text-white font-semibold text-lg inline-flex items-center gap-3"
          >
            Prenota la prima sessione
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contatti" className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <p className="text-[#C41E3A] font-medium tracking-widest uppercase mb-4">Contatti</p>
              <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wide mb-6">
                VIENI A TROVARCI
              </h2>
              <p className="text-white/60 mb-10">
                Lo studio si trova a Sellero, nel cuore della Valle Camonica.
                Contattaci per prenotare la tua sessione o per qualsiasi informazione.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C41E3A]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#C41E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Indirizzo</p>
                    <p className="text-white/60">Via Nazionale 10, 25050 Sellero (BS)</p>
                    <p className="text-white/40 text-sm">Valle Camonica, Lombardia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C41E3A]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#C41E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Telefono</p>
                    <p className="text-white/60">[DA COMPLETARE]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C41E3A]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#C41E3A]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Instagram</p>
                    <a href="https://www.instagram.com/protos.lab/" target="_blank" rel="noopener noreferrer" className="text-[#C41E3A] hover:underline">
                      @protos.lab
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C41E3A]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#C41E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Orari</p>
                    <p className="text-white/60">Solo su appuntamento</p>
                    <p className="text-white/40 text-sm">Lun - Sab</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/39XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] transition-colors px-6 py-4 rounded-xl text-white font-semibold"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Scrivici su WhatsApp
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-[500px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.123456789!2d10.3456789!3d46.0654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDAzJzU1LjYiTiAxMMKwMjAnNDQuNCJF!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PROTOS LAB Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="PROTOS LAB Logo"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-display text-lg tracking-wider text-white">PROTOS LAB</p>
                <p className="text-xs text-white/40">Studio Personal Training</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/protos.lab/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C41E3A] transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-white/40 text-sm">
                © 2025 PROTOS LAB. Tutti i diritti riservati.
              </p>
              <p className="text-white/30 text-xs mt-1">
                Via Nazionale 10, 25050 Sellero (BS)
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
