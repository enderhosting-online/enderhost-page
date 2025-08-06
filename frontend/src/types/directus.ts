export type SingleItem = Record<string, any>;

export interface GlobalData {
  title: string;
  short_title: string;
  description: string;
  logo: string;
}

export interface HeroFeature {
  label: string;
}

export interface HostingFeature {
  status: string;
  title: string;
  content: string;
  icon: string;
}

export interface VersionsFeature {
  title: string;
  content: string;
  icon: string;
}

export interface ExtendDescriptionFeature {
  title: string;
  content: string;
  image: string;
}

export interface PricingFeature {
  feature: string;
  icon: string;
}

export interface Pricing {
  name: string;
  description: string;
  price: number;
  block: string;
  features: PricingFeature[];
}

export interface Question {
  title: string;
  answer: string;
  video?: string;
  section: string;
}

export interface QuestionSection {
  title: string;
  questions: Question[];
  status: string;
}
