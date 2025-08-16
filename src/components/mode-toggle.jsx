'use client';

import { Moon, Sun } from 'lucide-react';
import { Switch, SwitchIndicator, SwitchWrapper } from '@/components/ui/switch';
import { useEffect, useId, useState } from 'react';

import { useTheme } from 'next-themes';

export function ModeToggle() {
	const id = useId();
	const { theme, setTheme, systemTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Prevent hydration mismatch (next-themes best practice)
	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return null;
	}

	// Current effective theme (so "system" resolves properly)
	const currentTheme = theme === 'system' ? systemTheme : theme;

	return (
		<div className='flex items-center space-x-2.5'>
			<SwitchWrapper permanent={true}>
				<Switch id={id} size='xl' checked={currentTheme === 'light'} onCheckedChange={(checked) => setTheme(checked ? 'light' : 'dark')} />
				<SwitchIndicator state='on'>
					<Moon className='size-4 text-muted-foreground' />
				</SwitchIndicator>
				<SwitchIndicator state='off'>
					<Sun className='size-4 text-muted-foreground' />
				</SwitchIndicator>
			</SwitchWrapper>
		</div>
	);
}
