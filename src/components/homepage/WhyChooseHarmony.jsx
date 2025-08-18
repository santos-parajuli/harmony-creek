'use client';

import { Button } from '../ui/button';
import { motion } from 'motion/react';

export default function WhyChooseHarmony() {
	return (
		<section className='mx-auto max-w-6xl px-6 py-20'>
			{/* Section Header */}
			<motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: false }} className='text-center mb-12'>
				<h2 className='text-3xl md:text-4xl font-bold text-foreground dark:text-foreground'>Why Choose Harmony Creek?</h2>
				<p className='mt-4 text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto'>At Harmony Creek Golf Centre, we blend championship-level golf with exceptional hospitality to create unforgettable experiences.</p>
			</motion.div>

			{/* Golf Course */}
			<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: false }} className='grid gap-8 md:grid-cols-2 md:items-center mb-16'>
				<div className='w-full h-64 rounded-lg overflow-hidden shadow-lg'>
					<img src='/images/course.png' alt='Golf Course' className='w-full h-full object-cover' />
				</div>
				<div>
					<h3 className='text-2xl font-semibold mb-4 flex items-center gap-2'>A Course That Challenges & Inspires</h3>
					<p className='text-muted-foreground dark:text-muted-foreground leading-relaxed'>
						Our 18-hole executive course offers the perfect balance of playability and challenge, with water hazards, strategic bunkers, and pristine greens set against a backdrop of mature trees and tranquil creeks. Whether you're a
						seasoned golfer or a beginner, every round is a chance to test your skills and soak in stunning views.
					</p>
					<Button asChild className='mt-4'>
						<a href='https://harmony-creek-golf-centre.book.teeitup.golf' target='_blank' rel='noopener noreferrer'>
							Book Now
						</a>
					</Button>
				</div>
			</motion.div>

			{/* Events */}
			<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: false }} className='grid gap-8 md:grid-cols-2 md:items-center mb-16'>
				<div className='order-2 md:order-1'>
					<h3 className='text-2xl font-semibold mb-4 flex items-center gap-2'>Unmatched Event Hosting</h3>
					<p className='text-muted-foreground dark:text-muted-foreground leading-relaxed'>From elegant weddings in our acclaimed Harmony Hall to high-energy corporate tournaments, we deliver:</p>
					<ul className='mt-4 space-y-2 text-muted-foreground dark:text-muted-foreground list-disc list-inside'>
						<li>Customized service with expert event coordination</li>
						<li>Gourmet catering featuring locally sourced ingredients</li>
						<li>Versatile spaces for groups of 5 to 150 guests</li>
					</ul>
				</div>
				<div className='w-full h-64 rounded-lg overflow-hidden shadow-lg order-1 md:order-2'>
					<img src='/images/events.png' alt='Weddings & Events' className='w-full h-full object-cover' />
				</div>
			</motion.div>

			{/* More Than Golf */}
			<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: false }} className='grid gap-8 md:grid-cols-2 md:items-center'>
				<div className='w-full h-64 rounded-lg overflow-hidden shadow-lg'>
					<img src='/images/more-than-golf.png' alt='Golf Academy and More' className='w-full h-full object-cover' />
				</div>
				<div>
					<h3 className='text-2xl font-semibold mb-4 flex items-center gap-2'>More Than Just Golf</h3>
					<ul className='space-y-2 text-muted-foreground dark:text-muted-foreground list-disc list-inside'>
						<li>Top-tier practice facilities, including a floodlit driving range and award-winning mini-putt</li>
						<li>CPGA-led instruction for all ages and skill levels</li>
						<li>Year-round hospitality in our Master’s Lounge and banquet halls</li>
					</ul>
					<p className='mt-4 text-foreground dark:text-foreground font-medium'>Where every detail is crafted for excellence—on the course and beyond.</p>
					<Button asChild className='mt-4'>
						<a href='https://harmony-creek-golf-centre.book.teeitup.golf' target='_blank' rel='noopener noreferrer'>
							Book Now
						</a>
					</Button>
				</div>
			</motion.div>
		</section>
	);
}
