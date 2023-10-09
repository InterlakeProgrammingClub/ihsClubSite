import Head from "next/head";

export default function Header() {
	return (
		<Head>
			<meta charset="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta
				name="description"
				content="InterlakeClubs - Browse the clubs at Interlake!"
			/>
			<meta name="keywords" content="Interlake, Clubs, InterlakeClubs" />
			<meta property="og:title" content="InterlakeClubs" />
			<meta property="og:type" content="website" />
			<meta
				property="og:description"
				content="InterlakeClubs - Browse the clubs at Interlake!"
			/>
			<meta name="theme-color" content="#000000" />
			<meta name="twitter:card" content="summary_large_image" />

			<title>InterlakeClubs</title>
			<link rel="icon" type="image/x-icon" href="/logo.png" />
		</Head>
	);
}
