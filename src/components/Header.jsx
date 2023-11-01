import Head from "next/head";

export default function Header(props) {
	const description = props.description
		? props.description
		: "InterlakeClubs - Browse the clubs at Interlake!";

	return (
		<Head>
			<meta charSet="UTF-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content={description} />
			<meta name="keywords" content="Interlake, Clubs, InterlakeClubs" />
			<meta property="og:title" content="InterlakeClubs" />
			<meta property="og:type" content="website" />
			<meta property="og:description" content={description} />
			<meta name="theme-color" content="#000000" />
			<meta name="twitter:card" content="summary_large_image" />

			<title>{props.title}</title>
			<link rel="icon" type="image/x-icon" href="/logo.png" />
		</Head>
	);
}
