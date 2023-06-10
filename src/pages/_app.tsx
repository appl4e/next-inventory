import "@/styles/global.scss";
import { apolloClient } from "@/utils/apolloClient";
import { emotionCache } from "@/utils/emotionCache";
import { ApolloProvider } from "@apollo/client";
import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={apolloClient}>
			<MantineProvider emotionCache={emotionCache}>
				<Component {...pageProps} />
			</MantineProvider>
		</ApolloProvider>
	);
}
