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

	let info = data.find((item) => item.route === `/${club}`);
	info = info ? info : "";

	return (
		<>
			<Header
				title={`${info.name} | InterlakeClubs`}
				description={`${info.name} - See info now at InterlakeClubs`}
			/>
			<main>
				<Navbar />
				<div className={styles.title}>
					<h1>{info.name}</h1>
				</div>

				<div className={styles.infoTable}>
					<h2>Club Information</h2>
					<table>
						<tbody>
							<tr>
								<td>Club Name</td>
								<td>{info?.name}</td>
							</tr>
							<tr>
								<td>Description:</td>
								<td>{info?.description}</td>
							</tr>
							<tr>
								<td>Meeting Schedule</td>
								<td>{info?.schedule}</td>
							</tr>
							<tr>
								<td>Contact</td>
								<td>{info?.contact}</td>
							</tr>
							<tr>
								<td>Club Contact</td>
								<td>{info?.clubcontact}</td>
							</tr>
							<tr>
								<td>Room</td>
								<td>{info?.room}</td>
							</tr>
							<tr>
								<td>Advisor</td>
								<td>{info?.advisor}</td>
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
