import axios, {AxiosInstance} from "axios";
import {Phone, PhonesResponse, PhoneQueryOptions, UpdatePhoneResult} from "components/phones/phone.model";

export class PhoneService {

  api: AxiosInstance

  constructor(server = true) {
    const baseURL = server ? process.env.API_URL : `${process.env.LOCAL_URL}api/`
    this.api = axios.create({baseURL});
    this.api.interceptors.request.use(config => {
      const method = config.method?.toUpperCase()
      const params = config.params ? ('?' + new URLSearchParams(config.params).toString()) : ''
      console.info(`[${method}] ` + config.baseURL + config.url + params )
      return config
    })
  }

  getPhones(params?: PhoneQueryOptions) {
    return this.api.get<PhonesResponse>('phone', {params})
  }

  async getPhone(slug: string) {
    return this.api.get<Phone>(`phone/${slug}`)
  }

  async createOrUpdate(data: Phone) {
    if (data.slug) {
      const insertResult = await this.update(data)
      if (insertResult.data.affected > 0) {
        return data
      }
    } else {
      const createResult = await this.create(data)
      if (createResult.data.id) {
        return createResult.data
      }
    }
    return false
  }

  create(data: Phone) {
    return this.api.post<Phone>('phone', data)
  }

  update(data: Phone) {
    return this.api.put<UpdatePhoneResult>(`phone/${data.slug}`, data)
  }
}
