import {AppBar, Link, Toolbar, Typography} from "@mui/material";
import styles from '../../styles/Home.module.scss'
import {theme} from "../../styles/theme/theme";

export default function HeaderComponent() {
  return (
    <AppBar position="static"  sx={{backgroundColor: theme.palette.primary.dark}}>
      <Toolbar className={styles.toolbar}>
        <Link href="/" sx={{position: 'relative', display: 'flex', textDecoration: 'none'}}>
          <img
            src="img/logo.png"
            className={styles.logo}
            alt="logo"/>
          <Typography variant="h4" sx={{color: 'white', fontFamily: 'Shizuru'}}>Phones store</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
