import {Container} from "@mui/material";
import styles from "../styles/Home.module.scss";
import Head from "next/head";
import PhoneForm from "components/phones/PhoneForm";
import {Phone} from "components/phones/phone.model";
import {GetServerSidePropsContext} from "next";
import {PhoneService} from "service/phone.service";
import {useState} from "react";
import ConfirmDialog from "components/dialog/ConfirmDialog";
import {useRouter} from "next/router";

interface CreatePageProps {
  phone?: Phone | undefined
}

export default function CreatePage(props: CreatePageProps) {
  const {phone} = props
  const [dialog, setDialog] = useState(false);
  const router = useRouter()

  async function onSubmit(data: Phone) {
    const phoneService = new PhoneService(false)
    if (await phoneService.createOrUpdate(data)) {
      setDialog(true)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Phone</title>
      </Head>
      <Container maxWidth="md" className={styles.phoneCreate}>
        <PhoneForm onSubmit={onSubmit} phone={phone}/>
      </Container>
      <ConfirmDialog
        state={dialog}
        messages={{
          title: 'Phone saved',
          message: 'do you want to continue editing or go back to listing?',
          ok: 'continue',
          cancel: 'go back'
        }}
        onOk={() => setDialog(false)}
        onCancel={() => router.replace('/')}/>

    </div>
  )
}

export const getServerSideProps = async (context: GetServerSidePropsContext): Promise<{ props: CreatePageProps }> => {
  const phoneService = new PhoneService()
  let phoneResult;
  try {
    phoneResult = await phoneService.getPhone(context.query.phone as string)
  } catch (e) {
  }

  return {
    props: {
      ...phoneResult ? {phone: phoneResult.data} : {}
    }
  }
}
