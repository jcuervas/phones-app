import axios, {AxiosInstance} from "axios";
import {Phone, PhonesResponse, PhoneQueryOptions} from "components/phones/phone.model";

export class PhoneService {

  api: AxiosInstance

  constructor() {
    this.api = axios.create({baseURL: process.env.API_URL + 'phone'});
    this.api.interceptors.request.use(config => {
      const params = config.params ? ('?' + new URLSearchParams(config.params).toString()) : ''
      console.info('[REQUEST] ' + config.baseURL + config.url + params )
      return config
    })
  }

  getPhones(params?: PhoneQueryOptions) {
    return this.api.get<PhonesResponse>('/', {params})
  }

  async getPhone(slug: string) {
    return this.api.get<Phone>(`/${slug}`)
  }
}
