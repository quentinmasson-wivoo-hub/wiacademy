'use client'

import { useState } from 'react'
import type { Formation } from '@/lib/types'
import {
  QUESTIONS,
  getNextStep,
  getRecommendation,
  type ChatAnswers,
  type ChatStep,
  type ObjectifId,
  type NiveauId,
  type SpecialiteId,
} from '@/lib/data/chatWidget'

const HUBSPOT_URL = 'https://meetings.hubspot.com/marin-jeronimo'

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<ChatStep>('objectif')
  const [answers, setAnswers] = useState<ChatAnswers>({})
  const [recommendation, setRecommendation] = useState<Formation | null>(null)

  function handleReset() {
    setStep('objectif')
    setAnswers({})
    setRecommendation(null)
  }

  function handleAnswer(value: string) {
    if (step === 'result') return

    const newAnswers = { ...answers }
    if (step === 'objectif') newAnswers.objectif = value as ObjectifId
    else if (step === 'niveau') newAnswers.niveau = value as NiveauId
    else if (step === 'specialite') newAnswers.specialite = value as SpecialiteId

    setAnswers(newAnswers)
    const next = getNextStep(step, newAnswers)
    if (next === 'result') setRecommendation(getRecommendation(newAnswers))
    setStep(next)
  }

  const stepOrder: ChatStep[] = answers.objectif === 'autre'
    ? ['objectif', 'specialite', 'result']
    : ['objectif', 'niveau', 'result']
  const currentIndex = stepOrder.indexOf(step)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Panel */}
      <div
        className={`w-80 bg-[var(--card)] border border-[var(--border)] shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#401fbf] text-white">
          <span className="font-semibold text-sm">Trouver ma formation</span>
          <button
            onClick={() => setIsOpen(false)}
            className="opacity-70 hover:opacity-100 transition-opacity text-xl leading-none mt-[-2px]"
            aria-label="Fermer"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-4 flex flex-col gap-4 overflow-y-auto max-h-[70vh]">
          {step !== 'result' ? (
            <>
              {/* Progress bar */}
              <div className="flex gap-1">
                {stepOrder.map((_, i) => (
                  <div
                    key={i}
                    className={`h-0.5 flex-1 transition-colors duration-300 ${
                      i <= currentIndex ? 'bg-[#401fbf]' : 'bg-[var(--border)]'
                    }`}
                  />
                ))}
              </div>

              <p className="text-sm font-medium text-[var(--foreground)]">
                {QUESTIONS[step].question}
              </p>

              <div className="flex flex-col gap-2">
                {QUESTIONS[step].options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleAnswer(opt.id)}
                    className="w-full text-left px-3 py-2.5 border border-[var(--border)] text-sm hover:border-[#401fbf] hover:bg-[#401fbf]/5 transition-colors"
                  >
                    <span className="font-medium">{opt.label}</span>
                    {opt.sublabel && (
                      <span className="ml-2 text-xs opacity-50">{opt.sublabel}</span>
                    )}
                  </button>
                ))}
              </div>
            </>
          ) : recommendation ? (
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#401fbf]">
                Notre recommandation
              </p>

              <div className="border border-[var(--border)] p-3 flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-base text-[var(--foreground)] leading-tight">
                    {recommendation.title}
                  </h3>
                  <span className="text-xs font-medium px-2 py-0.5 bg-[#401fbf]/10 text-[#401fbf] whitespace-nowrap shrink-0">
                    {recommendation.levelLabel}
                  </span>
                </div>

                <p className="text-xs text-[var(--foreground)] opacity-70 leading-relaxed">
                  {recommendation.description}
                </p>

                <div className="flex gap-2 text-xs opacity-60">
                  <span>{recommendation.duration}</span>
                  <span>·</span>
                  <span>{recommendation.price}</span>
                </div>

                <div className="flex flex-wrap gap-1 mt-1">
                  {recommendation.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-1.5 py-0.5 border border-[var(--border)] text-[var(--foreground)] opacity-70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={HUBSPOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-[#401fbf] text-white text-sm font-semibold hover:bg-[#3518a8] transition-colors"
              >
                Prendre rendez-vous →
              </a>

              <button
                onClick={handleReset}
                className="text-xs text-center opacity-50 hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                Recommencer
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {/* Floating button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="flex items-center gap-2 px-5 py-3 bg-[#401fbf] text-white font-semibold text-sm shadow-lg hover:bg-[#3518a8] transition-colors"
        aria-label="Trouver ma formation"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="miter"
          aria-hidden="true"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span>Trouver ma formation</span>
      </button>
    </div>
  )
}
