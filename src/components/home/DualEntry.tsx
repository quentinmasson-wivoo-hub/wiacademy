import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function DualEntry() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-xs font-semibold tracking-widest uppercase opacity-40 mb-4">Par où commencer ?</p>
          <h2 className="font-black tracking-tight mb-16" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Deux façons d&apos;apprendre,<br />
            <span className="text-wi-rose">un seul objectif</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedSection delay={0.1} direction="left">
            <div className="group p-8 md:p-10 border border-[var(--border)] hover:border-wi-rose/50 transition-all duration-300 hover:bg-wi-rose/5 h-full">
              <div className="text-3xl mb-5">👤</div>
              <h3 className="text-2xl md:text-3xl font-black mb-3">Je me forme</h3>
              <p className="opacity-60 leading-relaxed mb-6 text-sm">
                PM, Product Lead, Designer, Data Scientist — développez vos compétences avec des experts qui pratiquent ce qu&apos;ils enseignent.
              </p>
              <ul className="space-y-2 mb-8">
                {['Parcours certifiants QUALIOPI', 'Financement OPCO possible', '60–80% ateliers pratiques', 'Communauté de 150+ Wivers'].map(i => (
                  <li key={i} className="flex items-center gap-2 text-sm opacity-60">
                    <span className="text-wi-green font-black">›</span> {i}
                  </li>
                ))}
              </ul>
              <Link href="/formations" className="inline-flex items-center gap-2 font-bold text-wi-rose group-hover:gap-3 transition-all">
                Explorer les parcours <span>→</span>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="right">
            <div className="group p-8 md:p-10 bg-ws-dark text-white hover:bg-ws-violet/90 transition-all duration-300 h-full">
              <div className="text-3xl mb-5">🏢</div>
              <h3 className="text-2xl md:text-3xl font-black mb-3">Je forme mes équipes</h3>
              <p className="opacity-65 leading-relaxed mb-6 text-sm">
                DRH, L&D, Managers — montez en compétences toute votre organisation produit avec des formations intra sur-mesure.
              </p>
              <ul className="space-y-2 mb-8">
                {['Formations intra-entreprise', 'Contenu adapté à votre contexte', 'Coaching équipes produit', 'Déploiement à grande échelle'].map(i => (
                  <li key={i} className="flex items-center gap-2 text-sm opacity-60">
                    <span className="text-wi-green font-black">›</span> {i}
                  </li>
                ))}
              </ul>
              <a href="https://meetings.hubspot.com/marin-jeronimo" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-wi-green group-hover:gap-3 transition-all">
                Demander un devis <span>→</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
