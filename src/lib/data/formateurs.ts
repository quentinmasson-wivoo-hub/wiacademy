import type { Formateur } from '../types'

export const formateurs: Formateur[] = [
  {
    id: 'jean-denouvilliez', slug: 'jean-denouvilliez', name: 'Jean Denouvilliez',
    domains: ['product', 'agile'], domainLabels: ['Product Management', 'Agile & Produit'],
    formations: ['pm-1', 'product-marketing', 'culture-agile'],
    formationTitles: ['PM Niveau 1', 'Product Marketing Manager', 'Culture Agile & Produit'],
    initials: 'JD', color: '#f9759e',
  },
  {
    id: 'thomas-saouma', slug: 'thomas-saouma', name: 'Thomas Saouma',
    domains: ['product'], domainLabels: ['Product Management'],
    formations: ['pm-1'], formationTitles: ['PM Niveau 1'],
    initials: 'TS', color: '#401fbf',
  },
  {
    id: 'remi-duflos', slug: 'remi-duflos', name: 'Rémi Duflos',
    domains: ['product', 'data'], domainLabels: ['Product Management', 'Data & Analytics'],
    formations: ['pm-2', 'data-pm-1'], formationTitles: ['PM Advanced Niveau 2', 'Data for PM 1'],
    initials: 'RD', color: '#08f06a',
  },
  {
    id: 'steevens-nathan', slug: 'steevens-nathan', name: 'Steevens Nathan',
    domains: ['product'], domainLabels: ['Product Management'],
    formations: ['pm-3'], formationTitles: ['Senior PM Niveau 3'],
    initials: 'SN', color: '#451dc7',
  },
  {
    id: 'benjamin-joly', slug: 'benjamin-joly', name: 'Benjamin Joly',
    domains: ['product'], domainLabels: ['Leadership Produit'],
    formations: ['pm-4'], formationTitles: ['Product Leader Niveau 4'],
    initials: 'BJ', color: '#250f6b',
  },
  {
    id: 'gautier-borot', slug: 'gautier-borot', name: 'Gautier Borot',
    domains: ['ia'], domainLabels: ['IA & Produit'],
    formations: ['ia-acculturation'], formationTitles: ['IA for PM — Acculturation'],
    initials: 'GB', color: '#7c5cf6',
  },
  {
    id: 'sarah-pergeline', slug: 'sarah-pergeline', name: 'Sarah Pergeline',
    domains: ['ia'], domainLabels: ['IA & Produit'],
    formations: ['ia-advanced'], formationTitles: ['IA for PM — Advanced'],
    initials: 'SP', color: '#f9759e',
  },
  {
    id: 'lea-nin', slug: 'lea-nin', name: 'Léa Nin',
    domains: ['design'], domainLabels: ['Design & UX'],
    formations: ['product-discovery'], formationTitles: ['Product Discovery & Design'],
    initials: 'LN', color: '#08f06a',
  },
]
