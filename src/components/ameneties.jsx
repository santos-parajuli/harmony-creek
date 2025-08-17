'use client';

import { BookOpen, Building2, CarIcon, Flag, GraduationCap, LandPlotIcon, MapPin, ShoppingBag, SofaIcon, Sun, Trophy, Users, WineIcon } from 'lucide-react';

import Heading from './common/Heading';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const BentoGridItem = ({ title, description, icon, className, animationIndex }) => {
	const delay = animationIndex * 0.06;
	const duration = 0.5;

	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: delay }}
			viewport={{ once: false }}
			className={cn(
				'group relative flex flex-col justify-between overflow-hidden rounded-xl border border-primary/10 bg-background p-3 md:px-4 md:py-6 shadow-md transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:scale-[1.03]',
				className
			)}>
			<div className='absolute top-0 -right-1/2 z-0 w-full h-full bg-[linear-gradient(to_right,#003C70_1px,transparent_1px),linear-gradient(to_bottom,#003C70_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px] transition-all duration-500 group-hover:bg-[linear-gradient(to_right,#003C70_0.4_1px,transparent_1px),linear-gradient(to_bottom,#003C70_0.4_1px,transparent_1px)]' />
			<div className='relative z-10 flex flex-col'>
				<div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shadow transition-all duration-500 group-hover:bg-primary/20 group-hover:shadow-primary/40 dark:text-primary-foreground'>
					{icon}
				</div>
				<h3 className='mb-2 text-lg font-semibold tracking-tight  transition-colors duration-300'>{title}</h3>
				<p className='text-muted-foreground text-sm leading-relaxed'>{description}</p>
			</div>
		</motion.div>
	);
};

const items = [
	{ title: '18 Hole Executive Golf Course', description: 'A beautifully designed executive course offering a balance of challenge and enjoyment for golfers of all levels.', icon: <Flag className='size-6' /> },
	{ title: 'Driving Range', description: 'Practice your swing and fine-tune your technique at our expansive driving range.', icon: <CarIcon className='size-6' /> },
	{ title: '18 Hole Mini Putt', description: 'A fun and engaging mini putt course designed for families, kids, and casual players.', icon: <LandPlotIcon className='size-6' /> },
	{ title: 'Memberships', description: 'Choose from full or weekday memberships for year-round access.', icon: <Users className='size-6' /> },
	{ title: 'Tournaments Welcome', description: 'Facilities and staff support to host competitive and social golf events.', icon: <Trophy className='size-6' /> },
	{ title: 'Pro Shop', description: 'A fully stocked pro shop with the latest golf equipment and apparel.', icon: <ShoppingBag className='size-6' /> },
	{ title: 'Golf Lessons', description: 'Professional instructors provide private and group lessons for all skill levels.', icon: <BookOpen className='size-6' /> },
	{ title: 'Junior Golf Camps', description: 'Specialized camps for young golfers to learn fundamentals and build confidence.', icon: <GraduationCap className='size-6' /> },
	{ title: 'Master’s Lounge', description: 'A comfortable lounge to relax after a round and enjoy refreshments.', icon: <SofaIcon className='size-6' /> },
	{ title: 'Banquet Facilities', description: 'Elegant halls for weddings, corporate, and social events.', icon: <Building2 className='size-6' /> },
	{ title: 'Licensed Venue', description: 'A fully licensed establishment with a wide selection of beverages.', icon: <WineIcon className='size-6' /> },
	{ title: 'Convenient Location', description: 'Easily accessible with ample parking and central proximity.', icon: <MapPin className='size-6' /> },
	{ title: 'Open Year Round', description: 'Our facilities are open throughout all seasons.', icon: <Sun className='size-6' /> },
	{ title: 'Open to the Public', description: 'Welcoming both members and the general public.', icon: <Users className='size-6' /> },
];

const bentoPattern = [
	'md:col-span-3 lg:col-span-3',
	'md:col-span-3 lg:col-span-3',
	'md:col-span-4 lg:col-span-4',
	'md:col-span-2 lg:col-span-2',
	'md:col-span-5 lg:col-span-5',
	'md:col-span-4 lg:col-span-4',
	'md:col-span-3 lg:col-span-3',
	'md:col-span-3 lg:col-span-3',
	'md:col-span-4 lg:col-span-4',
	'md:col-span-5 lg:col-span-5',
	'md:col-span-3 lg:col-span-3',
	'md:col-span-3 lg:col-span-3',
	'md:col-span-3 lg:col-span-3',
	'md:col-span-3 lg:col-span-3',
];

export default function AmenitiesGrid() {
	return (
		<div className='mx-auto max-w-7xl px-4 py-16'>
			<div className='m-4'>
				<Heading text='Amenities' />
			</div>
			<div className='grid grid-cols-12 gap-6'>
				{items.map((item, index) => (
					<BentoGridItem key={index} title={item.title} description={item.description} icon={item.icon} animationIndex={index} className={cn('col-span-12 sm:col-span-6', bentoPattern[index % bentoPattern.length])} />
				))}
			</div>
		</div>
	);
}
