import React from 'react'

export const ProfileSummary = ({}) => {
    return (
        <h3
            className={`
              mt-4 max-w-md text-base font-normal text-slate-600

              sm:text-lg
            `}
        >
            {
                'I develop web apps and focus on making deployments seamless and efficient. '
            }

            <span className="text-slate-800">{'Frontend'}</span>
            {', '}

            <span className="text-slate-800">{'backend'}</span>
            {', and '}

            <span className="text-slate-800">{'cloud infrastructure'}</span>
            {' are all in my toolkit.'}
        </h3>
    )
}
