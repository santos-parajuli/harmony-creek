'use client';

import { Check, Loader2 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import Earth from '@/components/ui/globe';
import Heading from '../common/Heading';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SparklesCore } from '../ui/sparklecore';
import { Textarea } from '@/components/ui/textarea';

export default function ContactUs1() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const formRef = useRef(null);
	const isInView = useInView(formRef, { once: true, amount: 0.3 });

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			// Perform form submission logic here
			console.log('Form submitted:', { name, email, message });
			await new Promise((resolve) => setTimeout(resolve, 1000));
			setName('');
			setEmail('');
			setMessage('');
			setIsSubmitted(true);
			setTimeout(() => {
				setIsSubmitted(false);
			}, 5000);
		} catch (error) {
			console.error('Error submitting form:', error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className='bg-background relative w-full overflow-hidden py-16 md:py-24'>
			<div
				className='absolute top-0 left-0 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]'
				style={{
					background: `radial-gradient(circle at center, hsl(var(--destructive)), transparent 70%)`,
				}}
			/>
			<div
				className='absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]'
				style={{
					background: `radial-gradient(circle at center, hsl(var(--destructive)), transparent 70%)`,
				}}
			/>

			<div className='relative z-10 max-w-7xl mx-auto px-4 md:px-6'>
				<div className='border-border/40 bg-secondary/20 mx-auto max-w-7xl overflow-hidden rounded-2xl border shadow-xl backdrop-blur-sm'>
					<div className='grid md:grid-cols-2 py-20'>
						<div className='order-2 md:order-1 relative p-6 md:p-10' ref={formRef}>
							<Heading text='Contact' span='Us' />
							<motion.form initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.3 }} onSubmit={handleSubmit} className='mt-8 space-y-6'>
								<div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
									<motion.div className='space-y-2' initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
										<Label htmlFor='name'>Name</Label>
										<Input id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' required />
									</motion.div>

									<motion.div className='space-y-2' initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
										<Label htmlFor='email'>Email</Label>
										<Input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' required />
									</motion.div>
								</div>

								<motion.div className='space-y-2' initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
									<Label htmlFor='message'>Message</Label>
									<Textarea id='message' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter your message' required className='h-40 resize-none' />
								</motion.div>

								<motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className='w-full'>
									<Button type='submit' disabled={isSubmitting} className='w-full '>
										{isSubmitting ? (
											<span className='flex items-center justify-center'>
												<Loader2 className='mr-2 h-4 w-4 animate-spin' />
												Sending...
											</span>
										) : isSubmitted ? (
											<span className='flex items-center justify-center'>
												<Check className='mr-2 h-4 w-4' />
												Message Sent!
											</span>
										) : (
											<span>Send Message</span>
										)}
									</Button>
								</motion.div>
							</motion.form>
						</div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className=' order-1 md:order-2 relative my-8 flex items-center justify-center overflow-hidden px-4 md:pr-8'>
							<div className='flex flex-col items-center justify-center overflow-hidden'>
								<article className='relative mx-auto h-[350px] min-h-60 w-full md:max-w-[450px] overflow-hidden rounded-3xl border bg-gradient-to-b from-chart-1 to-destructive/5 p-6 text-3xl tracking-tight text-primary-foreground md:h-[450px] md:min-h-80 md:p-8 md:text-4xl md:leading-[1.05] lg:text-5xl'>
									Golf & Event Destination – Play, Celebrate, Connect
									<div className='absolute -right-20 -bottom-20 z-10 mx-auto flex h-full w-full max-w-[300px] items-center justify-center transition-all duration-700 hover:scale-105 md:-right-28 md:-bottom-28 md:max-w-[550px]'>
										<Earth
											scale={1.1}
											baseColor={[0.031, 0.568, 0.698]} // cyan-600
											markerColor={[0, 0, 0]}
											glowColor={[0.033, 0.565, 0.7]}
										/>
									</div>
								</article>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
