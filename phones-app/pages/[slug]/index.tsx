import {Phone} from "components/phones/phone.model";
import {PhoneService} from "service/phone.service";
import {GetServerSidePropsContext, GetStaticPropsContext} from "next";
import {Box, Container, Typography} from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../styles/Home.module.scss";
import {Carousel, CarouselProps} from 'react-responsive-carousel';
import Head from "next/head";

interface PhonePageProps {
  phone: Phone
}

function PhonePage(props: PhonePageProps) {
  const {phone} = props
  const sliderOptions: Partial<CarouselProps> = {
    showIndicators: false,
    showThumbs: true,
    autoPlay: true,
    width: 450,
    dynamicHeight: false,
    showStatus: false,
    useKeyboardArrows: true,
    thumbWidth: 100
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>{phone.name}</title>
        <meta name="title" content={phone.name}/>
        <meta name="description" content={phone.description}/>
      </Head>
      <Container maxWidth="xl" className={styles.phoneDetail}>
        <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}}}>
          <Carousel {...sliderOptions}>
            {phone.imageFileName.map((image, index) => {
              return (
                <div key={index}><img src={image} alt={image}/></div>
              )
            })}
          </Carousel>
          <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography variant="h1">
              {phone.name}
            </Typography>
            <p className="description">
              {phone.description}
            </p>
            <Typography variant="body1"
                        sx={{fontWeight: '600', width: '100%', borderBottom: '1px solid #3c3c3c', mb: 2}}>
              Technical specifications
            </Typography>
            {['manufacturer', 'color', 'processor', 'screen', 'ram'].map(property => {
              return (<Typography variant="body2" key={property}>
                  <span style={{fontWeight: '600', textTransform: "capitalize"}}>{property}: </span>
                  {phone[property as keyof Phone]}
                </Typography>
              )
            })}
            <Box flexGrow={1}/>
            <Typography variant="h3" sx={{textAlign: 'right'}}>{phone.price}€</Typography>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default PhonePage

export const getServerSideProps = async (context: GetServerSidePropsContext): Promise<{ props: PhonePageProps }> => {
  const phoneService = new PhoneService()
  const phone = await phoneService.getPhone(context.params?.slug as string)
  return {
    props: {
      phone: phone.data
    }
  }
}
