import { Hero } from '@/components/home/Hero'
import { Stats } from '@/components/home/Stats'
import { DualEntry } from '@/components/home/DualEntry'
import { FormationsPreview } from '@/components/home/FormationsPreview'
import { FormateursPreview } from '@/components/home/FormateursPreview'
import { CtaSection } from '@/components/home/CtaSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <DualEntry />
      <FormationsPreview />
      <FormateursPreview />
      <CtaSection />
    </>
  )
}
