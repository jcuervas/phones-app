import {Grid} from "@mui/material";
import PhoneComponent from "components/phones/PhoneComponent";
import {Phone} from "components/phones/phone.model";

interface PhonesGridProps {
  phones: Phone[]
}

export default function PhonesGrid(props: PhonesGridProps) {
  const {phones} = props
  return (
    <Grid container spacing={2}>
      {phones.map(phone => {
        return (
          <Grid item xs={12} md={6} lg={4} key={phone.id}>
            <PhoneComponent phone={phone}/>
          </Grid>
        )
      })}
    </Grid>
  )
}
