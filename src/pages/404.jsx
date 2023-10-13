import Link from "next/link";
import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import styles from "@/styles/404.module.css";

export default function NotFound() {
	return (
		<>
			<Header title="404 | InterlakeClubs" />
			<main>
				<Navbar />
				<div className={styles.container}>
					<h1>404 - Not Found</h1>
					<p>The page you were looking for was not found.</p>

					<Link href="/" className={styles.return}>
						<span>Return Home</span>
					</Link>
				</div>
			</main>
		</>
	);
}
