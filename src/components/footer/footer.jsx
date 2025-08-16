'use client';

import { Facebook, Globe, Instagram, Mail, MapPin, Phone } from 'lucide-react';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Footer() {
	useEffect(() => {
		if (!document.getElementById('weatherwidget-io-js')) {
			const script = document.createElement('script');
			script.id = 'weatherwidget-io-js';
			script.src = 'https://weatherwidget.io/js/widget.min.js';
			script.async = true;
			document.body.appendChild(script);
		}
	}, []);

	return (
		<footer className='mt-10 bg-slate-100 text-neutral-700 dark:bg-slate-900 dark:text-neutral-300 lg:text-left'>
			{/* Weather Widget */}
			<div className='text-center p-6'>
				<a className='weatherwidget-io' href='https://forecast7.com/en/43d90n78d87/oshawa/' data-label_1='OSHAWA' data-label_2='WEATHER' data-theme='original'>
					OSHAWA WEATHER
				</a>
			</div>

			{/* Social Media Section */}
			<div className='flex flex-col gap-4 items-center justify-between border-b-2 border-neutral-200 dark:border-neutral-700 px-6 py-6 md:flex-row'>
				<span className='hidden md:block'>Get connected with us on social networks:</span>
				<div className='flex gap-6'>
					<Link href='https://www.facebook.com/profile.php?id=100057232549144' target='_blank' aria-label='Facebook'>
						<Facebook className='h-5 w-5 hover:text-blue-600 dark:hover:text-blue-400 transition' />
					</Link>
					<Link href='https://www.instagram.com/harmonycreekgolfcentre/' target='_blank' aria-label='Instagram'>
						<Instagram className='h-5 w-5 hover:text-pink-500 dark:hover:text-pink-400 transition' />
					</Link>
					<Link href='https://harmonycreekgolf.com' target='_blank' aria-label='Website'>
						<Globe className='h-5 w-5 hover:text-green-600 dark:hover:text-green-400 transition' />
					</Link>
				</div>
			</div>

			{/* Main Grid Content */}
			<div className='mx-6 py-10 text-center md:text-left'>
				<div className='grid gap-10 md:grid-cols-6 grid-cols-2'>
					{/* Logo + Description */}
					<div className='col-span-2'>
						<h6 className='mb-4 flex items-center justify-center font-semibold uppercase md:justify-start'>
							<img src='/images/logo.png' className='h-8 mr-2' alt='Harmony Creek Logo' />
							Harmony Creek Golf
						</h6>
						<p>Oshawa’s Premier Golf & Event Destination – Play, Celebrate, Connect</p>
					</div>

					{/* Navigation Links */}
					<div>
						<h6 className='mb-4 font-semibold uppercase'>Navigation</h6>
						<ul className='space-y-2 text-sm'>
							<li>
								<Link href='/' className='hover:text-cyan-600 dark:hover:text-cyan-400'>
									Home
								</Link>
							</li>
							<li>
								<Link href='/about' className='hover:text-cyan-600 dark:hover:text-cyan-400'>
									About
								</Link>
							</li>
							<li>
								<Link href='/golf-facilities' className='hover:text-cyan-600 dark:hover:text-cyan-400'>
									Golf Facilities
								</Link>
							</li>
							<li>
								<Link href='/banquet-hall' className='hover:text-cyan-600 dark:hover:text-cyan-400'>
									Banquet Hall
								</Link>
							</li>
						</ul>
					</div>

					{/* Helpful Links */}
					<div>
						<h6 className='mb-4 font-semibold uppercase'>Helpful Links</h6>
						<ul className='space-y-2 text-sm'>
							<li>
								<Link href='/map-directions' className='hover:text-cyan-600 dark:hover:text-cyan-400'>
									Map & Directions
								</Link>
							</li>
							<li>
								<Link href='/contact-us' className='hover:text-cyan-600 dark:hover:text-cyan-400'>
									Contact
								</Link>
							</li>
							<li>
								<Link href='/careers' className='hover:text-cyan-600 dark:hover:text-cyan-400'>
									Careers
								</Link>
							</li>
							<li>
								<Link href='/accessibility' className='hover:text-cyan-600 dark:hover:text-cyan-400'>
									Accessibility
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div className='col-span-2 '>
						<h6 className='mb-4 font-semibold uppercase'>Contact</h6>
						<ul className='space-y-3 text-sm'>
							<li className='flex items-center justify-center md:justify-normal gap-2'>
								<MapPin className='h-4 w-4' />
								1000 Bloor Street East, Oshawa, Ontario L1H 8S1
							</li>
							<li className='flex items-center justify-center md:justify-normal gap-2'>
								<Phone className='h-4 w-4' />
								<Link href='tel:9054330211'>(905) 433-0211</Link>
							</li>
							<li className='flex items-center justify-center md:justify-normal gap-2'>
								<Phone className='h-4 w-4' /> Fax: (905) 433-7996
							</li>
							<li className='flex items-center justify-center md:justify-normal gap-2'>
								<Mail className='h-4 w-4' />
								<Link href='mailto:info@harmonycreekgolf.com'>info@harmonycreekgolf.com</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className='bg-slate-200 dark:bg-slate-800 py-4 text-center text-sm'>
				&copy; {new Date().getFullYear()} Harmony Creek Golf | Developed by{' '}
				<Link href='https://siwani.com.np/' target='_blank' className='font-semibold hover:text-blue-600 dark:hover:text-blue-400'>
					Santosh Parajuli
				</Link>
			</div>
		</footer>
	);
}
