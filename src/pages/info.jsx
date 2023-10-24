import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import styles from "@/styles/Info.module.css";

export default function Info() {
	return (
		<>
			<Header title="Info | InterlakeClubs" />
			<main>
				<Navbar />
				<div className={styles.title}>
					<h1>Info</h1>
					<p>
						Interlake is a bing bong ding dong school that houses a bunch of
						nerds. We are not smart enough to do any real programs that require
						skill, so we just have a website that shows a bunch of clubs that
						you can join if you are in this school. Bye.
					</p>
				</div>
			</main>
		</>
	);
}
