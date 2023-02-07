import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import RegistrationForm from '../registrationform/registrationform';



export default function RegistrationModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Zarejestruj sie</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <RegistrationForm/>
      </Modal>
    </div>
  );
}