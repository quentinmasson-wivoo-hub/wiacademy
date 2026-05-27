import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function CtaSection() {
  return (
    <section className="py-20 md:py-32 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest uppercase opacity-40 mb-4">Passez à l&apos;action</p>
          <h2 className="font-black tracking-tight mb-6" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
            Prêt à passer au<br />
            <span className="text-wi-rose">niveau supérieur ?</span>
          </h2>
          <p className="opacity-55 text-base md:text-lg mb-10 leading-relaxed max-w-xl">
            Échangez avec notre équipe pour trouver la formation qui correspond à vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://meetings.hubspot.com/marin-jeronimo" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-wi-rose text-white font-bold rounded-xl hover:bg-wi-rose/90 transition-colors">
              Prendre un RDV Découverte
            </a>
            <a href="mailto:contact@wivoo.fr"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[var(--border)] font-bold rounded-xl hover:border-current/40 transition-colors">
              Nous écrire
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
