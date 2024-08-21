'use client'

//Third Party Imports
import { Button, Form, Modal, Row } from 'react-bootstrap'



//Internal Impports
import { useState } from 'react'


export default function TaskDeleteModal({ show, handleClose }) {

  return (
    <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this task</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
