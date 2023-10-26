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
				<div className={styles.dropdown}>
					<button onClick={() => location.href = "/clubs"} className = {styles.navbutton}>Clubs</button>
					<div className={styles.dropdowncontent}>
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
					</div>
				</div>
				<Link href="/info">Info</Link>
				<Link href="/contact">Contact</Link>
			</div>
		</main>
	);
}
