'use client'
import Link from 'next/link'
import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[var(--background)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-black text-lg tracking-tight hover:text-wi-rose transition-colors">
          WiAcademy
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/formations" className="text-sm font-medium opacity-70 hover:opacity-100 hover:text-wi-rose transition-all">Formations</Link>
          <Link href="/formateurs" className="text-sm font-medium opacity-70 hover:opacity-100 hover:text-wi-rose transition-all">Formateurs</Link>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a href="https://meetings.hubspot.com/marin-jeronimo" target="_blank" rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-4 py-2 bg-wi-rose text-white text-sm font-semibold hover:bg-wi-rose/90 transition-colors">
            Prendre RDV
          </a>
          <button onClick={() => setOpen(!open)} aria-label="Menu"
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5">
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--background)] border-t border-[var(--border)] px-4 py-6 flex flex-col gap-4">
          <Link href="/formations" onClick={() => setOpen(false)} className="text-lg font-bold">Formations</Link>
          <Link href="/formateurs" onClick={() => setOpen(false)} className="text-lg font-bold">Formateurs</Link>
          <a href="https://meetings.hubspot.com/marin-jeronimo" target="_blank" rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center px-6 py-3 bg-wi-rose text-white font-semibold">
            Prendre RDV
          </a>
        </div>
      )}
    </header>
  )
}
