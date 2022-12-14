import { useRouter } from "next/router";
import Image from 'next/image'
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";
import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
export default function EventPage({ evt }) {
  // const router = useRouter()
  // console.log('router?',router)

  const deleteEvent = (e) => {
    console.log("delete!!");
  };
  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link legacyBehavior href={`/event/edit/${evt.id}`}>
            <a>
              <FaPencilAlt />
              Edit event
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>
      </div>
      <span>
        {evt.date} at {evt.time}
      </span>
      <h1>{evt.name}</h1>
      {evt.image && (
        <div className={styles.image}>
          <Image src={evt.image} width={960} height={600} />
        </div>
      )}
      <h3>Performers:</h3>
      <p>{evt.performers}</p>
      <h3>Description:</h3>
      <p>{evt.description}</p>
      <h3>Venue:{evt.venue}</h3>
      <p>{evt.address}</p>
      <Link legacyBehavior href='/events'>
        <a className={styles.back}>{'<'}Go BACK</a>
      </Link>
      {/* <h3>{router.query.slug}</h3>
        <button onClick={()=>router.push('/')}>Click!</button> */}
    </Layout>
  );
}

export async function getStaticPath() {
  const res = await fetch(`${API_URL / api / events}`);
  const events = await res.json();
  const paths = events.map((evt) => ({ params: { slug: evt.slug } }));
  return {
    paths,
    fallback: false,
  };
}
export async function getServerSideProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();
  return {
    props: {
      evt: events[0],
    },
  };
}
