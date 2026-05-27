import type { Formateur } from '@/lib/types'

export function FormateurCard({ f }: { f: Formateur }) {
  return (
    <div className="border border-[var(--border)] p-6 hover:border-current/30 hover:-translate-y-0.5 transition-all duration-300 bg-[var(--background)] flex flex-col">
      <div className="w-16 h-16 flex items-center justify-center font-black text-xl text-white mb-5" style={{ background: f.color }}>
        {f.initials}
      </div>
      <h3 className="font-black text-lg mb-2">{f.name}</h3>
      <div className="flex flex-wrap gap-1 mb-4">
        {f.domainLabels.map(d => (
          <span key={d} className="text-xs px-2 py-0.5 border border-[var(--border)] opacity-60 font-medium">{d}</span>
        ))}
      </div>
      {!f.bio ? (
        <p className="text-xs opacity-30 italic mb-4 leading-relaxed">Bio en cours de rédaction — expert terrain reconnu.</p>
      ) : (
        <p className="text-sm opacity-60 mb-4 leading-relaxed">{f.bio}</p>
      )}
      <div className="mt-auto pt-4 border-t border-[var(--border)]">
        <p className="text-xs opacity-40 font-semibold uppercase tracking-wider mb-2">Formations</p>
        <ul className="space-y-1">
          {f.formationTitles.map(title => (
            <li key={title} className="flex items-start gap-1.5 text-xs opacity-60">
              <span className="text-wi-rose mt-0.5 shrink-0">›</span> {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
