//Third Party Imports


//Internal Impports
import LoginCard from '@/app/components/Security/login/LoginCard'
import SecurityLayout from '@/app/components/layouts/login-security/SecurityLayout'


export default function Login() {
  return (
    <>
      <SecurityLayout>
        <LoginCard />
      </SecurityLayout>
    </>
  )
}
