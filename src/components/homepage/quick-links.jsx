import { CalendarDays, Golf, Utensils } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

import { cn } from '@/lib/utils';

const quickLinks = [
	{
		title: 'Golf Facilities',
		description: '18-hole executive course, driving range, mini-putt, and lessons.',
		href: '#',
		cta: 'Learn More →',
		icon: Golf,
		iconForeground: 'text-green-700',
		iconBackground: 'bg-green-50 dark:bg-green-950/30',
		ringColorClass: 'ring-green-700/30',
	},
	{
		title: 'Tournaments & Events',
		description: 'Host corporate outings, charity tournaments, and private events.',
		href: '#',
		cta: 'Plan an Event →',
		icon: CalendarDays,
		iconForeground: 'text-blue-700',
		iconBackground: 'bg-blue-50 dark:bg-blue-950/30',
		ringColorClass: 'ring-blue-700/30',
	},
	{
		title: 'Banquet & Dining',
		description: 'Elegant venue for weddings, parties, and business meetings.',
		href: '#',
		cta: 'View Menus →',
		icon: Utensils,
		iconForeground: 'text-amber-700',
		iconBackground: 'bg-amber-50 dark:bg-amber-950/30',
		ringColorClass: 'ring-amber-700/30',
	},
];

export default function QuickLinksGrid() {
	return (
		<div className='flex items-center justify-center p-8'>
			<div className='w-full max-w-full overflow-hidden rounded-xl bg-muted shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 p-6'>
				{quickLinks.map((link) => {
					const IconComponent = link.icon;
					return (
						<Card key={link.title} className={cn('group relative rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:scale-[1.02]', 'focus-within:ring-2 focus-within:ring-ring focus-within:ring-inset')}>
							<CardContent className='p-6'>
								<div>
									<span className={cn(link.iconBackground, link.iconForeground, 'inline-flex rounded-lg p-3 ring-2 ring-inset transition-colors duration-300 group-hover:bg-white/50', link.ringColorClass)}>
										{/* <IconComponent aria-hidden='true' className='h-6 w-6' /> */}
									</span>
								</div>
								<div className='mt-6'>
									<h3 className='text-lg font-semibold text-foreground'>
										<a href={link.href} className='focus:outline-none'>
											<span aria-hidden='true' className='absolute inset-0' />
											{link.title}
										</a>
									</h3>
									<p className='mt-2 text-muted-foreground'>{link.description}</p>
								</div>
								<div className='mt-6'>
									<a href={link.href} className='inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300'>
										{link.cta}
									</a>
								</div>
							</CardContent>
						</Card>
					);
				})}
			</div>
		</div>
	);
}
