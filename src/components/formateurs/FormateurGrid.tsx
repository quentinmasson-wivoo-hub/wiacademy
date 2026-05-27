import { formateurs } from '@/lib/data/formateurs'
import { FormateurCard } from './FormateurCard'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function FormateurGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {formateurs.map((f, i) => (
        <AnimatedSection key={f.id} delay={i * 0.07}>
          <FormateurCard f={f} />
        </AnimatedSection>
      ))}
    </div>
  )
}
