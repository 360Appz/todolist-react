'use client';

import { Toast, ToastContainer } from 'react-bootstrap';

export default function SearchErrorToast({ show, message, onClose }) {
  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast onClose={onClose} show={show} delay={5000} autohide>
        <Toast.Header>
          <strong className="me-auto text-danger">Search Error</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
