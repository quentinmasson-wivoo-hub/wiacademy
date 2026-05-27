import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { formateurs } from '@/lib/data/formateurs'

export function FormateursPreview() {
  const preview = formateurs.slice(0, 4)
  return (
    <section className="py-20 md:py-32 bg-ws-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase opacity-40 mb-4 text-wi-green">Nos formateurs</p>
            <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Des experts qui <span className="text-wi-rose">pratiquent</span><br />
              ce qu&apos;ils enseignent
            </h2>
          </div>
          <Link href="/formateurs" className="text-sm font-bold opacity-50 hover:opacity-100 hover:text-wi-green transition-all self-start md:self-auto">
            Voir tous les formateurs →
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {preview.map((f, i) => (
            <AnimatedSection key={f.id} delay={i * 0.1}>
              <div className="border border-white/10 hover:border-white/30 transition-all p-6 flex flex-col min-h-[180px]">
                <div className="w-12 h-12 flex items-center justify-center font-black text-base text-white mb-4"
                  style={{ background: f.color }}>{f.initials}</div>
                <h3 className="font-bold text-sm mb-auto">{f.name}</h3>
                <div className="flex flex-wrap gap-1 mt-3">
                  {f.domainLabels.map(d => (
                    <span key={d} className="text-xs px-2 py-0.5 bg-white/10 rounded-full">{d}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
