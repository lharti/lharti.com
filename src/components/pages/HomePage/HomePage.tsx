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
                <CopyEmailBtn className="rounded-3xl" email="hey@lharti.com" />

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

            <div className="mt-20">
                <h3 className="text-base font-medium italic text-slate-500">
                    {'Check out my latest public project '}
                    <a
                        href="https://github.com/lharti/jsonthing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          not-italic text-blue-500 underline

                          hover:text-blue-700
                        `}
                    >
                        {'Jsonthing'}
                    </a>
                    {'.'}
                </h3>
            </div>
            <Toaster richColors position="top-center" />
        </div>
    )
}
