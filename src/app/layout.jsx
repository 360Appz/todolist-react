// Style Imports
import "@/app/styles/globals.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

//Internal Imports
// import MainLayout from '@/pages/task'
import Login from '@/app/login/page'
import { Providers } from '@/app/store/Providers'




// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "To Do List",
  description: "Emjoy this app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* className={inter.className} */}
  
      <body style={{ margin: '0' }} >
      <Providers>{children}</Providers>
        </body>
    </html>
  );
}
