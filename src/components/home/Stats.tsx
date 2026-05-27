import { AnimatedSection } from '@/components/ui/AnimatedSection'

const stats = [
  { value: '150', label: 'Wivers formés' },
  { value: '12M€', label: "Chiffre d'affaires" },
  { value: '80+', label: 'Clients accompagnés' },
  { value: '110+', label: 'Coachings / mois' },
]

export function Stats() {
  return (
    <section className="py-16 md:py-24 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.08} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-black tracking-tight text-wi-rose">{s.value}</div>
              <div className="mt-1 text-sm opacity-50 font-medium">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
