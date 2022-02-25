import {alpha, styled} from "@mui/material/styles";
import {InputBase, Select} from "@mui/material";

export const StyledInputBar = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
  },
  margin: 'auto',
  flexGrow: 3,
}));

export const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  position: 'relative',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: theme.palette.primary.dark
  },
}));

export const StyledSelect = styled(Select)(({theme}) => ({
  color: 'inherit',
  position: 'relative',
  width: '100%',
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 3),
    transition: theme.transitions.create('width'),
    width: '100%',
    color: theme.palette.primary.dark,
  },

}));
