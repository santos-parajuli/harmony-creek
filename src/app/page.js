import Header from '@/components/header/header';
import Hero from '@/components/homepage/hero';
import QuickLinksGrid from '@/components/homepage/quick-links';

export default function Home() {
	return (
		<div>
			<Header />
			<Hero />
			<QuickLinksGrid />
		</div>
	);
}
