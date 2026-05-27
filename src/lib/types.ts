export type Domain = 'product' | 'data' | 'ia' | 'design' | 'agile'
export type Level = 'initiation' | 'debutant' | 'intermediaire' | 'confirme' | 'expert'
export type TrackId = 'pm' | 'data' | 'ia' | 'complementaire'

export interface Formation {
  id: string
  slug: string
  title: string
  level: Level
  levelLabel: string
  domain: Domain
  domainLabel: string
  trainers: string[]
  duration: string
  price: string
  priceType: 'inter' | 'intra'
  rating?: number
  description: string
  tags: string[]
  track: TrackId
}

export interface Formateur {
  id: string
  slug: string
  name: string
  domains: Domain[]
  domainLabels: string[]
  formations: string[]
  formationTitles: string[]
  bio?: string
  photo?: string
  companies?: string[]
  initials: string
  color: string
}

export interface Track {
  id: TrackId
  label: string
  description: string
  color: string
}
