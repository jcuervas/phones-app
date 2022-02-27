import {NextApiRequest, NextApiResponse} from "next";
import {PhoneService} from "service/phone.service";
import {Phone} from "components/phones/phone.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (['POST'].includes(req.method as string)) {
      const phoneService = new PhoneService()
      const result = await phoneService.create(req.body as unknown as Phone)
      res.status(200).send(result)
    }
  } catch (e) {
    console.log({e})
    res.status(500).json(e)
  }
}
