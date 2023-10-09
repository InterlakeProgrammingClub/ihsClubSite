import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Components.module.css";

export default function Navbar() {
	return (
		<main className={styles.navbar}>
			<div className={styles.navbarMain}>
				<Image src={"/logo.png"} alt={"Logo"} width={75} height={75} />
				<Link href="/">InterlakeClubs</Link>
			</div>
			<div className={styles.navbarLinks}>
				<Link href="/clubs">Club List</Link>
				<Link href="/info">School Info</Link>
				<Link href="/contact">Contact</Link>
			</div>
		</main>
	);
}
