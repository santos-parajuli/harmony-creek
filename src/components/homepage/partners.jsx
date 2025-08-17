import { InfiniteSlider } from '../ui/infinite-slider';
import { ProgressiveBlur } from '../ui/progressive-blur';

export default function LogoCloud() {
	return (
		<section className='bg-background overflow-hidden py-16'>
			<div className='group relative m-auto max-w-7xl px-6'>
				<div className='flex flex-col items-center md:flex-row'>
					<div className='md:max-w-44 md:border-r md:pr-6'>
						<p className='text-end text-sm'>Our Partners</p>
					</div>
					<div className='relative py-6 md:w-[calc(100%-11rem)]'>
						<InfiniteSlider speedOnHover={20} speed={40} gap={80}>
							<div className='flex items-center justify-center'>
								<img className='h-10 w-auto' src='/images/logo/GOCO.svg' alt='GOCO Logo' />
							</div>
							<div className='flex items-center justify-center'>
								<img className='h-10 w-auto' src='/images/logo/ngcoa.svg' alt='ngcoa Logo' />
							</div>
							<div className='flex items-center justify-center'>
								<img className='h-10 w-auto' src='/images/logo/orhma.png' alt='orhma Logo' />
							</div>
							<div className='flex items-center justify-center'>
								<img className='h-10 w-auto invert dark:invert-0' src='/images/logo/resturantcanada.png' alt='resturantcanada Logo' />
							</div>
							<div className='flex items-center justify-center'>
								<img className='h-10 w-auto' src='/images/logo/award.png' alt='award Logo' />
							</div>
						</InfiniteSlider>

						<div className='bg-linear-to-r from-background absolute inset-y-0 left-0 w-20'></div>
						<div className='bg-linear-to-l from-background absolute inset-y-0 right-0 w-20'></div>
						<ProgressiveBlur className='pointer-events-none absolute left-0 top-0 h-full w-20' direction='left' blurIntensity={1} />
						<ProgressiveBlur className='pointer-events-none absolute right-0 top-0 h-full w-20' direction='right' blurIntensity={1} />
					</div>
				</div>
			</div>
		</section>
	);
}
