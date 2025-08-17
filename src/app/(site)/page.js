import AmenitiesGrid from '@/components/ameneties';
import Hero from '@/components/homepage/hero';
import { IntroBlurb } from '@/components/homepage/intro';
import LogoCloud from '@/components/homepage/partners';
import { QuickLinks } from '@/components/homepage/quick-links';
import WhyChooseHarmony from '@/components/homepage/WhyChooseHarmony';

export default function Home() {
	return (
		<div>
			<Hero />
			<IntroBlurb />
			<QuickLinks />
			<WhyChooseHarmony />
			<AmenitiesGrid />
			<LogoCloud />
		</div>
	);
}
