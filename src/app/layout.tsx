import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export const metadata: Metadata = {
    title: 'Adil EL HARTI - Full-Stack & DevOps',

    description:
        'Full-stack and DevOps engineer specializing in frontend, backend, and cloud infrastructure.',

    robots: 'index, follow',
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
            <body
                className={`
                  ${inter.variable}

                  font-sans antialiased
                `}
            >
                {children}
            </body>
        </html>
    )
}

export default RootLayout
