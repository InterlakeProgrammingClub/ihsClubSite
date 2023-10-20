import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Components.module.css";

export default function Navbar() {
	return (
		<main className={styles.navbar}>
			<Link href="/" className={styles.navbarMain}>
				<Image src={"/logo.png"} alt={"Logo"} width={75} height={75} />
				<p>InterlakeClubs</p>
			</Link>
			<div className={styles.navbarLinks}>
				<Link href="/clubs">Clubs</Link>
				<Link href="/info">Info</Link>
				<Link href="/contact">Contact</Link>
			</div>
		</main>
	);
}
