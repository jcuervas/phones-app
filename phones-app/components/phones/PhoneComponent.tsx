import {Phone} from "./phone.model";
import {Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";

interface PhoneProps {
  phone: Phone
}

export default function phoneComponent(props: PhoneProps) {
  const {
    phone
  } = props
  const truncatedName = phone.name.substring(0, 50) + (phone.name.length > 100 ? '...' : '')

  const semiBold = {fontWeight: '600'}
  return (
    <Card variant="outlined">
      <CardContent>
        <CardMedia
          component="img"
          height="340"
          sx={{objectFit: "contain"}}
          image={phone.imageFileName[0]}
          alt={phone.imageFileName[0]}/>
        <Box sx={{height: "220px", display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Typography variant="h5" sx={{marginTop: '24px'}}>{truncatedName}</Typography>
          <Box sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            padding: '24px 0'
          }}>
            <Box>
              <Typography variant="body1">
                <span style={semiBold}>Procesador:</span> {phone.processor}
              </Typography>
              <Typography variant="body1">
                <span style={semiBold}>Pantalla:</span> {phone.screen}
              </Typography>
              <Typography variant="body1">
                <span style={semiBold}>Memoria RAM:</span> {phone.ram}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4">{phone.price}€</Typography>
              <Button variant="outlined" href={phone.slug}>View Details</Button>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
