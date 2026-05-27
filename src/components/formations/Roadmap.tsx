'use client'
import { useState } from 'react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { formations, tracks } from '@/lib/data/formations'
import type { TrackId } from '@/lib/types'

const trackIds: TrackId[] = ['pm', 'data', 'ia', 'complementaire']

export function Roadmap() {
  const [active, setActive] = useState<TrackId | 'all'>('all')

  return (
    <div>
      {/* Filters */}
      <AnimatedSection className="flex flex-wrap gap-2 mb-14">
        {[{ id: 'all', label: 'Tous les parcours', color: '' }, ...trackIds.map(id => ({ id, label: tracks[id].label, color: tracks[id].color }))].map(t => (
          <button key={t.id} onClick={() => setActive(t.id as TrackId | 'all')}
            className={`px-4 py-2 text-sm font-bold transition-all border ${
              active === t.id
                ? t.id === 'all' ? 'bg-[var(--foreground)] text-[var(--background)] border-transparent' : 'text-white border-transparent'
                : 'border-[var(--border)] opacity-60 hover:opacity-100 bg-transparent'
            }`}
            style={active === t.id && t.id !== 'all' ? { background: t.color } : {}}>
            {t.label.replace('Formations ', '')}
          </button>
        ))}
      </AnimatedSection>

      {/* Tracks */}
      <div className="space-y-20">
        {trackIds.map(trackId => {
          if (active !== 'all' && active !== trackId) return null
          const track = tracks[trackId]
          const color = track.color
          const tf = formations.filter(f => f.track === trackId)

          return (
            <AnimatedSection key={trackId}>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full" style={{ background: color }} />
                <h3 className="text-xl md:text-2xl font-black">{track.label}</h3>
                <div className="flex-1 h-px bg-[var(--border)]" />
                <span className="text-xs opacity-40">{tf.length} formation{tf.length > 1 ? 's' : ''}</span>
              </div>
              <p className="text-sm opacity-50 mb-8 max-w-lg">{track.description}</p>

              <div className="relative">
                {tf.length > 1 && (
                  <div className="absolute top-9 left-9 right-9 h-px hidden md:block opacity-20" style={{ background: color }} />
                )}
                <div className={`grid gap-4 ${
                  tf.length === 1 ? 'grid-cols-1 max-w-xs' :
                  tf.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-2xl' :
                  tf.length === 3 ? 'grid-cols-1 sm:grid-cols-3' :
                  'grid-cols-1 sm:grid-cols-2 md:grid-cols-4'
                }`}>
                  {tf.map((f, idx) => (
                    <div key={f.id} className="group">
                      {tf.length > 1 && (
                        <div className="w-8 h-8 flex items-center justify-center font-black text-sm text-white mb-4 relative z-10"
                          style={{ background: color }}>{idx + 1}</div>
                      )}
                      <div className="border border-[var(--border)] p-5 hover:border-current/30 hover:-translate-y-0.5 transition-all bg-[var(--background)]">
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-xs font-bold px-2 py-1 text-white" style={{ background: color }}>{f.levelLabel}</span>
                          {f.rating && <span className="text-xs opacity-40">⭐ {f.rating.toFixed(1)}</span>}
                        </div>
                        <h4 className="font-black text-base mb-2">{f.title}</h4>
                        <p className="text-xs opacity-45 mb-4 leading-relaxed line-clamp-2">{f.description}</p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {f.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-xs px-2 py-0.5 border border-[var(--border)] opacity-60">{tag}</span>
                          ))}
                        </div>
                        <div className="flex items-end justify-between">
                          <div>
                            <div className="font-black text-sm" style={{ color }}>{f.price} HT</div>
                            <div className="text-xs opacity-35 mt-0.5">{f.duration} · {f.priceType === 'intra' ? 'Intra' : 'Inter'}</div>
                          </div>
                          {f.trainers[0] && (
                            <div className="text-xs opacity-35 text-right max-w-[110px] truncate">{f.trainers[0]}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )
        })}
      </div>
    </div>
  )
}
