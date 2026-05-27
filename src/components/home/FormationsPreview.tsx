import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const pmTrack = [
  { level: 'N1', title: 'PM Niveau 1', price: '1 750 €', rating: 5.0 },
  { level: 'N2', title: 'PM Advanced', price: '1 950 €', rating: 4.8 },
  { level: 'N3', title: 'Senior PM', price: '1 950 €', rating: 5.0 },
  { level: 'N4', title: 'Product Leader', price: '2 350 €', rating: 4.8 },
]

const otherTracks = [
  { label: 'Data for PM', color: '#08f06a', count: '2 niveaux' },
  { label: 'IA for PM', color: '#7c5cf6', count: '2 niveaux' },
  { label: 'Formations complémentaires', color: '#04f06a', count: '3 formations' },
]

export function FormationsPreview() {
  return (
    <section className="py-20 md:py-32 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase opacity-40 mb-4">Nos parcours</p>
            <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Du PM débutant<br />au <span className="text-wi-rose">Product Leader</span>
            </h2>
          </div>
          <Link href="/formations" className="text-sm font-bold opacity-50 hover:opacity-100 hover:text-wi-rose transition-all self-start md:self-auto">
            Voir tous les parcours →
          </Link>
        </AnimatedSection>

        {/* PM roadmap */}
        <div className="relative">
          <div className="absolute top-7 left-7 right-7 h-px bg-wi-rose/25 hidden md:block" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {pmTrack.map((item, i) => (
              <AnimatedSection key={item.level} delay={i * 0.08}>
                <div className="relative group p-6 border border-[var(--border)] rounded-2xl shadow-md hover:shadow-lg hover:border-wi-rose/50 hover:bg-wi-rose/5 transition-all bg-[var(--background)]">
                  <div className="w-14 h-14 flex items-center justify-center border-2 border-wi-rose text-wi-rose font-black text-lg mb-5 bg-[var(--background)] relative z-10">
                    {item.level}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <div className="text-xs opacity-40 mb-3">⭐ {item.rating.toFixed(1)}/5</div>
                  <div className="text-wi-rose font-black text-sm">{item.price} HT</div>
                  <div className="mt-2 text-xs opacity-30">2 jours · Inter-entreprise</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Other tracks */}
        <AnimatedSection delay={0.3} className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {otherTracks.map(t => (
            <Link key={t.label} href="/formations"
              className="p-4 border border-[var(--border)] rounded-xl shadow-sm hover:shadow-md hover:border-current/30 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: t.color }} />
                <span className="font-semibold text-sm">{t.label}</span>
              </div>
              <span className="text-xs opacity-40 group-hover:opacity-100 group-hover:text-wi-rose transition-all">{t.count} →</span>
            </Link>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
