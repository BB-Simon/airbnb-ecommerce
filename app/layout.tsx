import Navbar from '@/components/Navbar';
import './globals.css';

export default function RootLayout({children}: {children: React.ReactNode}){
  return (
    <html>
      <body>
        <Navbar />
        <main className="max-w-3xl mx-auto py-10">
          {children}
        </main>
      </body>
    </html>
  )
}