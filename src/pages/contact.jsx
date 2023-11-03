import Link from "next/link";
import { Header, Navbar } from "@/components";
import styles from "@/styles/Contact.module.css";

export default function Contact() {
	const url = process.env.NEXT_PUBLIC_FORM_URL;

	return (
		<>
			<Header title="Contact | InterlakeClubs" />
			<main>
				<Navbar />
				<div className={styles.container}>
					<div className={styles.title}>
						<h1>Contact Us</h1>
						<p>Have any questions? We&apos;d love to hear from you.</p>
					</div>

					<div className={styles.contactContainer}>
						<Link
							href="mailto:admin@interlakeprogrammingclub.com"
							className={styles.contactOption}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								viewBox="0 0 75.294 75.294"
							>
								<g>
									<path
										d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
		                c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
		                H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
		                c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
		                c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
		                c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
		                c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"
									/>
								</g>
							</svg>
							<h1>Email</h1>
						</Link>

						<Link
							href="https://github.com/InterlakeProgrammingClub"
							target="_blank"
							className={styles.contactOption}
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
							<h1>GitHub</h1>
						</Link>
					</div>

					{url && (
						<div className={styles.formContainer}>
							<h1>Don&apos;t see your club listed?</h1>
							<iframe
								src={url}
								allowFullScreen={true}
								webkitallowfullscreen="true"
								mozallowfullscreen="true"
								msallowfullscreen="true"
							></iframe>
							<Link href={url} target="_blank">
								Open in New Tab
							</Link>
						</div>
					)}
				</div>
			</main>
		</>
	);
}
