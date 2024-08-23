// Ensure this is a client component
'use client'

//Third Party Imports
import { Icon } from '@iconify/react/dist/iconify.js'
import { Button, Card, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

//Internal Impports
import Link from 'next/link'
import RegisterButton from './RegisterButton'

const schema = yup
  .object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
    email: yup.string().required('Email is required'),
  })
  .required()

export default function RegisterCard() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    console.log(data)
  }

  // console.log(watch('example')) // watch input value by passing the name of it

  return (
    <>
      <Card style={{width:"36em", height:'36em', borderRadius:"20px"}}>
        <div className='mt-5'>
        <Card.Body>
          <Card.Title className='d-flex justify-content-center'>Register</Card.Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Username*/}
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Username</Form.Label>
              <Form.Control type='text' placeholder='Enter Username' />
              <div style={{minHeight:'10px'}}>
              {errors.username && <p className='text-danger'>{errors.username.message}</p>}
              </div>
            </Form.Group>

            {/* Password*/}
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
              <div style={{minHeight:'10px'}}>
              {errors.password && <p className='text-danger'>{errors.password.message}</p>}
              </div>
            </Form.Group>

            {/* Email*/}
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        {errors.email && <p className='text-danger'>{errors.email.message}</p>}
      </Form.Group>

            <RegisterButton type="submit"/>
          </Form>
        </Card.Body>
        </div>
        <div className='d-flex justify-content-center'>
          <span>Already have an accouunt, login 
          <Link href="/login">
          <span> <strong> here </strong></span>  
          </Link>
          </span>
        </div>
      </Card>
    </>
  )
}
