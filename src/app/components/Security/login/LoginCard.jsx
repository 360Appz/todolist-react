// Ensure this is a client component
'use client'

//Third Party Imports
import { Icon } from '@iconify/react/dist/iconify.js'
import { Button, Card, Form, Row , Toast, ToastContainer} from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

//Internal Impports
import { useState } from 'react'
import LoginButton from './LoginButton'
import Link from 'next/link'
import LoginErrorToast from './LoginErrorToast'

//Login
import { login } from '@/app/store/login/loginSlice.js';
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'



const schema = yup
  .object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  })
  .required()

export default function LoginCard() {

  const [loginError, setLoginError] = useState('');
  const [showToast, setShowToast] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();  
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {

    try {
      await dispatch(login(data)).unwrap();
      router.push('/task');
    } 
    catch (error) {
      console.log("Login card error", error)
      setLoginError(error);
      setShowToast(true);
    }
  }

  // console.log(watch('example')) // watch input value by passing the name of it

  return (
    <>
     <LoginErrorToast show={showToast} message={loginError} onClose={() => setShowToast(false)} />

      <Card style={{width:"36em", height:'30em', borderRadius:"20px"}}>
        <div className='mt-5'>
        <Card.Body>
          <Card.Title className='d-flex justify-content-center'>Login</Card.Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Username*/}
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Username</Form.Label>
              <Form.Control type='text' placeholder='Enter Username' {...register('username')} />
              <div style={{minHeight:'10px'}}>
              {errors.username && <p className='text-danger'>{errors.username.message}</p>}
              </div>
            </Form.Group>

            {/* Password*/}
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' {...register('password')} />
              <div style={{minHeight:'10px'}}>
              {errors.password && <p className='text-danger'>{errors.password.message}</p>}
              </div>
            </Form.Group>

            <LoginButton type="submit"/>
          </Form>
        </Card.Body>
        </div>
        <div className='d-flex justify-content-center'>
          <span>Need an account , register 
          <Link href='/register'>
            <span> <strong style={{cursor:"pointer"}}> here </strong></span>
            </Link>
            </span>
        </div>
      </Card>
    </>
  )
}
