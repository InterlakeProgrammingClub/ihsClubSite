import { Header, Navbar, Club } from "@/components";
import data from "@/json/clubs.json";
import styles from "@/styles/Clubs.module.css";

export default function Clubs() {
	return (
		<>
			<Header title="Clubs | InterlakeClubs" />
			<main>
				<Navbar />
				<div className={styles.title}>
					<h1>Club List</h1>
					<p>Choose from the list of clubs that Interlake has to offer!</p>
				</div>

				<div className={styles.clubContainer}>
					{data.map((item, index) => (
						<Club
							route={item.route}
							key={index}
							name={item.name}
              description={item.description}
							image={item.image}
						/>
					))}
				</div>
			</main>
		</>
	);
}
