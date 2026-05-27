import { Hero } from '@/components/home/Hero'
import { Stats } from '@/components/home/Stats'
import { ClientsBar } from '@/components/home/ClientsBar'
import { DualEntry } from '@/components/home/DualEntry'
import { FormationsPreview } from '@/components/home/FormationsPreview'
import { FormateursPreview } from '@/components/home/FormateursPreview'
import { CtaSection } from '@/components/home/CtaSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ClientsBar />
      <DualEntry />
      <FormationsPreview />
      <FormateursPreview />
      <CtaSection />
    </>
  )
}
