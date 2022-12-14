import Layout from "@/components/Layout";
import EventItem from "@/components/Eventitem";
import { API_URL } from "@/config/index";
import Link from "next/link";
export default function EventsPage({ events }) {
  console.log("events", events);
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
      {events.length > 0 && (
        <Link  legacyBehavior href="events">
          <a className="btn-secondary">View All</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {

  console.log('!!!!',API_URL)
  // serverless function
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`)
  const events = await res.json()

  console.log('events!!!!',events);
  return {
    // props: { events: events },
    revalidate: 1,
  };
}
