// components/intro-blurb.tsx
export function IntroBlurb() {
	return (
		<section className='relative w-full'>
			<div className='mx-auto max-w-7xl px-4 py-4 sm:py-4 md:py-4'>
				{/* Subtle glow / ring */}
				<div
					className='relative rounded-2xl border border-zinc-200/60 bg-white/60 p-6 shadow-sm backdrop-blur-sm 
                        dark:border-zinc-800/60 dark:bg-zinc-900/50'>
					<div
						className='pointer-events-none absolute inset-0 rounded-2xl 
                          [mask-image:radial-gradient(150%_100%_at_50%_0%,black,transparent)] 
                          shadow-[0_0_60px_10px_rgba(99,102,241,0.08)] dark:shadow-[0_0_80px_12px_rgba(99,102,241,0.12)]'
					/>

					{/* Badge */}
					<div
						className='mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium 
                          text-zinc-700 dark:border-zinc-800 dark:text-zinc-300'>
						<span className='h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500' />
						Harmony Creek Golf Centre
					</div>

					{/* Blurb */}
					<p
						className='text-pretty text-lg leading-relaxed text-zinc-800 sm:text-xl md:text-2xl 
                        dark:text-zinc-200'>
						<span
							className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 
                              dark:from-indigo-400 dark:via-sky-400 dark:to-emerald-400'>
							Harmony Creek Golf Centre
						</span>{' '}
						offers an 18-hole executive course, award-winning mini-putt, and full-service event facilities—all minutes from Highway 401. Open to the public since 1992.
					</p>
				</div>
			</div>
		</section>
	);
}
