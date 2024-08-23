'use client';

import { Toast, ToastContainer } from 'react-bootstrap';

export default function LoginErrorToast({ show, message, onClose }) {

  return (
    <ToastContainer position="top-end" className="p-3">
    <Toast onClose={onClose} show={show} delay={5000} autohide>
      <Toast.Header style={{ backgroundColor: '#dc3545', color: '#fff' }}>
        <strong className="me-auto">Login Error</strong>
      </Toast.Header>
      <Toast.Body className="bg-dark text-white">{message}</Toast.Body>
    </Toast>
  </ToastContainer>
  );
}
