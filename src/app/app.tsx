import type { AppProps } from 'next/app';
import ReduxProvider from "./components/ReduxProvider";  // Import the ReduxProvider

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>  {/* Wrap the app with ReduxProvider */}
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default MyApp;