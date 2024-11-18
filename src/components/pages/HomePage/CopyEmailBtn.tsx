'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { toast } from 'sonner'

interface CopyMyEmailBtnProps {
    email: string
    className?: string
}
export const CopyEmailBtn: React.FC<CopyMyEmailBtnProps> = ({
    email,
    className,
}) => {
    return (
        <Button
            className={className}
            onClick={async () => {
                await navigator.clipboard.writeText(email)

                toast.success(`Email copied to clipboard: ${email}`)
            }}
        >
            {'Copy my Email'}
        </Button>
    )
}
