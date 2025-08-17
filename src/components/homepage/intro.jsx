// components/intro-blurb.tsx
export function IntroBlurb() {
	return (
		<section className='relative w-full'>
			<div className='mx-auto max-w-7xl px-4 py-4 sm:py-4 md:py-4'>
				{/* Subtle glow / ring */}
				<div
					className='relative rounded-2xl border border-border/60 bg-background/60 p-6 shadow-sm backdrop-blur-sm 
                        dark:border-border/60 dark:bg-background/50'>
					<div
						className='pointer-events-none absolute inset-0 rounded-2xl 
                          [mask-image:radial-gradient(150%_100%_at_50%_0%,black,transparent)] 
                          shadow-[0_0_60px_10px_hsl(var(--primary)/0.08)] dark:shadow-[0_0_80px_12px_hsl(var(--primary)/0.12)]'
					/>

					{/* Badge */}
					<div
						className='mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium 
                          text-foreground dark:border-border dark:text-muted-foreground'>
						<span className='h-2 w-2 rounded-full bg-gradient-to-r from-primary via-chart-1 to-chart-3' />
						Harmony Creek Golf Centre
					</div>

					{/* Blurb */}
					<p
						className='text-pretty text-lg leading-relaxed text-foreground sm:text-xl md:text-2xl 
                        dark:text-foreground'>
						<span
							className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary via-chart-1 to-chart-3 
                              dark:from-chart-3 dark:via-chart-1 dark:to-chart-3'>
							Harmony Creek Golf Centre
						</span>{' '}
						offers an 18-hole executive course, award-winning mini-putt, and full-service event facilities—all minutes from Highway 401. Open to the public since 1992.
					</p>
				</div>
			</div>
		</section>
	);
}
