import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export function Particles({ density = 60 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rafId = 0
    let width = 0
    let height = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    type P = { x: number; y: number; r: number; vx: number; vy: number; a: number; aDir: number }
    let particles: P[] = []

    const spawn = (): P => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.15,
      vy: -Math.random() * 0.25 - 0.05,
      a: Math.random() * 0.5 + 0.15,
      aDir: Math.random() > 0.5 ? 1 : -1,
    })

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      particles = new Array(density).fill(0).map(() => spawn())
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.a += p.aDir * 0.004
        if (p.a < 0.1) p.aDir = 1
        if (p.a > 0.75) p.aDir = -1
        if (p.y < -10 || p.x < -10 || p.x > width + 10) {
          Object.assign(p, spawn(), { y: height + Math.random() * 40 })
        }
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6)
        grad.addColorStop(0, `rgba(241,213,122,${p.a})`)
        grad.addColorStop(0.4, `rgba(212,175,55,${p.a * 0.6})`)
        grad.addColorStop(1, 'rgba(212,175,55,0)')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = `rgba(255,240,190,${p.a})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      rafId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [density])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    />
  )
}

export function Monogram({ size = 96, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="mg-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7A5E12" />
          <stop offset="35%" stopColor="#D4AF37" />
          <stop offset="55%" stopColor="#F1D57A" />
          <stop offset="80%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#7A5E12" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="58" stroke="url(#mg-gold)" strokeWidth="0.6" opacity="0.4" />
      <circle cx="60" cy="60" r="52" stroke="url(#mg-gold)" strokeWidth="0.4" opacity="0.6" />
      <g stroke="url(#mg-gold)" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M45 30 L45 90" />
        <path d="M45 30 C 80 30, 82 58, 60 60" />
        <path d="M45 60 L60 60" />
        <path d="M45 90 C 82 90, 82 62, 60 60" />
      </g>
      <g stroke="url(#mg-gold)" strokeWidth="0.9" fill="none" opacity="0.85">
        <path d="M22 60 C 22 48, 40 48, 46 60 C 40 72, 22 72, 22 60 Z" />
        <path d="M98 60 C 98 48, 80 48, 74 60 C 80 72, 98 72, 98 60 Z" />
      </g>
      <g stroke="url(#mg-gold)" strokeWidth="0.7" fill="none" opacity="0.8">
        <rect x="57.5" y="46" width="5" height="10" rx="2.5" />
        <path d="M55 54 C 55 58, 65 58, 65 54" />
        <path d="M60 58 L60 64" />
      </g>
    </svg>
  )
}

export function AudioWave({
  count = 48,
  className = '',
}: {
  count?: number
  className?: string
}) {
  return (
    <div className={`flex items-end justify-center gap-[3px] h-16 ${className}`} aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-gradient-to-t from-gold-dark via-gold to-gold-light"
          initial={{ scaleY: 0.2, opacity: 0.4 }}
          animate={{
            scaleY: [0.25, 1, 0.55, 0.9, 0.3, 0.75, 0.4],
            opacity: [0.5, 0.95, 0.7, 0.95, 0.55, 0.85, 0.6],
          }}
          transition={{
            duration: 2.6 + (i % 5) * 0.35,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.04,
          }}
          style={{ height: `${20 + (i % 7) * 6}px`, transformOrigin: 'bottom' }}
        />
      ))}
    </div>
  )
}

export function Ornament({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 20"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="orn-g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7A5E12" stopOpacity="0" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#7A5E12" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="0" y1="10" x2="80" y2="10" stroke="url(#orn-g)" strokeWidth="1" />
      <line x1="120" y1="10" x2="200" y2="10" stroke="url(#orn-g)" strokeWidth="1" />
      <path
        d="M85 10 L100 3 L115 10 L100 17 Z"
        stroke="#D4AF37"
        strokeWidth="0.8"
        fill="none"
      />
      <circle cx="100" cy="10" r="1.8" fill="#D4AF37" />
    </svg>
  )
}

export function CountdownBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-px bg-gradient-to-b from-gold/40 via-gold/10 to-gold/40 opacity-70 blur-[6px] transition group-hover:opacity-100" />
      <div className="glass-strong relative flex min-w-[110px] flex-col items-center gap-2 px-4 py-6 sm:min-w-[160px] sm:px-8 sm:py-10">
        <span className="font-display text-4xl font-semibold tabular-nums tracking-tight text-ivory sm:text-6xl md:text-7xl">
          {value}
        </span>
        <span className="font-display text-[10px] uppercase tracking-widest2 text-gold-light/80 sm:text-xs">
          {label}
        </span>
        <span className="absolute inset-x-6 top-0 h-px bg-gold-line" />
      </div>
    </div>
  )
}
