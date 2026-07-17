import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  Sparkles,
  MapPin,
  Calendar,
  Clock,
  Mic2,
  Music4,
  TrendingUp,
  Handshake,
  Headphones,
  Clapperboard,
  Star,
  ShieldAlert,
  Check,
  Instagram,
  Youtube,
  Send,
} from 'lucide-react'
import { AudioWave, CountdownBox, Monogram, Ornament, Particles } from './effects'

const EVENT_DATE = new Date('2026-07-21T14:00:00-03:00')

/* ─────────────────────────── Header ─────────────────────────── */

function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-gold/10 bg-obsidian/85 backdrop-blur-md py-3'
          : 'border-b border-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <Monogram size={40} />
          <span className="hidden font-display text-sm font-semibold tracking-widest2 text-ivory sm:block">
            BELO<span className="text-gold">'</span>S <span className="gold-text">MUSIC</span>
          </span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {[
            ['O Selo', 'selo'],
            ['O Evento', 'evento'],
            ['Contagem', 'countdown'],
            ['Inscrição', 'inscricao'],
          ].map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="font-display text-[11px] uppercase tracking-widest2 text-ivory/70 transition hover:text-gold-light"
            >
              {label}
            </a>
          ))}
        </nav>
        <a href="#inscricao" className="btn-outline hidden sm:inline-flex">
          Reservar Lugar <ArrowRight size={14} />
        </a>
      </div>
    </header>
  )
}

/* ─────────────────────────── Hero ─────────────────────────── */

function Hero() {
  const { scrollY } = useScroll()
  const parallax = useTransform(scrollY, [0, 800], [0, 120])

  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center overflow-hidden pt-24 grain"
    >
      <motion.div
        style={{ y: parallax }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-radial-glow blur-2xl"
      />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
        <div className="absolute right-[10%] top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
      </div>
      <Particles density={70} />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-6 pb-24 pt-10 lg:grid-cols-[1.15fr_.85fr] lg:px-10">
        <div className="relative z-10 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-gold" />
            <span className="font-display text-[11px] uppercase tracking-widest3 text-gold-light">
              Lançamento Oficial · Rio de Janeiro
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
            className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[0.95] tracking-tight text-ivory"
          >
            O início de uma
            <br />
            <span className="italic text-ivory/90">nova história</span>
            <br />
            <span className="gold-text-shimmer">da música.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-8 max-w-xl font-serif text-lg leading-relaxed text-ivory/70 sm:text-xl"
          >
            A <span className="text-gold-light">BELO'S MUSIC</span> nasce para descobrir talentos,
            desenvolver carreiras e conectar artistas às melhores oportunidades do mercado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
          >
            <a href="#inscricao" className="btn-gold">
              Quero Participar da Seleção
              <ArrowRight size={16} />
            </a>
            <div className="flex items-center gap-3 text-sm text-ivory/70">
              <span className="text-lg">🎟</span>
              <span className="font-serif italic">
                Apenas <span className="text-gold-light">300 convidados</span> serão selecionados.
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-gold/10 pt-6"
          >
            {[
              [<Calendar size={16} key="c" />, '21 · JUL', 'Data do evento'],
              [<Clock size={16} key="h" />, '14h', 'A partir das'],
              [<MapPin size={16} key="m" />, 'BATUQ', 'Penha · RJ'],
            ].map(([icon, big, small], i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="flex items-center gap-2 text-gold">{icon}</span>
                <span className="font-display text-xl tracking-widest2 text-ivory sm:text-2xl">
                  {big}
                </span>
                <span className="text-[11px] uppercase tracking-widest2 text-ivory/45">
                  {small}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.25 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-glow blur-2xl" />
          </div>

          <div className="glass relative flex aspect-square w-full max-w-md flex-col items-center justify-between p-8 sm:p-10">
            <span className="absolute left-6 top-6 font-display text-[10px] uppercase tracking-widest2 text-gold-light/70">
              N.º 001
            </span>
            <span className="absolute right-6 top-6 font-display text-[10px] uppercase tracking-widest2 text-gold-light/70">
              MMXXVI
            </span>
            <div className="my-auto flex flex-col items-center gap-4">
              <Monogram size={180} className="animate-drift" />
              <span className="mt-2 font-display text-xs uppercase tracking-widest3 text-gold-light">
                Belo<span className="text-ivory">'</span>s Music
              </span>
              <span className="font-serif text-sm italic text-ivory/55">
                Selo · Editora · Estúdio
              </span>
            </div>
            <AudioWave count={36} className="mt-4 w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Marquee ─────────────────────────── */

function Marquee() {
  const items = [
    'Descobrir Talentos',
    'Desenvolver Carreiras',
    'Conectar Artistas',
    'Produzir Grandes Obras',
    'Impulsionar o Mercado',
  ]
  const track = [...items, ...items, ...items]
  return (
    <div className="relative overflow-hidden border-y border-gold/15 bg-obsidian py-6">
      <div className="flex w-max marquee-track items-center gap-14 whitespace-nowrap">
        {track.map((t, i) => (
          <div key={i} className="flex items-center gap-14">
            <span className="font-serif text-3xl italic text-ivory/70 sm:text-4xl">{t}</span>
            <Star size={12} className="text-gold" />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────── Services ─────────────────────────── */

const services = [
  {
    icon: Music4,
    title: 'Produção Musical',
    desc: 'Do estúdio ao master. Direção artística, gravação, mixagem e finalização em padrão internacional.',
    n: '01',
  },
  {
    icon: Mic2,
    title: 'Desenvolvimento Artístico',
    desc: 'Construção de identidade, imagem, repertório e performance para artistas em qualquer fase.',
    n: '02',
  },
  {
    icon: TrendingUp,
    title: 'Marketing Musical',
    desc: 'Estratégia digital, campanhas de lançamento, mídia paga, ativação de fãs e crescimento sustentável.',
    n: '03',
  },
  {
    icon: Handshake,
    title: 'Networking',
    desc: 'Uma ponte direta com produtores, gravadoras, festivais, marcas e as maiores oportunidades do mercado.',
    n: '04',
  },
  {
    icon: Headphones,
    title: 'Distribuição',
    desc: 'Publicação nas principais plataformas de streaming com curadoria editorial, pitching e relatórios.',
    n: '05',
  },
  {
    icon: Clapperboard,
    title: 'Conteúdo',
    desc: 'Videoclipes, sessions, campanhas visuais e narrativas que dão presença cinematográfica ao artista.',
    n: '06',
  },
]

function Services() {
  return (
    <section id="selo" className="relative overflow-hidden py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-obsidian to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="divider-dot">O Selo</span>
          <h2 className="mt-6 font-serif text-4xl font-light leading-tight text-ivory sm:text-5xl md:text-6xl">
            Muito mais do que um
            <br />
            <span className="italic gold-text">selo musical.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-lg text-ivory/65 sm:text-xl">
            A BELO'S MUSIC foi criada para impulsionar artistas em todas as etapas da carreira — do
            desenvolvimento artístico à distribuição da música, produção, marketing e gestão.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group relative overflow-hidden"
              >
                <div className="glass relative flex h-full flex-col gap-6 p-8 transition-all duration-500 group-hover:border-gold/50">
                  <span className="absolute inset-x-8 top-0 h-px bg-gold-line opacity-40 transition group-hover:opacity-100" />
                  <div className="flex items-start justify-between">
                    <div className="relative flex h-14 w-14 items-center justify-center border border-gold/25 bg-obsidian/60 transition group-hover:border-gold group-hover:shadow-gold">
                      <Icon size={22} className="text-gold-light" />
                    </div>
                    <span className="font-display text-xs tracking-widest2 text-gold-light/60">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold tracking-widest2 text-ivory">
                    {s.title.toUpperCase()}
                  </h3>
                  <p className="font-serif text-base leading-relaxed text-ivory/60 sm:text-lg">
                    {s.desc}
                  </p>
                  <span className="absolute inset-x-8 bottom-0 h-px bg-gold-line opacity-0 transition group-hover:opacity-70" />
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Event Highlights ─────────────────────────── */

const eventItems = [
  'Novos talentos e artistas consagrados',
  'Networking e novas parcerias',
  'Estratégias para crescer na carreira',
  'Conteúdo exclusivo',
  'Apresentação oficial do selo',
  'Oportunidades reais para artistas',
]

function EventHighlights() {
  return (
    <section
      id="evento"
      className="relative overflow-hidden border-y border-gold/10 bg-night py-32 lg:py-40 grain"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-col justify-center"
        >
          <span className="divider-dot">Programa</span>
          <h2 className="mt-6 font-serif text-4xl font-light leading-tight text-ivory sm:text-5xl md:text-6xl">
            O que você
            <br />
            encontrará
            <br />
            <span className="italic gold-text">no evento.</span>
          </h2>
          <p className="mt-6 max-w-md font-serif text-lg text-ivory/60">
            Uma tarde curada para reunir a nova geração da música brasileira. Uma experiência
            imersiva onde artistas, produtores e curadores se encontram pela primeira vez.
          </p>
          <div className="mt-8">
            <Ornament className="h-4 w-52" />
          </div>
        </motion.div>

        <div className="flex flex-col divide-y divide-gold/10 border-y border-gold/10">
          {eventItems.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex items-center gap-6 py-6 transition hover:bg-gold/[0.03] sm:gap-10"
            >
              <span className="font-display text-xs tracking-widest2 text-gold-light/50 sm:text-sm">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-serif text-2xl font-light leading-tight text-ivory transition group-hover:text-gold-light sm:text-3xl md:text-[2rem]">
                {label}
              </span>
              <ArrowRight
                size={18}
                className="ml-auto text-gold-light/40 transition group-hover:translate-x-1 group-hover:text-gold-light"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Why + Numbers ─────────────────────────── */

function Why() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="divider-dot">Por que participar?</span>
          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl font-light leading-[1.05] text-ivory sm:text-5xl md:text-6xl">
            O primeiro encontro oficial da BELO'S MUSIC é para{' '}
            <span className="italic gold-text">artistas que desejam crescer de verdade.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-serif text-lg text-ivory/65 sm:text-xl">
            Uma oportunidade única de conhecer o projeto, fazer networking e descobrir tudo o que a
            BELO'S MUSIC preparou para o mercado.
          </p>
        </motion.div>

        <div className="mt-24 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
          {[
            { value: '300', label: 'Convidados selecionados' },
            { value: '05', label: 'Áreas de atuação' },
            { value: '∞', label: 'Oportunidades' },
          ].map((n, i) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="relative flex flex-col items-center"
            >
              <span className="font-serif text-[8rem] font-light leading-none tracking-tighter gold-text sm:text-[10rem]">
                {n.value}
              </span>
              <span className="mt-2 font-display text-[10px] uppercase tracking-widest2 text-ivory/55 sm:text-xs">
                {n.label}
              </span>
              <span className="mt-6 h-px w-24 bg-gold/40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Exclusivity ─────────────────────────── */

function Exclusivity() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden border border-gold/40 bg-gradient-to-br from-[#1a1408] via-[#0f0c05] to-[#0a0703] p-10 sm:p-14"
        >
          <span className="absolute left-4 top-4 h-6 w-6 border-l border-t border-gold/70" />
          <span className="absolute right-4 top-4 h-6 w-6 border-r border-t border-gold/70" />
          <span className="absolute bottom-4 left-4 h-6 w-6 border-b border-l border-gold/70" />
          <span className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-gold/70" />

          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-gold/50 bg-obsidian/60">
              <ShieldAlert size={26} className="text-gold-light" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <span className="font-display text-xs uppercase tracking-widest3 text-gold-light">
                  Atenção
                </span>
                <span className="inline-flex items-center gap-1 border border-gold/40 bg-obsidian/60 px-3 py-1 font-display text-[10px] uppercase tracking-widest2 text-gold-light">
                  <Star size={10} className="fill-gold-light text-gold-light" /> Evento Exclusivo
                </span>
              </div>
              <h3 className="mt-4 font-serif text-2xl leading-snug text-ivory sm:text-3xl">
                As vagas são extremamente limitadas.
              </h3>
              <p className="mt-4 max-w-3xl font-serif text-base leading-relaxed text-ivory/70 sm:text-lg">
                Após o encerramento das inscrições, nossa equipe fará uma seleção e escolherá{' '}
                <span className="text-gold-light">300 participantes</span> para estarem presentes no
                evento. O preenchimento do cadastro não garante a participação. Os selecionados
                receberão confirmação através do <span className="text-gold-light">e-mail</span> e{' '}
                <span className="text-gold-light">WhatsApp</span> cadastrados.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Countdown ─────────────────────────── */

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])
  return useMemo(() => {
    const diff = Math.max(0, target.getTime() - now)
    const d = Math.floor(diff / 86_400_000)
    const h = Math.floor((diff % 86_400_000) / 3_600_000)
    const m = Math.floor((diff % 3_600_000) / 60_000)
    const s = Math.floor((diff % 60_000) / 1000)
    const pad = (v: number) => String(v).padStart(2, '0')
    return {
      d: pad(d),
      h: pad(h),
      m: pad(m),
      s: pad(s),
      ended: diff === 0,
    }
  }, [now, target])
}

function Countdown() {
  const c = useCountdown(EVENT_DATE)
  return (
    <section id="countdown" className="relative overflow-hidden py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-glow blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="divider-dot">Contagem regressiva</span>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl font-light leading-tight text-ivory sm:text-5xl md:text-6xl">
            21 de Julho <span className="italic gold-text">·</span> 14h
          </h2>
          <p className="mt-4 font-serif text-lg italic text-ivory/55">
            O momento em que a nova era começa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-6"
        >
          <CountdownBox value={c.d} label="Dias" />
          <span className="hidden font-display text-4xl text-gold sm:inline">·</span>
          <CountdownBox value={c.h} label="Horas" />
          <span className="hidden font-display text-4xl text-gold sm:inline">·</span>
          <CountdownBox value={c.m} label="Minutos" />
          <span className="hidden font-display text-4xl text-gold sm:inline">·</span>
          <CountdownBox value={c.s} label="Segundos" />
        </motion.div>

        <div className="mt-16">
          <AudioWave count={64} className="mx-auto max-w-2xl" />
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Registration ─────────────────────────── */

function maskPhone(v: string) {
  const d = v.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}
function maskCPF(v: string) {
  const d = v.replace(/\D/g, '').slice(0, 11)
  return d
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}

function Registration() {
  const [form, setForm] = useState({ nome: '', cpf: '', tel: '', email: '' })
  const [sent, setSent] = useState(false)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="inscricao" className="relative overflow-hidden py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-radial-glow blur-3xl" />
      </div>
      <Particles density={40} />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <span className="divider-dot">Inscrição</span>
          <h2 className="mt-6 font-serif text-4xl font-light leading-tight text-ivory sm:text-5xl md:text-6xl">
            Garanta sua <span className="italic gold-text">inscrição.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-serif text-lg text-ivory/65">
            Preencha seus dados abaixo para participar da seleção. Nossa equipe analisará todas as
            inscrições e os 300 selecionados serão avisados por e-mail e WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mt-14"
        >
          <div className="absolute -inset-1 bg-gradient-to-b from-gold/40 via-gold/5 to-gold/30 opacity-70 blur-lg" />
          <div className="glass-strong relative p-8 shadow-gold-lg sm:p-12">
            <span className="absolute left-6 top-0 -translate-y-1/2 bg-obsidian px-3 font-display text-[10px] uppercase tracking-widest2 text-gold-light">
              Formulário Oficial
            </span>
            <span className="absolute right-6 top-0 -translate-y-1/2 bg-obsidian px-3 font-display text-[10px] uppercase tracking-widest2 text-gold-light">
              MMXXVI · N.º 001
            </span>

            {sent ? (
              <div className="flex flex-col items-center gap-5 py-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-obsidian/60 shadow-gold">
                  <Check size={26} className="text-gold-light" />
                </div>
                <h3 className="font-serif text-3xl leading-tight text-ivory sm:text-4xl">
                  Sua inscrição foi <span className="italic gold-text">recebida com sucesso.</span>
                </h3>
                <p className="max-w-lg font-serif text-lg text-ivory/70">
                  Caso seja selecionado, entraremos em contato através do e-mail e WhatsApp
                  informados. Fique atento à sua caixa de entrada.
                </p>
                <div className="mt-4 flex items-center gap-3 text-gold-light">
                  <Sparkles size={18} />
                  <span className="font-display text-xs uppercase tracking-widest2">
                    Boa sorte na seleção
                  </span>
                  <Sparkles size={18} />
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-5">
                <div className="grid gap-2">
                  <label className="font-display text-[10px] uppercase tracking-widest2 text-gold-light/80">
                    Nome Completo
                  </label>
                  <input
                    className="field"
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    placeholder="Como aparece no seu documento"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <label className="font-display text-[10px] uppercase tracking-widest2 text-gold-light/80">
                      CPF
                    </label>
                    <input
                      className="field"
                      required
                      inputMode="numeric"
                      value={form.cpf}
                      onChange={(e) => setForm({ ...form, cpf: maskCPF(e.target.value) })}
                      placeholder="000.000.000-00"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="font-display text-[10px] uppercase tracking-widest2 text-gold-light/80">
                      Telefone
                    </label>
                    <input
                      className="field"
                      required
                      inputMode="tel"
                      value={form.tel}
                      onChange={(e) => setForm({ ...form, tel: maskPhone(e.target.value) })}
                      placeholder="(21) 90000-0000"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label className="font-display text-[10px] uppercase tracking-widest2 text-gold-light/80">
                    E-mail
                  </label>
                  <input
                    className="field"
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="seunome@dominio.com"
                  />
                </div>
                <button type="submit" className="btn-gold mt-4 w-full">
                  Quero Participar da Seleção <ArrowRight size={16} />
                </button>
                <p className="mt-2 text-center text-[11px] italic text-ivory/45">
                  Ao enviar, você concorda em receber contato via e-mail e WhatsApp caso seja
                  selecionado.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Footer ─────────────────────────── */

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-night pt-24 pb-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <Monogram size={72} />
          <span className="font-display text-xl tracking-widest2 text-ivory sm:text-2xl">
            BELO<span className="text-gold">'</span>S <span className="gold-text">MUSIC</span>
          </span>
          <Ornament className="h-4 w-64" />
          <p className="max-w-lg font-serif italic text-ivory/60">
            Selo Musical · Editora · Marketing · Gestão Artística · Produção
          </p>
          <div className="flex items-center gap-6 pt-2">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center border border-gold/25 text-gold-light transition hover:border-gold hover:bg-gold/10"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center border border-gold/25 text-gold-light transition hover:border-gold hover:bg-gold/10"
              aria-label="YouTube"
            >
              <Youtube size={16} />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center border border-gold/25 text-gold-light transition hover:border-gold hover:bg-gold/10"
              aria-label="Contato"
            >
              <Send size={16} />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-8 text-[11px] uppercase tracking-widest2 text-ivory/45 sm:flex-row">
          <span>Penha · Rio de Janeiro</span>
          <span>© MMXXVI · Todos os direitos reservados</span>
          <span className="flex items-center gap-2">
            <span className="h-px w-6 bg-gold/50" />
            Selo · Editora · Estúdio
          </span>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────────────────── App ─────────────────────────── */

export default function App() {
  return (
    <div className="relative min-h-screen bg-obsidian text-ivory">
      <Header />
      <Hero />
      <Marquee />
      <Services />
      <EventHighlights />
      <Why />
      <Exclusivity />
      <Countdown />
      <Registration />
      <Footer />
    </div>
  )
}
