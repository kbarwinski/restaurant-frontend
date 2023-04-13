import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import LoginForm from '../loginform/loginform';

export default function LoginModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Zaloguj</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <LoginForm />
      </Modal>
    </div>
  );
}
