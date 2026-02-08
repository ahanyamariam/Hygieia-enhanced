// src/pages/Home.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Video, Pill, TestTube, Shield, Clock, Award, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card3D } from '@/components/ui/Card3D'
import { MedicalScene } from '@/components/3d/MedicalScene'
import { ROUTES } from '@/utils/constants'

const services = [
    {
        icon: Video,
        title: 'Video Consultation',
        description: 'Connect with doctors instantly through secure video calls',
        href: ROUTES.DOCTORS,
        color: 'bg-blue-100 text-blue-600',
    },
    {
        icon: Pill,
        title: 'Online Pharmacy',
        description: 'Order medicines and get them delivered to your doorstep',
        href: ROUTES.PHARMACY,
        color: 'bg-green-100 text-green-600',
    },
    {
        icon: TestTube,
        title: 'Lab Tests',
        description: 'Book lab tests online and get reports digitally',
        href: ROUTES.LAB_TESTS,
        color: 'bg-purple-100 text-purple-600',
    },
]

const stats = [
    { value: '10K+', label: 'Happy Patients' },
    { value: '500+', label: 'Expert Doctors' },
    { value: '50+', label: 'Specializations' },
    { value: '24/7', label: 'Support' },
]

export const Home: React.FC = () => {
    return (
        <div className="overflow-hidden">
            {/* Announcement Banner */}
            <div className="bg-green-600 py-2 text-center text-sm font-medium text-white shadow-sm">
                <p>
                    🎉 Special Offer: Get 20% off on your first lab test! Use code{' '}
                    <span className="font-bold underline">HEALTH20</span>
                </p>
            </div>

            {/* Hero Section with 3D */}
            <section className="relative min-h-screen bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }} />
                </div>

                {/* Floating Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-float" />
                    <div className="absolute top-1/2 -right-20 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-float-slow" />
                    <div className="absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-white/5 blur-3xl animate-float-fast" />
                </div>

                <div className="container-custom relative">
                    <div className="grid min-h-screen items-center gap-12 py-20 lg:grid-cols-2">
                        {/* Left Content */}
                        <div className="text-center lg:text-left">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-sm">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span>Rated 4.9/5 by 10,000+ patients</span>
                            </div>

                            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                                Your Health,
                                <br />
                                <span className="text-primary-200">Our Priority</span>
                            </h1>

                            <p className="mt-6 text-lg text-primary-100 sm:text-xl lg:max-w-lg">
                                Access quality healthcare from the comfort of your home.
                                Consult with top doctors, order medicines, and book lab tests.
                            </p>

                            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                                <Link to={ROUTES.DOCTORS}>
                                    <Button
                                        size="lg"
                                        className="bg-white text-primary-600 shadow-xl shadow-primary-900/20 hover:bg-gray-100"
                                    >
                                        Find a Doctor
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link to={ROUTES.ABOUT}>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-2 border-white/50 text-white hover:bg-white/10"
                                    >
                                        Learn More
                                    </Button>
                                </Link>
                            </div>

                            {/* Stats */}
                            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="text-center lg:text-left">
                                        <div className="text-3xl font-bold text-white">{stat.value}</div>
                                        <div className="text-sm text-primary-200">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right - 3D Scene */}
                        <div className="relative hidden h-[500px] lg:block">
                            <MedicalScene type="heart" />

                            {/* Floating Cards */}
                            <div className="absolute -left-10 top-10 animate-float">
                                <div className="rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                                            <Video className="h-5 w-5 text-green-600" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">Video Call</div>
                                            <div className="text-xs text-gray-500">Dr. Smith is available</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -right-5 bottom-20 animate-float-slow">
                                <div className="rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                                            <Shield className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">100% Secure</div>
                                            <div className="text-xs text-gray-500">Your data is protected</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                            fill="#F9FAFB"
                        />
                    </svg>
                </div>
            </section>

            {/* Services Section with 3D Cards */}
            <section className="bg-gray-50 py-20">
                <div className="container-custom">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Everything you need for your healthcare needs
                        </p>
                    </div>

                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <Link key={service.title} to={service.href}>
                                <Card3D className="h-full">
                                    <div className={`inline-flex rounded-xl p-3 ${service.color}`}>
                                        <service.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-4 text-xl font-semibold text-gray-900">
                                        {service.title}
                                    </h3>
                                    <p className="mt-2 text-gray-600">{service.description}</p>
                                    <div className="mt-4 flex items-center text-primary-600">
                                        <span className="font-medium">Learn more</span>
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
                                </Card3D>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        {/* 3D Scene */}
                        <div className="relative h-[400px]">
                            <MedicalScene type="dna" />
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                Why Choose Hygieia?
                            </h2>
                            <p className="mt-4 text-lg text-gray-600">
                                We're committed to providing the best healthcare experience with
                                cutting-edge technology and compassionate care.
                            </p>

                            <div className="mt-8 space-y-6">
                                {[
                                    {
                                        icon: Shield,
                                        title: 'Secure & Private',
                                        description: 'Your health data is encrypted and HIPAA compliant',
                                    },
                                    {
                                        icon: Clock,
                                        title: '24/7 Available',
                                        description: 'Access healthcare services anytime, anywhere',
                                    },
                                    {
                                        icon: Award,
                                        title: 'Certified Doctors',
                                        description: 'All our doctors are verified and experienced',
                                    },
                                ].map((feature) => (
                                    <div key={feature.title} className="flex gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                                            <feature.icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-500 to-primary-600 p-12 text-center">
                        {/* Background decoration */}
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

                        <div className="relative">
                            <h2 className="text-3xl font-bold text-white sm:text-4xl">
                                Ready to Get Started?
                            </h2>
                            <p className="mt-4 text-lg text-primary-100">
                                Join thousands of patients who trust Hygieia for their healthcare needs
                            </p>
                            <div className="mt-8">
                                <Link to={ROUTES.SIGNUP}>
                                    <Button
                                        size="lg"
                                        className="bg-white text-primary-600 shadow-xl hover:bg-gray-100"
                                    >
                                        Create Free Account
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}