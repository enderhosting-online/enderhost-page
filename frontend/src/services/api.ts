import {
  createDirectus,
  type DirectusClient,
  type RestClient,
  readItems,
  readSingleton,
  rest,
} from "@directus/sdk";
import { BACKEND_URL } from "@/config/variables";
import type {
  ExtendDescriptionFeature,
  GlobalData,
  HeroFeature,
  HostingFeature,
  Location,
  PaymentMethod,
  Pricing,
  PrivacyPolicy,
  QuestionSection,
  VersionsFeature,
} from "@/types/directus";

class ApiService {
  // biome-ignore lint/suspicious/noExplicitAny: Because of DirectusClient type definition
  private client!: DirectusClient<any> & RestClient<any>;

  constructor(apiUrl: string) {
    this.client = createDirectus(apiUrl).with(
      rest({
        onRequest: (options) => ({
          ...options,
          next: { revalidate: 60 * 60 * 24 },
        }),
      }),
    );
  }

  public async getGlobalData(): Promise<GlobalData> {
    const data = await this.client.request(readSingleton("global_data"));

    return data as GlobalData;
  }

  public async getHeroFeatures(): Promise<HeroFeature[]> {
    const data = await this.client.request(readItems("hero_features"));

    return data as HeroFeature[];
  }

  public async getHostingFeatures(): Promise<HostingFeature[]> {
    const data = await this.client.request(
      readItems("hosting_features", {
        fields: ["*", "icon.name"],
      }),
    );

    return data as HostingFeature[];
  }

  public async getVersionsFeatures(): Promise<VersionsFeature[]> {
    const data = await this.client.request(
      readItems("versions_features", {
        fields: ["*", "icon.name"],
      }),
    );

    return data as VersionsFeature[];
  }

  public async getExtendDescriptionFeatures(): Promise<
    ExtendDescriptionFeature[]
  > {
    const data = await this.client.request(
      readItems("extend_description_features"),
    );

    return data as ExtendDescriptionFeature[];
  }

  public async getPricings(): Promise<Pricing[]> {
    const data = await this.client.request(
      readItems("pricing", {
        fields: [
          "*",
          "features.pricing_features_id.feature",
          "features.pricing_features_id.icon.name",
        ],
      }),
    );

    return data as Pricing[];
  }

  public async getQuestions(): Promise<QuestionSection[]> {
    const data = await this.client.request(
      readItems("questions_section", {
        fields: ["*", "questions.*"],
      }),
    );

    return data as QuestionSection[];
  }

  public async getPrivacyPolicy(): Promise<PrivacyPolicy> {
    const data = await this.client.request(readSingleton("privacy_policy"));

    return data as PrivacyPolicy;
  }

  public async getTermsOfService(): Promise<PrivacyPolicy> {
    const data = await this.client.request(readSingleton("terms_of_service"));

    return data as PrivacyPolicy;
  }

  public async getLocations(): Promise<Location[]> {
    const data = await this.client.request(readItems("locations"));

    return data as Location[];
  }

  public async getPaymentMethods(): Promise<PaymentMethod[]> {
    const data = await this.client.request(readItems("method_payment"));

    return data as PaymentMethod[];
  }
}

export const apiService = new ApiService(BACKEND_URL);
