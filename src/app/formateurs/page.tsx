import type { Metadata } from 'next'
import { FormateurGrid } from '@/components/formateurs/FormateurGrid'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Formateurs',
  description: '8 experts terrain en Product Management, Data & IA. Ils pratiquent ce qu\'ils enseignent.',
}

export default function FormateursPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-ws-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-widest uppercase opacity-40 mb-4 text-wi-rose">Nos formateurs</p>
            <h1 className="font-black tracking-tight mb-6" style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)' }}>
              Apprenez des<br /><span className="text-wi-green">meilleurs</span>
            </h1>
            <p className="opacity-65 max-w-2xl leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              8 experts terrain qui ont accompagné les plus grandes entreprises tech françaises. Ils pratiquent ce qu&apos;ils enseignent.
            </p>
          </AnimatedSection>
          <div className="mt-8 p-4 border border-white/15 max-w-xl">
            <p className="text-sm opacity-45">
              ✏️ Biographies complètes en cours de rédaction — revenez bientôt.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FormateurGrid />
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="font-black tracking-tight mb-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                Devenez formateur<br /><span className="text-wi-rose">WiAcademy</span>
              </h2>
              <p className="opacity-55 max-w-lg text-sm">
                Vous êtes expert terrain et souhaitez transmettre votre expérience ? Rejoignez nos rangs.
              </p>
            </div>
            <a href="mailto:contact@wivoo.fr"
              className="shrink-0 inline-flex items-center gap-2 px-8 py-4 border-2 border-wi-rose text-wi-rose font-bold hover:bg-wi-rose hover:text-white transition-all">
              Nous rejoindre →
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
