import {Phone} from "./phone.model";
import {Box, Button, Card, CardContent, CardMedia, Fab, Typography} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {useState} from "react";

interface PhoneProps {
  phone: Phone
}

export default function PhoneComponent(props: PhoneProps) {
  const {
    phone
  } = props
  const truncatedName = phone.name.substring(0, 50) + (phone.name.length > 100 ? '...' : '')
  const [hovered, setHovered] = useState(false)

  return (
    <Card
      variant="outlined"
      sx={{boxShadow: '0 0 2px rgba(0,0,0,0.1)', borderRadius: '8px'}}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
      <CardContent sx={{position: 'relative'}}>
        <CardMedia
          component="img"
          height="250"
          sx={{objectFit: "contain"}}
          image={phone.imageFileName[0]}
          alt={phone.imageFileName[0]}/>
        <Box sx={{
          height: "150px",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <Typography variant="h2" sx={{fontSize: '1.5rem', marginTop: '24px'}}>{truncatedName}</Typography>
          <Box sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            padding: '24px 0 0'
          }}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
              <Typography variant="h4">{phone.price}€</Typography>
              <Button variant="outlined" href={phone.slug}>View Details</Button>
            </Box>
          </Box>
        </Box>
        <Fab
          href={'/create?phone='+phone.slug}
          size="small"
          className={hovered ? 'opacity-10' : 'opacity-0'}
          sx={{position: 'absolute', right: '8px', top: '8px', transition: 'opacity 0.4s ease'}}>
          <EditIcon/>
        </Fab>
      </CardContent>
    </Card>
  )
}
