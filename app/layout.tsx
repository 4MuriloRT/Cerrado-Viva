import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Cerrado Viva',
  description: 'Produtos capilares com ingredientes do cerrado',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-bege min-h-screen text-gray-800">
        {children}
      </body>
    </html>
  )
}