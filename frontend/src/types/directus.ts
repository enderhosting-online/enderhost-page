export type SingleItem = Record<string, unknown>;

export enum IconName {
  Spigot = "Spigot",
  Forge = "Forge",
  Automation = "Automation",
  BoltFilled = "BoltFilled",
  Bulb = "Bulb",
  Map = "Map",
  Shield = "Shield",
  Table = "Table",
  TableFilled = "TableFilled",
  UserCog = "UserCog",
  Users = "Users",
  World = "World",
  HardDrive = "HardDrive",
  HardDriveDownload = "HardDriveDownload",
  MemoryStick = "MemoryStick",
  Smartphone = "Smartphone",
  UsersRound = "UsersRound",
  AppWindow = "AppWindow",
  Signal = "Signal",
  PackageCheck = "PackageCheck",
  MonitorCheck = "MonitorCheck",
  History = "History",
}

export interface Icon {
  name: IconName;
}

export interface GlobalData {
  title: string;
  short_title: string;
  description: string;
  logo: string;
}

export interface PrivacyPolicy {
  content: string;
}

export interface HeroFeature {
  label: string;
}

export interface HostingFeature {
  status: string;
  title: string;
  content: string;
  icon: Icon;
}

export interface VersionsFeature {
  title: string;
  content: string;
  icon: Icon;
}

export interface ExtendDescriptionFeature {
  title: string;
  content: string;
  image: string;
}

export interface PricingFeature {
  feature: string;
  icon: Icon;
}

export interface Pricing {
  name: string;
  description: string;
  price: number;
  block: string;
  features: {
    pricing_features_id: PricingFeature;
  }[];
}

export interface Location {
  name: string;
  mc_icon: string;
  latency: number;
  qualification: number;
  description: string;
  block: string;
}

export interface PaymentMethod {
  name: string;
  image: string;
  description: string;
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
