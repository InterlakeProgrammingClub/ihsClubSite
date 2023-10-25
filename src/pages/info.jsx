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
          <h1>About Us</h1>
          <p
            style={{"width":"80vw","margin":"auto"}}
          >
            Interlake is a high school that exists on earth. In the high school
            contains a bunch of kids who wanted to do things that aren't
            included in the school curriculum. Therefore people started what we
            call clubs do get together and do something they all like. One
            particular club, the Interlake Programming Club, decided to start a
            small website to display all the clubs that one can join in
            interlake. I don't know much about this website, but it seems pretty
            similar to the one you are on right now.
          </p>
          <h1 style={{"marginTop":"20vh"}}>FAQs</h1>
          <div className={styles.faqContainer}>
            <div className={styles.faqBox}>
              <strong>How do I join a club?</strong>
              <p>On the clubs page, there are multiple clubs that you can join. If you click on one that seems intresting, it should give you information about which room that club is in and what time. Just go into the club at that time and see if they accept you. If they yell at you to get out and sign up a different way, tell us in the "Contact Us" page</p>
            </div>
            <div className={styles.faqBox}>
              <strong>How do I know what club to join?</strong>
              <p>On the clubs page, there are descriptions of the many clubs offered at Interlake. Just read the descriptions and see which one looks intresting to you.</p>
            </div>
            <div className={styles.faqBox}>
              <strong>Why should I join a club?</strong>
              <p>It's fun? Usually people join clubs to get together with people who have the same interest as themselves, however if you are asking this question you probably don't know what you are passionate about. In that case... get a life.</p>
            </div>
            <div className={styles.faqBox}>
              <strong>Why is this page so horribly designed?</strong>
              <p>Hey, that's not nice</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
