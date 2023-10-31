import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Header, Navbar } from "@/components";
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
	info = info
		? JSON.parse(JSON.stringify(info).replace(/""/g, '"No Info Provided"'))
		: "";

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
								<td>Every {info?.day}</td>
							</tr>
							<tr>
								<td>Contact</td>
								<td>
									{info?.contact === "No Info Provided" ? (
										info?.contact
									) : (
										<Link href={`mailto:${info?.contact}`}>
											{info?.contact}
										</Link>
									)}
								</td>
							</tr>
							<tr>
								<td>Club Contact</td>
								<td>
									{info?.clubcontact === "No Info Provided" ? (
										info?.clubcontact
									) : (
										<Link href={`mailto:${info?.clubcontact}`}>
											{info?.clubcontact}
										</Link>
									)}
								</td>
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
