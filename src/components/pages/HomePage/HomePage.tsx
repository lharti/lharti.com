import { buttonVariants } from '@/components/ui/button'
import { IconBrandLinkedin } from '@tabler/icons-react'
import React from 'react'
import { Toaster } from 'sonner'
import { CopyEmailBtn } from './CopyEmailBtn'
import { FullName } from './FullName'
import { JobTitle } from './JobTitle'
import { ProfileSummary } from './ProfileSummary'

export const HomePage: React.FC = ({}) => {
    return (
        <div
            className={`
              mx-auto mb-20 mt-36 max-w-screen-sm px-6

              md:mt-52

              sm:px-20
            `}
        >
            <FullName />

            <JobTitle />

            <ProfileSummary />

            <div className="mt-8 flex items-center space-x-2">
                <CopyEmailBtn
                    className="rounded-3xl text-base"
                    email="hey@lharti.com"
                />

                <a
                    href="https://www.linkedin.com/in/adil-elharti/"
                    className={buttonVariants({ variant: 'link' })}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconBrandLinkedin />
                    {'Linkedin'}
                </a>
            </div>

            <Toaster richColors position="top-center" />
        </div>
    )
}
