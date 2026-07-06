import { useParams, Link } from "react-router-dom";
import { events } from "../../data/mockData";

export default function EventDetails() {
  const { id } = useParams();

  const event = events.find((item) => item.id === Number(id));

  if (!event) {
    return (
      <div>
        <h1>Event not found</h1>
        <Link to="/events">Back</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>

      <Link to="/events">← Back to Events</Link>
    </div>
  );
}