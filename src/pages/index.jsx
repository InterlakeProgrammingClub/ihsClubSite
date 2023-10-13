import Link from "next/link";
import Image from "next/image";
import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import styles from "@/styles/Index.module.css";

export default function Home() {
	return (
		<>
			<Header title="InterlakeClubs" />
			<main>
				<Navbar />
				<div className={styles.container}>
					<div className={styles.info}>
						<h1>Interlake Clubs</h1>
						<p>
							See all the club info for Interlake Highschool, quickly and easily
						</p>
						<Link href="/clubs" className={styles.redirect}>
							<span>Get Started Now</span>
						</Link>
					</div>
					<div className={styles.imageContainer}>
						<Image src={"/logo.png"} alt={"Logo"} width={100} height={100} />
					</div>
				</div>
			</main>
		</>
	);
}
