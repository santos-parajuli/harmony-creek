import QuickLinksGrid, { QuickLinks } from '@/components/homepage/quick-links';

import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Hero from '@/components/homepage/hero';
import { IntroBlurb } from '@/components/homepage/intro';
import LogoCloud from '@/components/homepage/partners';
import WhyChooseHarmony from '@/components/homepage/WhyChooseHarmony';

export default function Home() {
	return (
		<div>
			<Header />
			<Hero />
			<IntroBlurb />
			<QuickLinks />
			<WhyChooseHarmony />
			<LogoCloud />
			<Footer />
		</div>
	);
}
