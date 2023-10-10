import "@/styles/globals.css";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({ subsets: ["latin"] });	

export default function App({ Component, pageProps }) {
	return (
		<main className={gabarito.className}>
			<Component {...pageProps} />;
		</main>
	);
}
