import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-black tracking-tight">WiAcademy</Link>
            <p className="mt-3 text-sm opacity-60 max-w-xs leading-relaxed">
              Formation en Product Management, Data & IA. Pragmatisme, impact, épanouissement.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-xs px-2 py-1 border border-[var(--border)] font-semibold tracking-wider">QUALIOPI</span>
              <span className="text-xs opacity-40">Certification qualité</span>
            </div>
            <p className="mt-3 text-xs opacity-40">
              Wivoo × <span className="text-ws-violet font-bold opacity-100">Wavestone</span>
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase opacity-40 mb-4">Formations</h4>
            <ul className="space-y-2.5">
              {['Parcours PM', 'Data for PM', 'IA for PM', 'Complémentaires'].map(l => (
                <li key={l}><Link href="/formations" className="text-sm opacity-60 hover:opacity-100 hover:text-wi-rose transition-all">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase opacity-40 mb-4">WiAcademy</h4>
            <ul className="space-y-2.5">
              <li><Link href="/formateurs" className="text-sm opacity-60 hover:opacity-100 hover:text-wi-rose transition-all">Nos formateurs</Link></li>
              <li><a href="mailto:contact@wivoo.fr" className="text-sm opacity-60 hover:opacity-100 hover:text-wi-rose transition-all">Contact</a></li>
              <li><Link href="/legal" className="text-sm opacity-60 hover:opacity-100 transition-all">Mentions légales</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-xs opacity-40">© 2025 WiAcademy — Wivoo SAS. Tous droits réservés.</p>
          <p className="text-xs opacity-40">Paris, France</p>
        </div>
      </div>
    </footer>
  )
}
