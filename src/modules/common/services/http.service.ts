import axios from "axios";
import { STORAGE_KEYS } from "../consts/app-keys.const";

type IConfig = {
  url: string;
  data?: any;
  headers?: any;
};

export class HttpService {
  baseUrl: string | undefined;

  fetchingService: any;

  apiVersion: string;

  constructor(
    baseUrl: string | undefined,
    fetchingService: any = axios,
    apiVersion: string = "api"
  ) {
    this.baseUrl = baseUrl;
    this.fetchingService = axios;
    this.apiVersion = apiVersion;
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  private setTokenHeader() {
    return {
      Authorization: localStorage.getItem(STORAGE_KEYS.TOKEN),
    };
  }

  private getConfigsHeaders(config: IConfig) {
    const { url, data, ...otherConfigs } = config;
    return otherConfigs;
  }

  get<T>(config: IConfig, withAuth = true): Promise<T> {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.setTokenHeader(),
      };
    }

    return this.fetchingService.get(
      this.getFullApiUrl(config.url),
      this.getConfigsHeaders(config)
    );
  }

  put<T>(config: IConfig, withAuth = true): Promise<T> {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.setTokenHeader(),
      };
    }
    return this.fetchingService.put(
      this.getFullApiUrl(config.url),
      config.data,
      this.getConfigsHeaders(config)
    );
  }

  post<T>(config: IConfig, withAuth = true): Promise<T> {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.setTokenHeader(),
      };
    }
    return this.fetchingService.post(
      this.getFullApiUrl(config.url),
      config.data,
      this.getConfigsHeaders(config)
    );
  }

  delete<T>(config: IConfig, withAuth = true): Promise<T> {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.setTokenHeader(),
      };
    }
    return this.fetchingService.delete(
      this.getFullApiUrl(config.url),
      this.getConfigsHeaders(config)
    );
  }
}
