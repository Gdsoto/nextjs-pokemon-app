// Next
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';

// Styles
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<NextUIProvider>
			<Component {...pageProps} />
		</NextUIProvider>
	);
}

export default MyApp;
