import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <Link to={`/events/${event.id}`} className="event-card">
      <div className="event-image">
        <span>{event.category}</span>
      </div>

      <div className="event-content">
        <p className="event-date">
          {event.date} • {event.time}
        </p>
        <h3>{event.title}</h3>
        <p>{event.location}</p>
        <p className="age-group">{event.ageGroup}</p>
      </div>
    </Link>
  );
}