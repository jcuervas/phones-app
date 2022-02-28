import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface AlertDialogProps {
  state: boolean
  messages: {title: string, message?: string, ok?: string, cancel?: string},
  onOk?: () => void
  onCancel: () => void
}

export default function ConfirmDialog(props: AlertDialogProps) {

  return (
    <div>
      <Dialog
        open={props.state}
        onClose={props.onCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {props.messages.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.messages.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {props.onOk && <Button onClick={props.onOk}>{props.messages.ok}</Button>}
          <Button onClick={props.onCancel} autoFocus>
            {props.messages.cancel}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
