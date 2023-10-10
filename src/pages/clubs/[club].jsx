import { useRouter } from "next/router";

export default function ClubPage() {
	const router = useRouter();

	return <h1>{router.query.club}</h1>;
}
