import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Components.module.css";

export default function Club(item) {
	return (
		<Link href={item.route} key={item.index} className={styles.club}>
			<div className={styles.clubImageContainer}>
				{item.image === "" ? (
					<svg
						version="1.0"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 200.000000 200.000000"
					>
						<g
							transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
							fill="#000000"
							stroke="none"
						>
							<path d="M215 1780 c-11 -12 -15 -27 -12 -42 9 -35 1517 -1538 1543 -1538 30 0 58 34 51 62 -9 35 -1517 1538 -1543 1538 -12 0 -29 -9 -39 -20z" />
							<path d="M570 1575 l44 -45 458 0 458 0 0 -357 0 -357 -44 64 c-52 75 -75 89 -138 90 -39 0 -54 -5 -80 -30 l-33 -29 193 -193 192 -193 0 536 c0 403 -3 538 -12 547 -9 9 -144 12 -547 12 l-535 0 44 -45z" />
							<path d="M380 939 c0 -403 3 -538 12 -547 9 -9 144 -12 547 -12 l536 0 -360 360 c-198 198 -362 360 -365 359 -3 0 -66 -75 -140 -166 l-135 -166 -3 309 -2 310 -45 44 -45 44 0 -535z" />
							<path d="M1141 1367 c-81 -41 -87 -163 -9 -203 61 -32 134 -8 163 52 45 96 -59 200 -154 151z" />
						</g>
					</svg>
				) : (
					<Image
						src={item.image}
						alt={`${item.name}'s Logo`}
						width={100}
						height={100}
						className={styles.clubLogo}
					/>
				)}
			</div>

			<div className={styles.clubTextInfo}>
				<h1>{item.name}</h1>
				<div className={styles.descriptionContainer}>
					{item.description === "" ? (
						<i>No Description Provided</i>
					) : (
						<p>{item.description}</p>
					)}
				</div>
			</div>
		</Link>
	);
}
