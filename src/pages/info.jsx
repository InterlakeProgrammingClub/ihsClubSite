import { useEffect } from "react";
import Link from "next/link";
import { Header, Navbar } from "@/components";
import styles from "@/styles/Info.module.css";

export default function Info() {
	const startEndTime = process.env.NEXT_PUBLIC_START_END_TIME;
	const wednesdayStartEndTime =
		process.env.NEXT_PUBLIC_WEDNESDAY_START_END_TIME;

	const show = (event) => {
		const style = document.getElementById("text" + event.target.id).style;
		document.getElementById("text" + event.target.id).className =
			styles.infoDescription;

		if (style.height == "0px") {
			setTimeout(() => {
				style.height =
					document.getElementById("text" + event.target.id).scrollHeight + "px";
			}, 10);
		} else {
			setTimeout(() => {
				style.height = "0px";
			}, 10);
		}
	};

	useEffect(() => {
		let counter = 0;
		for (const node of document.getElementsByClassName(
			styles.accordianWrapper
		)) {
			node.childNodes[0].id = counter;
			node.childNodes[0].childNodes[0].id = counter;
			node.childNodes[0].childNodes[1].id = counter;
			node.childNodes[0].childNodes[2].id = counter;
			node.childNodes[1].id = "text" + counter;
			node.childNodes[1].style.height = "0px";
			node.childNodes[1].className = styles.infoDescription;
			counter++;
		}
	});

	return (
		<>
			<Header title="Info | InterlakeClubs" />
			<main>
				<Navbar />
				<div className={styles.container}>
					<div className={styles.aboutContainer}>
						<h1>About Us</h1>
						<p>
							Interlake is a high school that exists on earth. In the high
							school contains a bunch of kids who wanted to do things that
							aren&apos;t included in the school curriculum. Therefore people
							started what we call clubs do get together and do something they
							all like. One particular club, the Interlake Programming Club,
							decided to start a small website to display all the clubs that one
							can join in interlake. I don&apos;t know much about this website,
							but it seems pretty similar to the one you are on right now.
						</p>
					</div>

					<div className={styles.faqWrapper}>
						<h1>FAQs</h1>
						<div className={styles.faqContainer} id="faqContainer">
							<div className={styles.accordianWrapper}>
								<div className={styles.faqAccordian} onClick={show}>
									<p style={{ textAlign: "center" }}>+</p>
									<p className={styles.faqTitle}>How do I join a club?</p>
									<p>+</p>
								</div>
								<p>
									On the clubs page, there are multiple clubs that you can join.
									If you click on one that seems intresting, it should give you
									information about which room that club is in and what time.
									Just go into the club at that time and see if they accept you.
									If they yell at you to get out and sign up a different way,
									tell us in the <Link href="/contact">Contact Us</Link> page
								</p>
							</div>
							<div className={styles.accordianWrapper}>
								<div className={styles.faqAccordian} onClick={show}>
									<p>+</p>
									<p className={styles.faqTitle}>
										How do I know what club to join?
									</p>
									<p>+</p>
								</div>
								<p>
									On the clubs page, there are descriptions of the many clubs
									offered at Interlake. Just read the descriptions and see which
									one looks interesting to you.
								</p>
							</div>
							<div className={styles.accordianWrapper}>
								<div className={styles.faqAccordian} onClick={show}>
									<p>+</p>
									<p className={styles.faqTitle}>Why should I join a club?</p>
									<p>+</p>
								</div>
								<p>
									It&apos;s fun? Usually people join clubs to get together with
									people who have the same interest as themselves, however if
									you are asking this question you probably don&apos;t know what
									you are passionate about. In that case... get a life.
								</p>
							</div>
							<div className={styles.accordianWrapper}>
								<div className={styles.faqAccordian} onClick={show}>
									<p>+</p>
									<p className={styles.faqTitle}>
										Why is this page so horribly designed?
									</p>
									<p>+</p>
								</div>
								<p>Hey, that&apos;s not nice</p>
							</div>
							<div className={styles.accordianWrapper}>
								<div className={styles.faqAccordian} onClick={show}>
									<p>+</p>
									<p className={styles.faqTitle}>Why is my club not listed?</p>
									<p>+</p>
								</div>
								<p>
									If you would like your club to be listed, you can fill out a
									form on the <Link href="/contact">contact page</Link>.
								</p>
							</div>
							<div className={styles.accordianWrapper}>
								<div className={styles.faqAccordian} onClick={show}>
									<p>+</p>
									<p className={styles.faqTitle}>
										What time does club x start?
									</p>
									<p>+</p>
								</div>
								<p>
									The usual time for normal days is from{" "}
									{startEndTime ? startEndTime : "3:30 - 4:10"}, and on
									Wednesdays it is from{" "}
									{wednesdayStartEndTime ? wednesdayStartEndTime : "1:00-2:00"}.
									However, this is not the case for all clubs. If you would like
									to get the exact start and end times, please contact the club
									via email.
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
