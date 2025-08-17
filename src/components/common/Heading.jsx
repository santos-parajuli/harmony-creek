'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { SparklesCore } from '../ui/sparklecore';

function Heading({ text, span }) {
	const headingRef = useRef(null); // create a ref
	const isInView = useInView(headingRef, { once: true, amount: 0.3 }); // observe the ref

	return (
		<div ref={headingRef} className='relative w-full '>
			<motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.1 }} className='flex w-full gap-2 justify-center'>
				<h2 className='from-foreground to-foreground/80 mb-2 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl'>{text}</h2>
				{span && <span className='text-primary relative z-10 w-fit text-4xl font-bold tracking-tight italic md:text-5xl'>{span}</span>}
				<SparklesCore id='tsparticles' background='transparent' minSize={0.8} maxSize={1.5} particleDensity={800} className='absolute inset-0 -top-6 h-24 w-full' particleColor='#0092b8' />
			</motion.div>
		</div>
	);
}

export default Heading;
