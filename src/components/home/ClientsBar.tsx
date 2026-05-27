import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const clients = [
  { name: 'Decathlon', logo: 'https://cdn.prod.website-files.com/63a1c85a8f75943e7797587b/63a33a8fd9091c1f1038ae52_decathlon.png' },
  { name: 'Mirakl', logo: 'https://cdn.prod.website-files.com/63a1c85a8f75943e7797587b/63a33aa3d9091ca3be38af8d_mirakl.png' },
  { name: 'leboncoin', logo: 'https://cdn.prod.website-files.com/63a1c85a8f75943e7797587b/63a33ac3d9091cbfcd38b09f_leboncoin.png' },
  { name: 'Société Générale', logo: 'https://cdn.prod.website-files.com/63a1c85a8f75943e7797587b/63a33b70dcb75c3fb80d54f5_Socie%CC%81te%CC%81Ge%CC%81ne%CC%81rale.png' },
  { name: 'Galeries Lafayette', logo: 'https://cdn.prod.website-files.com/63a1c85a8f75943e7797587b/641d87886bc2e38676ae969e_Galeries-Lafayette-logo.png' },
]

export function ClientsBar() {
  return (
    <section className="py-12 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-xs font-semibold tracking-widest uppercase opacity-30 text-center mb-8">
            + de 100 entreprises nous font confiance
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {clients.map(c => (
              <div key={c.name} className="opacity-40 hover:opacity-70 transition-opacity grayscale hover:grayscale-0">
                <Image src={c.logo} alt={c.name} width={120} height={40} className="h-8 w-auto object-contain" />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
