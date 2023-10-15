import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import data from "@/json/clubs.json";
import styles from "@/styles/ClubPage.module.css";

export default function ClubPage({ club }) {
	const router = useRouter();

	useEffect(() => {
		const routes = data.map((item) => item.route);

		if (!routes.includes(`/${club}`) && club !== "404") {
			router.push("/404");
		}
	});

	const title = club.charAt(0).toUpperCase() + club.slice(1);

	return (
		<>
			<Header
				title={`${title} Club | InterlakeClubs`}
				description={`${title} Club - See info now at InterlakeClubs`}
			/>
			<main>
				<Navbar />
				<div className={styles.titleContainer}>
					<h1>{title} Club</h1>
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
