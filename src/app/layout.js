import { Inter } from "next/font/google";


//Internal Imports
// import MainLayout from '@/pages/task'
import Login from '@/app/login/page'

// Style Imports
import "../../src/app/styles/globals.scss";
import 'bootstrap/dist/css/bootstrap.css'



// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "To Do List",
  description: "Emjoy this app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* className={inter.className} */}
      <body style={{ margin: '0' }} >{children}</body>
    </html>
  );
}
