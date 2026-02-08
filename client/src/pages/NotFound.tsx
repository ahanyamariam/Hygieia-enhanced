import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { ROUTES } from '@/utils/constants'

export const NotFound: React.FC = () => {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
            <h1 className="text-9xl font-bold text-primary-500">404</h1>
            <h2 className="mt-4 text-2xl font-bold text-gray-900">Page Not Found</h2>
            <p className="mt-2 text-gray-600">
                The page you are looking for does not exist or has been moved.
            </p>
            <div className="mt-8">
                <Link to={ROUTES.HOME}>
                    <Button size="lg">Go Back Home</Button>
                </Link>
            </div>
        </div>
    )
}
