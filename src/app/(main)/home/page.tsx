import React from 'react';
import Image from 'next/image';
import Hero from '@/Components/Home/Hero';
import Album from '@/Components/Home/Album';
import About from '@/Components/Home/About';
import Scrolllink from '@/Components/Home/ScrollLink';
import LastCaptures from '@/Components/Home/LastCaptures';
import End from '@/Components/Home/End';
import Gallery from '@/Components/Gallery/Gallery';

export default function Home() {
    return (
        <>
        <Hero/>
        <Album/>
        <About/>
        <Scrolllink/>
        <Gallery/>
        <LastCaptures/>
        <End/>
        </>
    )
}