import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Components.module.css";
import data from "@/json/clubs.json";

export default function Navbar() {
	return (
		<main className={styles.navbar}>
			<Link href="/" className={styles.navbarMain}>
				<Image
					src={"/logo.png"}
					alt={"Logo"}
					width={100}
					height={100}
					priority={true}
				/>
				<p>InterlakeClubs</p>
			</Link>
			<div className={styles.navbarLinks}>
				<div className={styles.dropdown}>
					<Link href="/clubs">Clubs</Link>
					<div className={styles.dropdowncontent}>
						{data.map((item, index) => (
							<Link href={item.route} key={index}>
								{item.name}
							</Link>
						))}
					</div>
				</div>
				<Link href="/info">Info</Link>
				<Link href="/contact">Contact</Link>
			</div>
		</main>
	);
}
