import {Button, FormControl, TextField, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {Phone} from "components/phones/phone.model";
import styles from '../../styles/Home.module.scss'
import {theme} from "../../styles/theme/theme";

interface PhoneFormProps {
  phone?: Phone
  onSubmit: (data: Phone) => void
}

export default function PhoneForm(props: PhoneFormProps) {
  const [phone, setPhone] = useState<Phone>(props.phone as Phone)
  const {register, handleSubmit, formState: {errors}} = useForm({
    reValidateMode: "onBlur",
    shouldFocusError: true
  });
  const [images, setImages] = useState([''])

  function onSubmit() {
    props.onSubmit(phone)
  }

  return (
    <>
      <Typography variant="h1" sx={{fontSize: "2em", textAlign: {xs: 'left', md: 'center'}, mb: 4}}>
        Want to add a new Phone? just type some data
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}

        className={styles.phoneForm}>
        <FormControl sx={{mb: 4}} >
          <TextField
            error={!!errors.name}
            value={phone && phone.name}
            {...register('name', {
              required: {value: true, message: 'required field'},
              onChange: ev => setPhone({...phone, name: ev.target.value})
            })}
            label="Name"
            size="small"/>
          {errors.name && <Typography variant="body2" sx={{color: theme.palette.error.main }}>Please enter a value</Typography>}

        </FormControl>
        <FormControl sx={{mb: 4}}>
          <TextField
            error={!!errors.description}
            value={phone && phone.description}
            {...register('description', { required: true,
              onChange: ev => setPhone({...phone, description: ev.target.value})})}
            multiline={true}
            label="Description"
            size="small"/>
          {errors.description && <Typography variant="body2" sx={{color: theme.palette.error.main }}>Please enter a value</Typography>}
        </FormControl>
        <FormControl sx={{mb: 4}}>
          <TextField
            error={!!errors.manufacturer}
            value={phone && phone.manufacturer}
            {...register('manufacturer', { required: true,
              onChange: ev => setPhone({...phone, manufacturer: ev.target.value})})}
            label="Manufacturer"
            size="small"/>
          {errors.manufacturer && <Typography variant="body2" sx={{color: theme.palette.error.main }}>Please enter a value</Typography>}
        </FormControl>
        <FormControl sx={{mb: 4}}>
          <TextField
            error={!!errors.screen}
            value={phone && phone.screen}
            {...register('screen', { required: true,
              onChange: ev => setPhone({...phone, screen: ev.target.value})})}
            label="screen"
            size="small"/>
          {errors.screen && <Typography variant="body2" sx={{color: theme.palette.error.main }}>Please enter a value</Typography>}
        </FormControl>
        <FormControl sx={{mb: 4}}>
          <TextField
            error={!!errors.ram}
            value={phone && phone.ram}
            {...register('ram', { required: true,
              onChange: ev => setPhone({...phone, ram: ev.target.value})})}
            label="RAM"
            size="small"/>
          {errors.ram && <Typography variant="body2" sx={{color: theme.palette.error.main }}>Please enter a value</Typography>}
        </FormControl>
        <FormControl sx={{mb: 4}}>
          <TextField
            error={!!errors.processor}
            value={phone && phone.processor}
            {...register('processor', { required: true,
              onChange: ev => setPhone({...phone, processor: ev.target.value})})}
            label="processor"
            size="small"/>
          {errors.processor && <Typography variant="body2" sx={{color: theme.palette.error.main }}>Please enter a value</Typography>}
        </FormControl>
        <FormControl sx={{mb: 4}}>
          <TextField
            error={!!errors.color}
            value={phone && phone.color}
            {...register('color', { required: true,
              onChange: ev => setPhone({...phone, color: ev.target.value})})}
            label="Color"
            size="small"/>
          {errors.color && <Typography variant="body2" sx={{color: theme.palette.error.main }}>Please enter a value</Typography>}
        </FormControl>
        <FormControl sx={{mb: 4}}>
          <TextField
            error={!!errors.price}
            type="number"
            value={phone && phone.price}
            {...register('price', {
              required: true,
              onChange: ev => setPhone({...phone, price: ev.target.value}),
              pattern: {value: /[0-9]*/, message: "please, enter a positive numeric value"}
            }
            )}
            label="Price"
            size="small"/>
          {errors.price && <Typography variant="body2" sx={{color: theme.palette.error.main }}>please, enter a positive numeric value</Typography>}

        </FormControl>
        <Button variant="contained" type="submit" color="primary">Save Phone</Button>
      </form>
    </>
  )
}
