import {Button, FormControl, TextField, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {Phone} from "components/phones/phone.model";
import styles from '../../styles/Home.module.scss'

interface PhoneFormProps {
  phone?: Phone
  onSubmit: (data: Phone) => void
}

export default function PhoneForm(props: PhoneFormProps) {
  const [phone, setPhone] = useState<Phone>(props.phone as Phone)
  const {register, handleSubmit, watch, formState: {errors}} = useForm({
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
              required: true,
              onChange: ev => setPhone({...phone, name: ev.target.value})
            })}
            label="Name"
            size="small"/>

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
        </FormControl>
        <FormControl sx={{mb: 4}}>
          <TextField
            error={!!errors.manufacturer}
            value={phone && phone.manufacturer}
            {...register('manufacturer', { required: true,
              onChange: ev => setPhone({...phone, manufacturer: ev.target.value})})}
            label="Manufacturer"
            size="small"/>
        </FormControl>
        <FormControl sx={{mb: 4}}>
          <TextField
            error={!!errors.screen}
            value={phone && phone.screen}
            {...register('screen', { required: true,
              onChange: ev => setPhone({...phone, screen: ev.target.value})})}
            label="screen"
            size="small"/>
        </FormControl>
        <FormControl sx={{mb: 4}}>
          <TextField
            error={!!errors.ram}
            value={phone && phone.ram}
            {...register('ram', { required: true,
              onChange: ev => setPhone({...phone, ram: ev.target.value})})}
            label="RAM"
            size="small"/>
        </FormControl>
        <FormControl sx={{mb: 4}}>
          <TextField
            error={!!errors.processor}
            value={phone && phone.processor}
            {...register('processor', { required: true,
              onChange: ev => setPhone({...phone, processor: ev.target.value})})}
            label="processor"
            size="small"/>
        </FormControl>
        <FormControl sx={{mb: 4}}>
          <TextField
            error={!!errors.color}
            value={phone && phone.color}
            {...register('color', { required: true,
              onChange: ev => setPhone({...phone, color: ev.target.value})})}
            label="Color"
            size="small"/>
        </FormControl>
        <Button variant="contained" type="submit" color="primary">Save Phone</Button>
      </form>
    </>
  )
}
