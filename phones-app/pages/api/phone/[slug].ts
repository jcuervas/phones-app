import {PhoneService} from "service/phone.service";
import {Phone} from "components/phones/phone.model";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (['PUT'].includes(req.method as string)) {
      const phoneService = new PhoneService()
      const result = await phoneService.update(req.body as unknown as Phone)
      res.status(200).send(result)
    }
  } catch (e) {
    console.log({e})
    res.status(500).json(e)
  }
}
