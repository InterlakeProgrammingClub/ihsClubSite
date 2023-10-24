import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import data from "@/json/clubs.json";
import styles from "@/styles/[club].module.css";

export default function ClubPage({ club }) {
	const router = useRouter();

	useEffect(() => {
		const routes = data.map((item) => item.route);

		if (!routes.includes(`/${club}`) && club !== "404") {
			router.push("/404");
		}
	});

	const index = data.find((item) => item.route === `/${club}`);
	const title = club.charAt(0).toUpperCase() + club.slice(1);

	return (
		<>
			<Header
				title={`${title} Club | InterlakeClubs`}
				description={`${title} Club - See info now at InterlakeClubs`}
			/>
			<main>
				<Navbar />
				<div className={styles.title}>
					<h1>{title} Club</h1>
				</div>

				<div className={styles.infoTable}>
					<h2>Club Information</h2>
					<table>
						<tbody>
							<tr>
								<td>Club Name</td>
								<td>{index?.name}</td>
							</tr>
							<tr>
								<td>Description:</td>
								<td>{index?.description}</td>
							</tr>
							<tr>
								<td>Meeting Schedule</td>
								<td>{index?.schedule}</td>
							</tr>
							<tr>
								<td>Contact</td>
								<td>{index?.contact}</td>
							</tr>
							<tr>
								<td>Club Contact</td>
								<td>{index?.clubcontact}</td>
							</tr>
							<tr>
								<td>Room</td>
								<td>{index?.room}</td>
							</tr>
							<tr>
								<td>Advisor</td>
								<td>{index?.advisor}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</main>
		</>
	);
}

export async function getServerSideProps({ params }) {
	const { club } = params;

	return {
		props: {
			club,
		},
	};
}
