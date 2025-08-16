'use client';

import { ImagesSlider } from '@/components/ui/image-slider';
import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
	const images = [
		'https://images.unsplash.com/photo-1500932334442-8761ee4810a7?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1643075402871-fb605667fadb?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	];
	return (
		<ImagesSlider className='h-[40rem]' images={images}>
			<motion.div
				initial={{
					opacity: 0,
					y: -80,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 0.9,
				}}
				className='z-50 flex flex-col justify-center items-center px-4'>
				<motion.p className='font-bold text-4xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4'>Harmony Creek Golf Centre</motion.p>
				<motion.p className='capitalize bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center text-lg md:text-2xl py-4'>Oshawa’s Premier Golf & Event Destination – Play, Celebrate, Connect</motion.p>
				<a href='https://harmony-creek-golf-centre.book.teeitup.golf' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
					<button className='px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4'>
						<span>Book Now →</span>
						<div className='absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent' />
					</button>
				</a>
			</motion.div>
		</ImagesSlider>
	);
}
