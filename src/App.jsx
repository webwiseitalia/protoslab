import { useRef, useLayoutEffect, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import logo from './assets/logo-protoslab.webp'
import heroImage from './assets/foto/foto-10.webp'
import studioImage1 from './assets/foto/foto-7.webp'
import studioImage2 from './assets/foto/foto-2.webp'
import studioImage3 from './assets/foto/foto-5.webp'
import studioImage4 from './assets/foto/foto-14.webp'
import studioImage5 from './assets/foto/foto-4.webp'
import studioImage6 from './assets/foto/foto-3.webp'
import studioImage7 from './assets/foto/foto-6.webp'
import studioImage8 from './assets/foto/foto-8.webp'
import studioImage9 from './assets/foto/foto-9.webp'
import studioImage10 from './assets/foto/foto-11.webp'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const mainRef = useRef(null)
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const horizontalRef = useRef(null)
  const horizontalWrapperRef = useRef(null)
  const methodRef = useRef(null)
  const studioRef = useRef(null)
  const ctaRef = useRef(null)
  const contactRef = useRef(null)
  const cursorRef = useRef(null)
  const cursorFollowerRef = useRef(null)

  const [isScrolled, setIsScrolled] = useState(false)

  // Detect scroll for navbar glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ========================
  // MAIN ANIMATIONS
  // ========================
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // CURSOR CUSTOM
      const cursor = cursorRef.current
      const follower = cursorFollowerRef.current

      if (cursor && follower) {
        let mouseX = 0, mouseY = 0
        let cursorX = 0, cursorY = 0
        let followerX = 0, followerY = 0

        window.addEventListener('mousemove', (e) => {
          mouseX = e.clientX
          mouseY = e.clientY
        })

        gsap.ticker.add(() => {
          cursorX += (mouseX - cursorX) * 0.2
          cursorY += (mouseY - cursorY) * 0.2
          followerX += (mouseX - followerX) * 0.08
          followerY += (mouseY - followerY) * 0.08

          gsap.set(cursor, { x: cursorX, y: cursorY })
          gsap.set(follower, { x: followerX, y: followerY })
        })

        const hoverTargets = document.querySelectorAll('a, button, [data-hover]')
        hoverTargets.forEach(el => {
          el.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 0.5, duration: 0.3, ease: 'power2.out' })
            gsap.to(follower, { scale: 1.5, duration: 0.3, ease: 'power2.out' })
          })
          el.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power2.out' })
            gsap.to(follower, { scale: 1, duration: 0.3, ease: 'power2.out' })
          })
        })
      }

      // HERO INTRO ANIMATION
      const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      // Initial states
      gsap.set('.hero-title-line', { yPercent: 100 })
      gsap.set('.hero-subtitle', { opacity: 0, y: 20 })
      gsap.set('.hero-tag', { opacity: 0, y: -20 })
      gsap.set('.hero-cta', { opacity: 0, y: 20 })
      gsap.set('.hero-bottom', { opacity: 0 })
      gsap.set('.hero-image-container', { clipPath: 'inset(0 0 100% 0)' })
      gsap.set('.hero-image', { scale: 1.3 })
      gsap.set('.nav-logo', { opacity: 0 })
      gsap.set('.nav-link', { opacity: 0 })
      gsap.set('.nav-cta', { opacity: 0 })

      heroTl
        // Image reveal
        .to('.hero-image-container', {
          clipPath: 'inset(0 0 0% 0)',
          duration: 1.6,
          ease: 'power4.inOut'
        })
        .to('.hero-image', {
          scale: 1,
          duration: 2,
          ease: 'power2.out'
        }, '-=1.2')
        // Navigation
        .to('.nav-logo', {
          opacity: 1,
          duration: 0.5,
        }, '-=1.5')
        .to('.nav-link', {
          opacity: 1,
          duration: 0.4,
          stagger: 0.05
        }, '-=1.3')
        .to('.nav-cta', {
          opacity: 1,
          duration: 0.4,
        }, '-=1.1')
        // Tag
        .to('.hero-tag', {
          opacity: 1,
          y: 0,
          duration: 0.6,
        }, '-=1.2')
        // Titolo
        .to('.hero-title-line', {
          yPercent: 0,
          duration: 1.2,
          ease: 'power4.out'
        }, '-=0.8')
        // Subtitle
        .to('.hero-subtitle', {
          opacity: 1,
          y: 0,
          duration: 0.7,
        }, '-=0.6')
        // CTA
        .to('.hero-cta', {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1
        }, '-=0.4')
        // Bottom
        .to('.hero-bottom', {
          opacity: 1,
          duration: 0.5,
        }, '-=0.3')

      // Hero parallax
      gsap.to('.hero-image', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })

      gsap.to('.hero-content', {
        yPercent: -20,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'center center',
          end: 'bottom top',
          scrub: 1
        }
      })

      // MARQUEE
      const marqueeAnim = gsap.to('.marquee-inner', {
        xPercent: -50,
        ease: 'none',
        duration: 25,
        repeat: -1
      })

      ScrollTrigger.create({
        trigger: '.marquee-section',
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const velocity = self.getVelocity()
          const speedMultiplier = 1 + Math.abs(velocity) / 2000
          marqueeAnim.timeScale(speedMultiplier)
        },
        onLeave: () => marqueeAnim.timeScale(1),
        onLeaveBack: () => marqueeAnim.timeScale(1)
      })

      // SERVICES SECTION
      gsap.set('.services-title-word', { yPercent: 100, opacity: 0 })
      gsap.set('.service-card', { opacity: 0, y: 100, rotationX: -15 })

      ScrollTrigger.create({
        trigger: servicesRef.current,
        start: 'top 70%',
        onEnter: () => {
          gsap.to('.services-title-word', {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: 'power4.out'
          })

          gsap.to('.service-card', {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power4.out',
            delay: 0.3
          })
        },
        once: true
      })

      // Service card hover
      const serviceCards = document.querySelectorAll('.service-card')
      serviceCards.forEach(card => {
        const bg = card.querySelector('.service-bg')
        const num = card.querySelector('.service-num')
        const title = card.querySelector('.service-title')
        const arrow = card.querySelector('.service-arrow')

        card.addEventListener('mouseenter', () => {
          gsap.to(bg, { scaleY: 1, duration: 0.5, ease: 'power3.out' })
          gsap.to(num, { color: '#C41E3A', duration: 0.3 })
          gsap.to(title, { x: 10, duration: 0.4, ease: 'power2.out' })
          gsap.to(arrow, { x: 10, opacity: 1, duration: 0.4, ease: 'power2.out' })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(bg, { scaleY: 0, duration: 0.5, ease: 'power3.out' })
          gsap.to(num, { color: 'rgba(255,255,255,0.2)', duration: 0.3 })
          gsap.to(title, { x: 0, duration: 0.4, ease: 'power2.out' })
          gsap.to(arrow, { x: 0, opacity: 0.3, duration: 0.4, ease: 'power2.out' })
        })
      })

      // HORIZONTAL SCROLL GALLERY
      const horizontalSection = horizontalWrapperRef.current
      const horizontalScroll = horizontalRef.current

      if (horizontalSection && horizontalScroll) {
        const totalWidth = horizontalScroll.scrollWidth - window.innerWidth

        gsap.to(horizontalScroll, {
          x: -totalWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: horizontalSection,
            start: 'top top',
            end: () => `+=${totalWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        })

        const galleryItems = document.querySelectorAll('.gallery-item')
        galleryItems.forEach((item) => {
          const img = item.querySelector('img')
          gsap.to(img, {
            xPercent: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: horizontalSection,
              start: 'top top',
              end: () => `+=${totalWidth}`,
              scrub: 1
            }
          })
        })
      }

      // METHOD SECTION
      gsap.set('.method-image', { clipPath: 'inset(100% 0 0 0)' })
      gsap.set('.method-img', { scale: 1.3 })
      gsap.set('.method-title-char', { yPercent: 100 })
      gsap.set('.method-text', { opacity: 0, y: 40 })
      gsap.set('.method-stat', { opacity: 0, y: 30 })

      ScrollTrigger.create({
        trigger: methodRef.current,
        start: 'top 60%',
        onEnter: () => {
          const methodTl = gsap.timeline()

          methodTl
            .to('.method-image', {
              clipPath: 'inset(0% 0 0 0)',
              duration: 1.2,
              ease: 'power4.inOut'
            })
            .to('.method-img', {
              scale: 1,
              duration: 1.5,
              ease: 'power2.out'
            }, '-=0.8')
            .to('.method-title-char', {
              yPercent: 0,
              duration: 0.8,
              stagger: 0.03,
              ease: 'power4.out'
            }, '-=1.2')
            .to('.method-text', {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: 'power3.out'
            }, '-=0.5')
            .to('.method-stat', {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power3.out'
            }, '-=0.3')
        },
        once: true
      })

      gsap.to('.method-img', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: methodRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })

      // STUDIO SECTION
      gsap.set('.studio-title-line', { yPercent: 100 })
      gsap.set('.studio-image', { opacity: 0, scale: 0.9 })

      ScrollTrigger.create({
        trigger: studioRef.current,
        start: 'top 60%',
        onEnter: () => {
          gsap.to('.studio-title-line', {
            yPercent: 0,
            duration: 1,
            stagger: 0.12,
            ease: 'power4.out'
          })

          gsap.to('.studio-image', {
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: {
              amount: 0.6,
              from: 'random'
            },
            ease: 'power3.out',
            delay: 0.3
          })
        },
        once: true
      })

      const studioImages = document.querySelectorAll('.studio-image')
      studioImages.forEach(img => {
        const inner = img.querySelector('img')

        img.addEventListener('mouseenter', () => {
          gsap.to(inner, {
            scale: 1.1,
            duration: 0.6,
            ease: 'power2.out'
          })
        })

        img.addEventListener('mouseleave', () => {
          gsap.to(inner, {
            scale: 1,
            duration: 0.6,
            ease: 'power2.out'
          })
        })
      })

      // CTA SECTION
      gsap.set('.cta-char', { yPercent: 100 })

      ScrollTrigger.create({
        trigger: ctaRef.current,
        start: 'top 70%',
        onEnter: () => {
          gsap.to('.cta-char', {
            yPercent: 0,
            duration: 1,
            stagger: 0.05,
            ease: 'power4.out'
          })
        },
        once: true
      })

      gsap.to('.cta-glow', {
        scale: 1.2,
        opacity: 0.8,
        ease: 'none',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })

      // CONTACT SECTION
      gsap.set('.contact-title-line', { yPercent: 100 })
      gsap.set('.contact-item', { opacity: 0, x: -50 })
      gsap.set('.contact-map', { opacity: 0, scale: 0.95 })

      ScrollTrigger.create({
        trigger: contactRef.current,
        start: 'top 60%',
        onEnter: () => {
          gsap.to('.contact-title-line', {
            yPercent: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power4.out'
          })

          gsap.to('.contact-item', {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.3
          })

          gsap.to('.contact-map', {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            delay: 0.5
          })
        },
        once: true
      })

    }, mainRef)

    return () => {
      ctx.revert()
    }
  }, [])

  // RENDER MAIN
  return (
    <div ref={mainRef} className="relative bg-[var(--black)]">
      {/* Noise */}
      <div className="noise" />

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="hidden md:block fixed top-0 left-0 w-4 h-4 bg-[var(--red)] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={cursorFollowerRef}
        className="hidden md:block fixed top-0 left-0 w-10 h-10 border border-[var(--red)]/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 transition-all duration-500 ${
        isScrolled
          ? 'bg-[var(--black)]/70 backdrop-blur-xl border-b border-white/5'
          : 'bg-gradient-to-b from-[var(--black)]/80 via-[var(--black)]/40 to-transparent'
      }`}>
        <div className="flex items-center justify-between">
          <a href="#" className="nav-logo flex items-center gap-3" data-hover>
            <img src={logo} alt="PROTOS LAB" className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover" />
          </a>

          <div className="hidden md:flex items-center gap-10">
            {['Servizi', 'Galleria', 'Metodo', 'Studio', 'Contatti'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link font-grotesk text-xs tracking-[0.2em] uppercase text-white/90 hover:text-white transition-colors duration-300 relative group"
                data-hover
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[var(--red)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>
            ))}
          </div>

          <a
            href="#contatti"
            className="nav-cta font-grotesk text-xs tracking-[0.2em] uppercase px-6 py-3 border border-white/40 text-white hover:bg-[var(--red)] hover:border-[var(--red)] transition-all duration-500"
            data-hover
          >
            Prenota
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        {/* Full Background Image */}
        <div className="hero-image-container absolute inset-0">
          <img
            src={heroImage}
            alt="PROTOS LAB"
            className="hero-image w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--black)]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)] via-transparent to-[var(--black)]/30" />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />

        {/* Main Content - CENTRATO */}
        <div className="hero-content relative z-10 h-full flex flex-col justify-between py-32 px-6 md:px-12 lg:px-24">

          {/* Top: Tag - CENTRATO */}
          <div className="hero-tag flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-[var(--red)]" />
            <span className="font-grotesk text-[10px] md:text-xs tracking-[0.5em] uppercase text-white/60">
              Personal Training Studio
            </span>
            <div className="w-12 h-[1px] bg-[var(--red)]" />
          </div>

          {/* Center: Titolo - CENTRATO */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <h1 className="font-display leading-[0.9] tracking-tight">
              <div className="overflow-hidden pb-2">
                <span className="hero-title-line block text-[16vw] md:text-[14vw] lg:text-[12vw] text-white whitespace-nowrap">
                  PROTOS LAB
                </span>
              </div>
              <div className="overflow-hidden">
                <span className="hero-title-line block font-grotesk text-base md:text-xl lg:text-2xl tracking-[0.2em] uppercase text-[var(--red)] mt-2">
                  — Zero compromessi
                </span>
              </div>
            </h1>

            {/* Descrizione sotto il titolo - CENTRATA */}
            <p className="hero-subtitle font-grotesk text-sm md:text-base text-[#ADBAD5]/70 max-w-lg mt-8 md:mt-12 leading-relaxed">
              200m² di spazio esclusivo in Valle Camonica.
              Allenamento 1:1, attrezzatura professionale, risultati misurabili.
            </p>

            {/* CTA - CENTRATI */}
            <div className="flex items-center justify-center gap-6 mt-8 md:mt-12">
              <a
                href="#contatti"
                className="hero-cta group relative overflow-hidden bg-[var(--red)] px-8 md:px-12 py-4 md:py-5"
                data-hover
              >
                <span className="relative z-10 font-grotesk text-xs md:text-sm tracking-[0.2em] uppercase text-white group-hover:text-[var(--black)] transition-colors duration-500">
                  Prenota
                </span>
                <div className="absolute inset-0 bg-white -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </a>

              <a
                href="#servizi"
                className="hero-cta group flex items-center gap-3"
                data-hover
              >
                <span className="font-grotesk text-xs md:text-sm tracking-[0.15em] uppercase text-white/60 group-hover:text-white transition-colors">
                  Esplora
                </span>
                <svg className="w-4 h-4 text-white/40 group-hover:text-[var(--red)] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom: Info strip */}
          <div className="hero-bottom flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[var(--red)] animate-pulse" />
              <div>
                <span className="font-grotesk text-[10px] tracking-[0.3em] uppercase text-white/40 block">Location</span>
                <span className="font-grotesk text-sm text-white">Sellero (BS), Italia</span>
              </div>
            </div>

            {/* Scroll */}
            <div className="hero-scroll flex items-center gap-4">
              <span className="font-grotesk text-[10px] tracking-[0.3em] uppercase text-white/40">
                Scorri
              </span>
              <div className="w-12 h-[1px] bg-white/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[var(--red)] -translate-x-full animate-[scrollLineX_2s_ease-in-out_infinite]" />
              </div>
            </div>

            {/* Social hint */}
            <a
              href="https://www.instagram.com/protos.lab/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social group flex items-center gap-3"
              data-hover
            >
              <span className="font-grotesk text-[10px] tracking-[0.3em] uppercase text-white/40 group-hover:text-white/70 transition-colors">
                @protos.lab
              </span>
              <svg className="w-4 h-4 text-white/40 group-hover:text-[var(--red)] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Linea verticale decorativa a destra */}
        <div className="hero-line hidden lg:block absolute top-0 bottom-0 right-24 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </section>

      {/* Marquee */}
      <section className="marquee-section py-8 bg-[var(--black)] border-y border-white/5 overflow-hidden">
        <div className="marquee-inner flex whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="font-display text-[6vw] md:text-[4vw] text-white/[0.03] mx-6">
              PERSONAL TRAINING • BODYBUILDING • FITNESS • PREPARAZIONI •
            </span>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="servizi" ref={servicesRef} className="py-32 md:py-48 px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
          <div>
            <span className="font-grotesk text-xs tracking-[0.5em] uppercase text-[var(--red)] block mb-4">
              (01) — Servizi
            </span>
            <h2 className="font-display text-[12vw] md:text-[8vw] leading-[0.9]">
              <div className="overflow-hidden">
                <span className="services-title-word block">COSA</span>
              </div>
              <div className="overflow-hidden ml-[5vw]">
                <span className="services-title-word block text-[var(--red)]">FACCIAMO</span>
              </div>
            </h2>
          </div>
          <p className="font-grotesk text-[#ADBAD5]/60 max-w-sm mt-8 md:mt-0 leading-relaxed">
            Ogni programma è costruito intorno a te. Nessun template. Solo risultati misurabili.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { num: '01', title: 'Personal Training', subtitle: '1:1', desc: 'Sessioni individuali con trainer dedicato. Ogni movimento, ogni ripetizione calibrata su di te.' },
            { num: '02', title: 'Preparazioni Atletiche', subtitle: 'GARE', desc: 'Bodybuilding, fitness, sport-specifica. Peak week e gestione gare complete.' },
            { num: '03', title: 'Bodybuilding', subtitle: 'MASSA', desc: 'Programmi ipertrofia, definizione, ricomposizione. Approccio scientifico.' },
            { num: '04', title: 'Fitness & Benessere', subtitle: 'SALUTE', desc: 'Tonificazione, dimagrimento, mobilità. Il tuo percorso verso il benessere.' }
          ].map((service, i) => (
            <div
              key={i}
              className="service-card group relative p-8 md:p-12 border border-white/5 cursor-pointer overflow-hidden"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              data-hover
            >
              <div className="service-bg absolute inset-0 bg-gradient-to-br from-[var(--red)]/10 to-transparent scale-y-0 origin-bottom" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-12">
                  <span className="service-num font-display text-6xl md:text-7xl text-white/20 transition-colors duration-300">
                    {service.num}
                  </span>
                  <span className="font-grotesk text-xs tracking-[0.3em] uppercase text-[var(--red)]">
                    {service.subtitle}
                  </span>
                </div>

                <h3 className="service-title font-display text-3xl md:text-4xl text-white mb-4 transition-transform duration-300">
                  {service.title}
                </h3>

                <p className="font-grotesk text-sm text-[#ADBAD5]/50 leading-relaxed max-w-sm">
                  {service.desc}
                </p>

                <svg
                  className="service-arrow w-8 h-8 text-white/30 mt-8 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Horizontal Scroll Gallery */}
      <section id="galleria" ref={horizontalWrapperRef} className="relative">
        <div className="absolute top-0 left-0 right-0 py-8 px-6 md:px-12 lg:px-24 z-10">
          <span className="font-grotesk text-xs tracking-[0.5em] uppercase text-[var(--red)]">
            (02) — Galleria
          </span>
        </div>

        <div ref={horizontalRef} className="flex items-center h-screen pl-6 md:pl-24">
          {[studioImage1, studioImage5, studioImage2, studioImage6, studioImage3].map((img, i) => (
            <div
              key={i}
              className="gallery-item flex-shrink-0 h-[70vh] w-[80vw] md:w-[50vw] mr-8 overflow-hidden"
              data-hover
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          <div className="flex-shrink-0 flex items-center justify-center w-[50vw] h-[70vh]">
            <div className="text-center">
              <span className="font-display text-[8vw] text-white/5">PROTOS</span>
              <p className="font-grotesk text-sm text-white/30 mt-4">Scorri per scoprire di più</p>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section id="metodo" ref={methodRef} className="py-32 md:py-48 bg-[var(--black-light)]">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="method-image relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
              <img
                src={studioImage4}
                alt="Il Metodo"
                className="method-img w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--black-light)] via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 flex gap-12">
                <div className="method-stat">
                  <span className="font-display text-5xl md:text-6xl text-white">100</span>
                  <span className="font-display text-2xl text-[var(--red)]">%</span>
                  <p className="font-grotesk text-[10px] tracking-[0.3em] uppercase text-white/50 mt-2">Dedicato a te</p>
                </div>
                <div className="method-stat">
                  <span className="font-display text-5xl md:text-6xl text-white">1</span>
                  <span className="font-display text-2xl text-[var(--red)]">:1</span>
                  <p className="font-grotesk text-[10px] tracking-[0.3em] uppercase text-white/50 mt-2">Sempre</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="font-grotesk text-xs tracking-[0.5em] uppercase text-[var(--red)] block mb-6">
                (03) — Filosofia
              </span>

              <h2 className="font-display text-[14vw] md:text-[7vw] leading-[0.9] mb-12">
                <div className="overflow-hidden">
                  {'IL'.split('').map((char, i) => (
                    <span key={i} className="method-title-char inline-block">{char}</span>
                  ))}
                </div>
                <div className="overflow-hidden text-[var(--red)]">
                  {'METODO'.split('').map((char, i) => (
                    <span key={i} className="method-title-char inline-block">{char}</span>
                  ))}
                </div>
              </h2>

              <div className="space-y-6">
                <p className="method-text font-grotesk text-lg md:text-xl text-white/80 leading-relaxed">
                  <strong className="text-white">PROTOS</strong> — dal greco antico πρῶτος.
                  Significa <em className="text-[var(--red)]">primo, migliore</em>.
                </p>
                <p className="method-text font-grotesk text-base text-[#ADBAD5]/60 leading-relaxed">
                  A differenza delle palestre tradizionali, qui lavori esclusivamente 1 to 1.
                  Nessuna distrazione. Nessun compromesso. Solo tu e il tuo obiettivo.
                </p>
                <p className="method-text font-grotesk text-base text-[#ADBAD5]/60 leading-relaxed">
                  Programmazione scientifica. Monitoraggio costante. Risultati misurabili.
                </p>
              </div>

              <a
                href="#contatti"
                className="method-stat group inline-flex items-center gap-4 mt-12"
                data-hover
              >
                <span className="font-grotesk text-sm tracking-[0.15em] uppercase text-white group-hover:text-[var(--red)] transition-colors">
                  Inizia ora
                </span>
                <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[var(--red)] group-hover:border-[var(--red)] transition-all duration-500">
                  <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section id="studio" ref={studioRef} className="py-32 md:py-48 overflow-hidden">
        {/* Header */}
        <div className="px-6 md:px-12 lg:px-24 mb-16">
          <span className="font-grotesk text-xs tracking-[0.5em] uppercase text-[var(--red)] block mb-4">
            (04) — Lo Spazio
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="font-display text-[15vw] md:text-[12vw] leading-[0.85] tracking-tighter">
              <span className="studio-title-line block">LO STUDIO</span>
            </h2>
            <p className="font-grotesk text-[#ADBAD5]/60 max-w-sm leading-relaxed lg:pb-4">
              200mq di spazio esclusivo. Attrezzatura professionale. Solo tu e il tuo trainer.
            </p>
          </div>
        </div>

        {/* Full Width Image */}
        <div className="studio-image relative w-full h-[70vh] md:h-[80vh] mb-16">
          <img src={studioImage1} alt="Studio panoramica" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)] via-transparent to-[var(--black)]/50" />
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 lg:px-24 pb-12">
            <div className="flex items-end justify-between">
              <div>
                <span className="font-display text-[8vw] md:text-[5vw] text-white/10">01</span>
              </div>
              <div className="text-right">
                <span className="font-grotesk text-xs tracking-[0.3em] uppercase text-white/50 block mb-2">Sala principale</span>
                <span className="font-display text-2xl md:text-4xl text-white">TRAINING AREA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Two Images Side by Side */}
        <div className="px-6 md:px-12 lg:px-24 mb-16">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="studio-image flex-1 relative h-[50vh] md:h-[60vh] overflow-hidden" data-hover>
              <img src={studioImage2} alt="Attrezzatura" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="font-display text-6xl text-white/10">02</span>
                <span className="font-grotesk text-sm text-white block mt-2">Free Weights</span>
              </div>
            </div>
            <div className="studio-image flex-1 relative h-[50vh] md:h-[60vh] overflow-hidden md:mt-24" data-hover>
              <img src={studioImage3} alt="Pesi" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="font-display text-6xl text-white/10">03</span>
                <span className="font-grotesk text-sm text-white block mt-2">Machines</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="px-6 md:px-12 lg:px-24 mb-16">
          <div className="border-t border-b border-white/10 py-12">
            <div className="flex flex-wrap justify-between gap-8">
              <div className="text-center flex-1 min-w-[120px]">
                <span className="font-display text-5xl md:text-6xl text-white">200</span>
                <span className="font-display text-2xl text-[var(--red)]">m²</span>
                <p className="font-grotesk text-xs text-white/40 mt-2 tracking-wider uppercase">Superficie</p>
              </div>
              <div className="text-center flex-1 min-w-[120px]">
                <span className="font-display text-5xl md:text-6xl text-white">1</span>
                <span className="font-display text-2xl text-[var(--red)]">:1</span>
                <p className="font-grotesk text-xs text-white/40 mt-2 tracking-wider uppercase">Sempre</p>
              </div>
              <div className="text-center flex-1 min-w-[120px]">
                <span className="font-display text-5xl md:text-6xl text-white">PRO</span>
                <p className="font-grotesk text-xs text-white/40 mt-2 tracking-wider uppercase">Equipment</p>
              </div>
              <div className="text-center flex-1 min-w-[120px]">
                <span className="font-display text-5xl md:text-6xl text-white">0</span>
                <p className="font-grotesk text-xs text-white/40 mt-2 tracking-wider uppercase">Distrazioni</p>
              </div>
            </div>
          </div>
        </div>

        {/* Three Column Grid */}
        <div className="px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="studio-image relative aspect-[3/4] overflow-hidden" data-hover>
              <img src={studioImage5} alt="Training" className="w-full h-full object-cover" />
            </div>
            <div className="studio-image relative aspect-[3/4] overflow-hidden md:mt-12" data-hover>
              <img src={studioImage6} alt="Ambiente" className="w-full h-full object-cover" />
            </div>
            <div className="studio-image relative aspect-[3/4] overflow-hidden col-span-2 md:col-span-1" data-hover>
              <img src={studioImage7} alt="Dettaglio" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-32 md:py-48 relative overflow-hidden">
        <div className="cta-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--red)]/10 blur-[150px] opacity-50" />

        <div className="relative z-10 text-center px-6">
          <h2 className="font-display text-[20vw] md:text-[18vw] leading-[0.85]">
            <div className="overflow-hidden">
              {'PRONTO?'.split('').map((char, i) => (
                <span key={i} className="cta-char inline-block text-white">{char}</span>
              ))}
            </div>
          </h2>

          <p className="font-grotesk text-base md:text-lg text-[#ADBAD5]/60 mt-8 mb-12 max-w-md mx-auto">
            La tua trasformazione inizia con una scelta.
          </p>

          <a
            href="#contatti"
            className="group relative inline-flex items-center gap-6 px-12 py-6 border border-white/20 overflow-hidden"
            data-hover
          >
            <span className="relative z-10 font-grotesk text-sm tracking-[0.15em] uppercase text-white group-hover:text-black transition-colors duration-500">
              Prenota la prima sessione
            </span>
            <span className="absolute inset-0 bg-[var(--red)] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contatti" ref={contactRef} className="py-32 md:py-48 bg-[var(--black-light)]">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="lg:w-[35%] lg:flex-shrink-0">
              <span className="font-grotesk text-xs tracking-[0.5em] uppercase text-[var(--red)] block mb-6">
                (05) — Contatti
              </span>

              <h2 className="font-display text-[12vw] md:text-[6vw] leading-[0.9] mb-16">
                <div className="overflow-hidden">
                  <span className="contact-title-line block">VIENI A</span>
                </div>
                <div className="overflow-hidden">
                  <span className="contact-title-line block text-[var(--red)]">TROVARCI</span>
                </div>
              </h2>

              <div className="space-y-10">
                <div className="contact-item">
                  <span className="font-grotesk text-[10px] tracking-[0.5em] uppercase text-white/30 block mb-3">Indirizzo</span>
                  <p className="font-grotesk text-xl md:text-2xl text-white hover:text-[var(--red)] transition-colors cursor-default">
                    Via Nazionale 10
                  </p>
                  <p className="font-grotesk text-xl md:text-2xl text-white hover:text-[var(--red)] transition-colors cursor-default">
                    25050 Sellero (BS)
                  </p>
                  <span className="font-grotesk text-xs text-white/40 mt-2 block">Valle Camonica, Lombardia</span>
                </div>

                <div className="contact-item">
                  <span className="font-grotesk text-[10px] tracking-[0.5em] uppercase text-white/30 block mb-3">Instagram</span>
                  <a
                    href="https://www.instagram.com/protos.lab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-grotesk text-xl md:text-2xl text-white hover:text-[var(--red)] transition-colors inline-flex items-center gap-3"
                    data-hover
                  >
                    @protos.lab
                    <svg className="w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="contact-item">
                  <span className="font-grotesk text-[10px] tracking-[0.5em] uppercase text-white/30 block mb-3">Orari</span>
                  <p className="font-grotesk text-xl md:text-2xl text-white">
                    Solo su appuntamento
                  </p>
                  <span className="font-grotesk text-xs text-white/40 mt-2 block">Lunedì — Sabato</span>
                </div>
              </div>

              <a
                href="https://wa.me/39XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#20bd5a] transition-colors px-8 py-5 mt-12"
                data-hover
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="font-grotesk text-sm tracking-[0.15em] uppercase text-white">
                  WhatsApp
                </span>
              </a>
            </div>

            <div className="contact-map lg:flex-1">
              <div className="overflow-hidden relative group h-[400px] lg:h-full lg:min-h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.123456789!2d10.3456789!3d46.0654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDAzJzU1LjYiTiAxMMKwMjAnNDQuNCJF!5e0!3m2!1sit!2sit!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(85%)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PROTOS LAB Location"
                  className="absolute inset-0 w-full h-full group-hover:filter-none transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[var(--red)]/5 mix-blend-multiply pointer-events-none group-hover:opacity-0 transition-opacity duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <img src={logo} alt="PROTOS LAB" className="w-10 h-10 rounded-full object-cover opacity-50" />
              <div>
                <p className="font-display text-lg tracking-wider text-white/50">PROTOS LAB</p>
                <p className="font-grotesk text-xs text-white/20">Studio Personal Training</p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/protos.lab/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-grotesk text-xs tracking-widest uppercase text-white/30 hover:text-[var(--red)] transition-colors"
              data-hover
            >
              Instagram →
            </a>

            <div className="text-left md:text-right">
              <p className="font-grotesk text-xs text-white/20">© 2025 PROTOS LAB</p>
              <p className="font-grotesk text-xs text-white/10 mt-1">Sellero (BS), Valle Camonica</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
