

// Style Imports
import "../app/globals.scss";


//Internal Imports

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
