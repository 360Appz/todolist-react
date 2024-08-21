

//Third Party Imports


//Internal Impports
import RegisterCard from '@/app/components/Security/register/RegisterCard';
import SecurityLayout from "@/app/components/layouts/login-security/SecurityLayout";

export default function Register() {
    return (
        <>
          <SecurityLayout>
            <RegisterCard/>
          </SecurityLayout>
            
        </>
    );
}
