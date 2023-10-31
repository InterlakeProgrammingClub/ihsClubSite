import Link from "next/link";
import { Header, Navbar } from "@/components";
import styles from "@/styles/404.module.css";

export default function NotFound() {
	return (
		<>
			<Header title="404 | InterlakeClubs" />
			<main>
				<Navbar />
				<div className={styles.title}>
					<h1>404 - Not Found</h1>
					<p>What are you doing here!? Go join a club!</p>

					<Link href="/" className={styles.return}>
						<span>Return Home</span>
					</Link>
				</div>
			</main>
		</>
	);
}
