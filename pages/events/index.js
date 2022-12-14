import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import EventItem from "@/components/Eventitem";

export default function EventsPage({ events}) {
  return (
    <Layout title="Add New Event">
    <h1>Events</h1>

    {events.length === 0 && <h3>No events to show</h3>}

{events.map((evt) => (
  <EventItem key={evt.id} evt={evt} />
))}

  </Layout>
  )
}



export async function getStaticProps() {
  // serverless function
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  console.log(events);
  return {
    props: { events: events.slice(0, 3) },
    revalidate: 1,
  };
}