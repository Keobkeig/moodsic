"use client";
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
 
// import { useRouter } from 'next/router';

interface HeaderProps {
    children?: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps>= ({
    children,
    className
}) => {
    // const router = useRouter();
    return (
        <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
            <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Gradients X Animations
            </p>
        </div>
        </BackgroundGradientAnimation>
    )
}

export default Header;