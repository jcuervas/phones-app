import styles from '../styles/Home.module.scss'
import {PhoneService} from "service/phone.service";
import {Phone, PhoneQueryOptions} from "components/phones/phone.model";
import {Box, Container, Fab, Typography} from "@mui/material";
import Head from 'next/head'
import {useRouter} from "next/router";
import {GetServerSidePropsContext} from "next";
import {useSnackbar} from "notistack";
import PhonesGrid from "components/phones/PhonesGrid";
import FooterComponent from "components/shared/FooterComponent";
import PhoneFilters from "components/phones/PhoneFilters";
import BreadcrumbsComponent, {Breadcrumb} from "components/shared/BreadcrumbsComponent";
import AddIcon from '@mui/icons-material/Add';

interface AppProps {
  phones: Phone[],
  count: number,
  breadcrumbs: Breadcrumb[]
}

function HomePage(props: AppProps) {
  const {phones, count, breadcrumbs} = props;
  const snackbar = useSnackbar();
  const router = useRouter()

  function getPhones(params: PhoneQueryOptions) {
    const {page, pageSize, query} = params
    router.push({
      href: '/',
      query: {
        ...pageSize ? {pageSize} : {},
        ...page ? {page} : {},
        ...query ? {query} : {}
      }
    }).catch(err => snackbar.enqueueSnackbar(err.message))
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Phones App</title>
      </Head>
      <Container maxWidth="xl" className={styles.main}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
          <BreadcrumbsComponent list={breadcrumbs}/>
          <Fab href="/create" color="primary" >
            <AddIcon/>
          </Fab>
        </Box>

        <Typography variant="h1" className={styles.title}>
          This is your awesome phone store, but don't try to buy anything!
        </Typography>

        <Box sx={{
          display: 'flex',
          flexDirection: {xs: 'column', md: 'row'},
          justifyContent: 'space-between',
          alignItems: {xs: 'start', md: 'center'},
          width: '100%',
          padding: '24px 0'
        }}>
          <PhoneFilters onFiltersChanged={getPhones} totalPhones={count}/>
        </Box>
        <PhonesGrid phones={phones}/>
      </Container>
      <FooterComponent/>
    </div>
  )
}

export default HomePage

export const getServerSideProps = async (context: GetServerSidePropsContext): Promise<{ props: AppProps }> => {
  const phoneService = new PhoneService()
  const {page, pageSize, query} = context.query
  const phonesResponse = await phoneService.getPhones({
    ...pageSize ? {pageSize: pageSize as string} : {},
    ...page ? {page: page as string} : {},
    ...query ? {query: query as string} : {}
  })

  return {
    props: {
      phones: phonesResponse.data[0],
      count: phonesResponse.data[1],
      breadcrumbs: query ? [{label: query as string}] : []
    }
  }
}
