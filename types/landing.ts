export interface HeroProps {
  headline: string
  highlightWord: string
  rotatingWords: string[]
  subheadline: string
  ctaPrimary: string
  usersCount: string
}

export interface Feature {
  icon: string
  title: string
  description: string
  category: string
}

export interface FeatureCard {
  title: string
  description: string
  ctaLabel: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface FooterSection {
  title: string
  links: { label: string; href: string }[]
}

export interface AnimationConfig {
  name: string
  type: 'fade' | 'slide' | 'scale' | 'rotate' | 'underline' | 'combined'
  duration: number
  easing: string
  delay?: number
  properties: Record<string, { from: any; to: any }>
}
