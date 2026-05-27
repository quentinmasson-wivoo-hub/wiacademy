import type { Metadata } from 'next'
import { Roadmap } from '@/components/formations/Roadmap'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Formations',
  description: 'Découvrez nos 11 formations en Product Management, Data & IA — parcours certifiés QUALIOPI, financement OPCO possible.',
}

export default function FormationsPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-ws-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-widest uppercase opacity-40 mb-4 text-wi-green">Nos formations</p>
            <h1 className="font-black tracking-tight mb-6" style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)' }}>
              Votre parcours<br /><span className="text-wi-rose">vers l&apos;excellence</span>
            </h1>
            <p className="opacity-65 max-w-2xl leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              11 formations structurées en 4 tracks complémentaires. Choisissez votre niveau, progressez à votre rythme.
            </p>
          </AnimatedSection>
          <div className="mt-10 flex flex-wrap gap-4">
            {[
              { label: '11 formations', note: 'Inter et intra' },
              { label: 'Certifié QUALIOPI', note: 'Financement OPCO' },
              { label: '4,9/5', note: 'Note moyenne' },
              { label: '2 jours', note: 'Format standard' },
            ].map(s => (
              <div key={s.label} className="border border-white/20 px-4 py-3">
                <div className="font-bold text-sm">{s.label}</div>
                <div className="text-xs opacity-45 mt-0.5">{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Roadmap />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ws-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="font-black tracking-tight mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Besoin d&apos;un conseil ?
            </h2>
            <p className="opacity-55 mb-8 max-w-xl mx-auto">
              Nos experts vous aident à choisir la formation adaptée à vos objectifs et à votre budget.
            </p>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-wi-rose text-white font-bold hover:bg-wi-rose/90 transition-colors">
              Prendre un RDV Découverte →
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
