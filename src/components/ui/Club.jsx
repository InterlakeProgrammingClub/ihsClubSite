import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Components.module.css";

export default function Club(item) {
	return (
		<Link href={item.route} key={item.index} className={styles.club}>
			<div className={styles.clubImageContainer}>
				<Image
					src={item.image}
					alt={`${item.name}'s Logo`}
					width={100}
					height={100}
					className={styles.clubLogo}
				/>
			</div>

			<div className={styles.clubTextInfo}>
				<h1>{item.name}</h1>
				<div className={styles.descriptionContainer}>
					<p>{item.description}</p>
				</div>
			</div>
		</Link>
	);
}
