// Ensure this is a client component
'use client'

//Third Party Imports
import { Container, Row } from "react-bootstrap";


//Internal Impports

//Background
import Image1 from '../../../../../public/images/pages/login-bg.webp'
import Image from "next/image";


export default function SecurityLayout({children}) {
    return (
        <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
          
            <Image 
                src={Image1} 
                alt="Background"
                layout="fill"
                objectFit="cover"
                priority={true} 
            />
            <Container
                fluid
                className="d-flex justify-content-center align-items-center"
                style={{ height:'100vh', position: 'absolute', zIndex: 1 }}
            >
            {children}
            </Container>
        
            
        </div>
    );
}
