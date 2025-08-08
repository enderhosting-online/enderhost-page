import { BACKEND_URL } from '@/config/variables';
import {
  ExtendDescriptionFeature,
  GlobalData, HeroFeature,
  HostingFeature, Pricing,
  QuestionSection, VersionsFeature,
} from '@/types/directus';
import {
  createDirectus, DirectusClient, readItems, readSingleton, rest, RestClient,
} from '@directus/sdk';

class ApiService {
  private client!: DirectusClient<any> & RestClient<any>;

  constructor(private apiUrl: string) {
    this.client = createDirectus(BACKEND_URL).with(rest());
  }

  public async getGlobalData(): Promise<GlobalData> {
    const data = await this.client.request(readSingleton('global_data'));

    return data as GlobalData;
  }

  public async getHeroFeatures(): Promise<HeroFeature[]> {
    const data = await this.client.request(readItems('hero_features'));

    return data as HeroFeature[];
  }

  public async getHostingFeatures(): Promise<HostingFeature[]> {
    const data = await this.client.request(readItems('hosting_features'));

    return data as HostingFeature[];
  }

  public async getVersionsFeatures(): Promise<VersionsFeature[]> {
    const data = await this.client.request(readItems('versions_features'));

    return data as VersionsFeature[];
  }

  public async getExtendDescriptionFeatures(): Promise<ExtendDescriptionFeature[]> {
    const data = await this.client.request(readItems('extend_description_features'));

    return data as ExtendDescriptionFeature[];
  }

  public async getPricings(): Promise<Pricing[]> {
    const data = await this.client.request(readItems('pricing', {
      fields: ['*', 'features.*'],
    }));

    return data as Pricing[];
  }

  public async getQuestions(): Promise<QuestionSection[]> {
    const data = await this.client.request(readItems('questions_section', {
      fields: ['*', 'questions.*'],
    }));

    return data as QuestionSection[];
  }
}

export const apiService = new ApiService(BACKEND_URL);
