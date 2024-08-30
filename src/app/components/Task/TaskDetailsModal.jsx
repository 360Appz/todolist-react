'use client'

//Third Party Imports
import { Icon } from '@iconify/react/dist/iconify.js'

import { TextField, InputAdornment } from '@mui/material'
import { Button, Form, Modal, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

//Dtae Time Picker
import DateTimePicker from 'react-datetime-picker'
import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'

//Task Statuses Imports
import { statuses } from '../../assets/json/TaskStatusOptions.json'

//Internal Impports
import { useEffect, useState } from 'react'
import { editTask, fetchTasks, fetchTasksByID } from '@/app/store/tasks/taskSlice'
import { useDispatch } from 'react-redux'

const schema = yup
  .object({
    title: yup.string().required('Task name is required'),
    description: yup.string().required('Task description is required'),
    dueDate: yup.date().required('Due date is required').nullable(),
    status: yup.string().required('Task status is required')
  })
  .required()

export default function TaskDetailsModal({ show, handleClose , taskDetailsFull}) {
  const dispatch = useDispatch();
  const [dateTime, setDateTime] = useState(new Date())


  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  // console.log("Task ID", task.taskId)
  useEffect(() => {
      dispatch(fetchTasksByID(taskDetailsFull.taskId))
      .unwrap()
      .then((taskDetails) => {

        // Set the form fields with the fetched task details
        setValue('title', taskDetails.title);
        setValue('description', taskDetails.description);
        setDateTime(new Date(taskDetails.dueDate)); // Update the date state
        setValue('dueDate', new Date(taskDetails.dueDate)); // Set the due date
        setValue('status', taskDetails.status);
      })
      .catch((error) => {
        console.error('Failed to fetch task details:', error);
      });
    }, []);

  // Manually set the value & format of dueDate in the form (DD-MM-YY , Time)
  const handleDateChange = date => {
    setDateTime(date)

    setValue("dueDate", date, { shouldValidate: true }); 
  }

  const onSubmit = async (task) => {
    
    try 
    {
      await dispatch(editTask({id:taskDetailsFull.taskId, taskData:task})).unwrap();
      handleClose(); // Close the modal upon successful submission
      dispatch(fetchTasks({ page: 0, size: 10 })); // Refresh the task list
    } 
    catch (error) {
      console.log("Edit Task Error", error)
      // setLoginError(error);
      // setShowToast(true);
    }
  }

  // console.log(watch('example')) // watch input value by passing the name of it

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Task name */}
            <Form.Group className='mb-3' controlId='formTaskName'>
              <Form.Label>Task Name</Form.Label>
              <Form.Control type='text' placeholder='Task Name' {...register('title')} />
              {errors.title && <p className='text-danger'>{errors.title.message}</p>}
            </Form.Group>

            {/* Description */}
            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Task Description</Form.Label>
              <Form.Control as='textarea' rows={3} placeholder='Task Description...' {...register('description')} />
              {errors.description && <p className='text-danger'>{errors.description.message}</p>}
            </Form.Group>

            {/* Due Date */}
            <Form.Group className='mt-2 mb-3' controlId='formTaskDateTime'>
              <Form.Label>Due Date</Form.Label>
              <DateTimePicker
                onChange={handleDateChange}
                value={dateTime}
                className='form-control'
                style={{ border: 'none' }}
                name='dueDate'
              />
              {errors.dueDate && <p className='text-danger'>{errors.dueDate.message}</p>}
            </Form.Group>

            {/* Task Status */}
            <Form.Group controlId='formTaskStatus'>
              <Form.Label>Task Status</Form.Label>
              <Form.Select aria-label='Task Status' {...register('status')}>
                <option value=''>Select Task Status</option>
                {Object.entries(statuses).map(([id, label]) => (
                  <option key={id} value={label}>
                    {label}
                  </option>
                ))}
              </Form.Select>
              {errors.status && <p className='text-danger'>{errors.status.message}</p>}
            </Form.Group>
            <Modal.Footer style={{ border: 'none' }}>
              <Button variant='primary' onClick={handleClose}>
                Cancel
              </Button>
              <Button variant='success' type='submit'>
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}
