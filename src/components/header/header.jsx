'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Book, MapPin, Menu as MenuIcon, Shirt, Sunset, Trees, Users, Zap } from 'lucide-react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

import { Button } from '@/components/ui/button';
import { ModeToggle } from '../mode-toggle';

const iconMap = {
	'Course Overview': <Trees className='size-5 shrink-0' />,
	'Clubhouse Overview': <Sunset className='size-5 shrink-0' />,
	'Dress Code': <Shirt className='size-5 shrink-0' />,
	'Map & Directions': <MapPin className='size-5 shrink-0' />,
	Careers: <Users className='size-5 shrink-0' />,
	Accessibility: <Zap className='size-5 shrink-0' />,
	'Course Amenities': <Trees className='size-5 shrink-0' />,
	'Green Fees': <Book className='size-5 shrink-0' />,
	'Membership Fees': <Book className='size-5 shrink-0' />,
	'Course Layout': <MapPin className='size-5 shrink-0' />,
	'Golf Lessons': <Sunset className='size-5 shrink-0' />,
	'Junior Golf Camp': <Users className='size-5 shrink-0' />,
	'Wedding Information': <Book className='size-5 shrink-0' />,
	'Function Information': <Book className='size-5 shrink-0' />,
	'Corporate Functions': <Users className='size-5 shrink-0' />,
	'Photo Gallery': <Sunset className='size-5 shrink-0' />,
};

const menuItems = [
	{
		title: 'About',
		href: '/about/course-overview/',
		submenu: [
			{ title: 'Course Overview', href: '/course-overview/' },
			{ title: 'Clubhouse Overview', href: '/clubhouse-overview/' },
			{ title: 'Dress Code', href: '/dress-code/' },
			{ title: 'Map & Directions', href: '/map-directions/' },
			{ title: 'Careers', href: '/careers/' },
			{ title: 'Accessibility', href: '/accessibility/' },
		],
	},
	{
		title: 'Golf Facilities',
		href: '/golf-facilities/course-amenities/',
		submenu: [
			{ title: 'Course Amenities', href: '/course-amenities/' },
			{ title: 'Green Fees', href: '/green-fees/' },
			{ title: 'Membership Fees', href: '/membership-fees/' },
			{ title: 'Course Layout', href: '/course-layout/' },
			{ title: 'Golf Lessons', href: '/golf-lessons/' },
			{ title: 'Junior Golf Camp', href: '/junior-golf-camp/' },
		],
	},
	{
		title: 'Tournaments',
		href: '/tournaments/',
	},
	{
		title: 'Banquet Hall',
		href: '/banquet-hall/wedding-information/',
		submenu: [
			{ title: 'Wedding Information', href: '/wedding-information/' },
			{ title: 'Function Information', href: '/function-information/' },
			{ title: 'Corporate Functions', href: '/corporate-functions/' },
			{ title: 'Photo Gallery', href: '/photo-gallery/' },
		],
	},
	{
		title: 'Contact Us',
		href: '/contact-us/',
	},
	{
		title: 'Relocation',
		href: '/relocation-accomodations/',
	},
];

const SubMenuLink = ({ item }) => (
	<a href={item.href} className='hover:bg-muted hover:text-accent-foreground flex select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors'>
		<div>{iconMap[item.title]}</div>
		<div>
			<div className='text-sm font-semibold'>{item.title}</div>
		</div>
	</a>
);

const Header = () => {
	return (
		<section className='sticky top-0 z-50 bg-background p-4 shadow-sm'>
			<nav className='flex items-center  justify-between'>
				{/* Logo */}
				<a href='/' className='flex items-center gap-2'>
					<img src='/photos/logo.png' className='max-h-8' alt='Logo' />
					<span className='text-lg font-semibold tracking-tighter'>Harmony Creek Golf</span>
				</a>

				{/* Desktop Menu */}
				<NavigationMenu className='hidden lg:block'>
					<NavigationMenuList>
						{menuItems.map((item, index) => (
							<NavigationMenuItem key={index}>
								{item.submenu ? (
									<>
										<NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
										<NavigationMenuContent>
											<div className='grid w-[600px] grid-cols-2 p-3'>
												{item.submenu.map((sub, i) => (
													<NavigationMenuLink key={i} asChild>
														<SubMenuLink item={sub} />
													</NavigationMenuLink>
												))}
											</div>
										</NavigationMenuContent>
									</>
								) : (
									<NavigationMenuLink href={item.href} className={navigationMenuTriggerStyle()}>
										{item.title}
									</NavigationMenuLink>
								)}
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>

				{/* Desktop Buttons */}
				<div className='hidden lg:flex gap-4'>
					<ModeToggle />
					<Button asChild>
						<a href='https://harmony-creek-golf-centre.book.teeitup.golf' target='_blank' rel='noopener noreferrer'>
							Book Now
						</a>
					</Button>
				</div>

				{/* Mobile Menu */}
				{/* Mobile Menu */}
				<div className='block lg:hidden'>
					<div className='flex items-center justify-between'>
						<Sheet>
							<SheetTrigger asChild>
								<Button variant='outline' size='icon'>
									<MenuIcon className='h-4 w-4' />
								</Button>
							</SheetTrigger>

							<SheetContent className='overflow-y-auto'>
								<SheetHeader>
									<SheetTitle>
										<a href='/' className='flex items-center gap-2'>
											<img src='http://harmonycreekgolf.com/wp-content/uploads/2015/05/harmony-creek-logo-H.png' className='max-h-8' alt='Logo' />
											<span className='text-lg font-semibold tracking-tighter'>Harmony Creek Golf</span>
										</a>
									</SheetTitle>
								</SheetHeader>

								<div className='flex flex-col gap-6 p-4'>
									<Accordion type='single' collapsible className='flex w-full flex-col gap-4'>
										{menuItems.map((item) =>
											item.submenu ? (
												<AccordionItem key={item.title} value={item.title} className='border-b-0'>
													<AccordionTrigger className='text-md py-0 font-semibold hover:no-underline'>{item.title}</AccordionTrigger>
													<AccordionContent className='mt-2'>
														<div className='flex flex-col gap-2 pl-2'>
															{item.submenu.map((sub) => (
																<SubMenuLink key={sub.title} item={sub} />
															))}
														</div>
													</AccordionContent>
												</AccordionItem>
											) : (
												<a key={item.title} href={item.href} className='text-md font-semibold py-1'>
													{item.title}
												</a>
											)
										)}
									</Accordion>
									<div className='flex flex-col gap-3'>
										<ModeToggle />
										<Button asChild>
											<a href='https://harmony-creek-golf-centre.book.teeitup.golf' target='_blank' rel='noopener noreferrer'>
												Book Now
											</a>
										</Button>
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</nav>
		</section>
	);
};

export default Header;
