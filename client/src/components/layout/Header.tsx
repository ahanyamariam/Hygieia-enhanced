import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    Menu,
    X,
    ShoppingCart,
    User,
    Search,
    ChevronDown,
    LogOut,
    Calendar,
    Settings,
    Heart,
} from 'lucide-react'
import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/Button'
import { Avatar } from '@/components/ui/Avatar'

import { useAuthStore } from '@/stores/authStore'
import { useCartStore } from '@/stores/cartStore'
import { useUIStore } from '@/stores/uiStore'
import { ROUTES } from '@/utils/constants'

const navigation = [
    { name: 'Home', href: ROUTES.HOME },
    { name: 'Doctors', href: ROUTES.DOCTORS },
    { name: 'Pharmacy', href: ROUTES.PHARMACY },
    { name: 'Lab Tests', href: ROUTES.LAB_TESTS },
    { name: 'About', href: ROUTES.ABOUT },
]

export const Header: React.FC = () => {
    const navigate = useNavigate()
    const { user, isAuthenticated, logout } = useAuthStore()
    const { items } = useCartStore()
    const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore()
    const [isProfileOpen, setIsProfileOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLogout = async () => {
        await logout()
        setIsProfileOpen(false)
        navigate(ROUTES.HOME)
    }

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-white'
            )}
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between lg:h-20">
                    {/* Logo */}
                    <Link to={ROUTES.HOME} className="flex items-center gap-2" onClick={closeMobileMenu}>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500 text-white">
                            <Heart className="h-6 w-6" />
                        </div>
                        <span className="font-display text-xl font-bold text-gray-900">Hygieia</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-600"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex lg:items-center lg:gap-4">
                        {/* Search */}
                        <Button variant="ghost" size="icon" aria-label="Search">
                            <Search className="h-5 w-5" />
                        </Button>

                        {/* Cart */}
                        <Link to={ROUTES.CART} className="relative">
                            <Button variant="ghost" size="icon" aria-label="Cart">
                                <ShoppingCart className="h-5 w-5" />
                            </Button>
                            {cartItemCount > 0 && (
                                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-500 text-xs font-medium text-white">
                                    {cartItemCount}
                                </span>
                            )}
                        </Link>

                        {/* Auth */}
                        {isAuthenticated && user ? (
                            <div className="relative">
                                <button
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    className="flex items-center gap-2 rounded-xl p-2 transition-colors hover:bg-gray-100"
                                >
                                    <Avatar src={user.avatar} name={user.name} size="sm" />
                                    <span className="text-sm font-medium text-gray-700">{user.name.split(' ')[0]}</span>
                                    <ChevronDown className={cn('h-4 w-4 text-gray-400 transition-transform', isProfileOpen && 'rotate-180')} />
                                </button>

                                {/* Dropdown */}
                                {isProfileOpen && (
                                    <>
                                        <div className="fixed inset-0" onClick={() => setIsProfileOpen(false)} />
                                        <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl bg-white p-2 shadow-lg ring-1 ring-black/5 animate-slide-down">
                                            <div className="border-b border-gray-100 px-3 py-2">
                                                <p className="font-medium text-gray-900">{user.name}</p>
                                                <p className="text-sm text-gray-500">{user.email}</p>
                                            </div>
                                            <div className="py-1">
                                                <Link
                                                    to={ROUTES.PROFILE}
                                                    onClick={() => setIsProfileOpen(false)}
                                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                                >
                                                    <User className="h-4 w-4" />
                                                    My Profile
                                                </Link>
                                                <Link
                                                    to={ROUTES.APPOINTMENTS}
                                                    onClick={() => setIsProfileOpen(false)}
                                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                                >
                                                    <Calendar className="h-4 w-4" />
                                                    Appointments
                                                </Link>
                                                <Link
                                                    to={ROUTES.ORDERS}
                                                    onClick={() => setIsProfileOpen(false)}
                                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                                >
                                                    <ShoppingCart className="h-4 w-4" />
                                                    Orders
                                                </Link>
                                                <Link
                                                    to="/settings"
                                                    onClick={() => setIsProfileOpen(false)}
                                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                                >
                                                    <Settings className="h-4 w-4" />
                                                    Settings
                                                </Link>
                                            </div>
                                            <div className="border-t border-gray-100 pt-1">
                                                <button
                                                    onClick={handleLogout}
                                                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                                                >
                                                    <LogOut className="h-4 w-4" />
                                                    Sign out
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link to={ROUTES.LOGIN}>
                                    <Button variant="ghost">Log in</Button>
                                </Link>
                                <Link to={ROUTES.SIGNUP}>
                                    <Button>Sign up</Button>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <Link to={ROUTES.CART} className="relative">
                            <Button variant="ghost" size="icon" aria-label="Cart">
                                <ShoppingCart className="h-5 w-5" />
                            </Button>
                            {cartItemCount > 0 && (
                                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-500 text-xs font-medium text-white">
                                    {cartItemCount}
                                </span>
                            )}
                        </Link>
                        <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Menu">
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="border-t border-gray-100 py-4 lg:hidden animate-slide-down">
                        <div className="space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    onClick={closeMobileMenu}
                                    className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="mt-4 border-t border-gray-100 pt-4">
                            {isAuthenticated && user ? (
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3 px-3 py-2">
                                        <Avatar src={user.avatar} name={user.name} size="md" />
                                        <div>
                                            <p className="font-medium text-gray-900">{user.name}</p>
                                            <p className="text-sm text-gray-500">{user.email}</p>
                                        </div>
                                    </div>
                                    <Link
                                        to={ROUTES.PROFILE}
                                        onClick={closeMobileMenu}
                                        className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        My Profile
                                    </Link>
                                    <Link
                                        to={ROUTES.APPOINTMENTS}
                                        onClick={closeMobileMenu}
                                        className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        Appointments
                                    </Link>
                                    <button
                                        onClick={() => {
                                            handleLogout()
                                            closeMobileMenu()
                                        }}
                                        className="block w-full rounded-lg px-3 py-2 text-left text-base font-medium text-red-600 hover:bg-red-50"
                                    >
                                        Sign out
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-2 px-3">
                                    <Link to={ROUTES.LOGIN} onClick={closeMobileMenu}>
                                        <Button variant="outline" fullWidth>
                                            Log in
                                        </Button>
                                    </Link>
                                    <Link to={ROUTES.SIGNUP} onClick={closeMobileMenu}>
                                        <Button fullWidth>Sign up</Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}