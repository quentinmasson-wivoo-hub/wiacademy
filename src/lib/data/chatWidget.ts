import { formations } from './formations'
import type { Formation } from '../types'

export type ObjectifId = 'pm' | 'data' | 'ia' | 'autre'
export type NiveauId = 'debutant' | 'intermediaire' | 'confirme' | 'expert'
export type SpecialiteId = 'agile' | 'design' | 'marketing'

export interface ChatAnswers {
  objectif?: ObjectifId
  niveau?: NiveauId
  specialite?: SpecialiteId
}

export type QuestionStep = 'objectif' | 'niveau' | 'specialite'
export type ChatStep = QuestionStep | 'result'

interface ChatOption {
  id: string
  label: string
  sublabel?: string
}

export const QUESTIONS: Record<QuestionStep, { question: string; options: ChatOption[] }> = {
  objectif: {
    question: 'Quel est votre objectif principal ?',
    options: [
      { id: 'pm', label: 'Maîtriser le Product Management' },
      { id: 'data', label: 'Exploiter la data' },
      { id: 'ia', label: 'Comprendre & utiliser l\'IA' },
      { id: 'autre', label: 'Autre compétence produit' },
    ],
  },
  niveau: {
    question: 'Quel est votre niveau d\'expérience ?',
    options: [
      { id: 'debutant', label: 'Débutant', sublabel: '< 1 an' },
      { id: 'intermediaire', label: 'Intermédiaire', sublabel: '1–3 ans' },
      { id: 'confirme', label: 'Confirmé', sublabel: '3–5 ans' },
      { id: 'expert', label: 'Expert', sublabel: '5+ ans' },
    ],
  },
  specialite: {
    question: 'Quelle compétence vous intéresse ?',
    options: [
      { id: 'agile', label: 'Culture Agile & Organisation' },
      { id: 'design', label: 'Design & UX' },
      { id: 'marketing', label: 'Marketing Produit' },
    ],
  },
}

export function getNextStep(current: QuestionStep, answers: ChatAnswers): ChatStep {
  if (current === 'objectif') {
    return answers.objectif === 'autre' ? 'specialite' : 'niveau'
  }
  return 'result'
}

export function getRecommendation(answers: ChatAnswers): Formation | null {
  const { objectif, niveau, specialite } = answers
  const find = (id: string) => formations.find(f => f.id === id) ?? null

  if (objectif === 'pm') {
    if (niveau === 'debutant') return find('pm-1')
    if (niveau === 'intermediaire') return find('pm-2')
    if (niveau === 'confirme') return find('pm-3')
    if (niveau === 'expert') return find('pm-4')
  }

  if (objectif === 'data') {
    if (niveau === 'debutant' || niveau === 'intermediaire') return find('data-pm-1')
    return find('data-pm-2')
  }

  if (objectif === 'ia') {
    if (niveau === 'debutant' || niveau === 'intermediaire') return find('ia-acculturation')
    return find('ia-advanced')
  }

  if (objectif === 'autre') {
    if (specialite === 'agile') return find('culture-agile')
    if (specialite === 'design') return find('product-discovery')
    if (specialite === 'marketing') return find('product-marketing')
  }

  return null
}
