import { useLocation } from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard";
import { events } from "../../data/mockData";

export default function Events() {
  const location = useLocation();
  const selectedPlace = location.state?.selectedPlace;
  const schoolName = location.state?.schoolName || "your school";

  const displayedEvents = selectedPlace
    ? events.filter((event) => event.location === selectedPlace.name)
    : events;

  return (
    <main className="events-page">
      <section className="events-header">
        <p className="tag">Personalized opportunities</p>
        <h1>Events near {selectedPlace ? selectedPlace.name : schoolName}</h1>
        <p>
          Browse student-friendly programs at libraries, parks, and community
          spaces.
        </p>
      </section>

      <section className="filters">
        <button>All</button>
        <button>STEM</button>
        <button>Arts</button>
        <button>Outdoors</button>
        <button>College Prep</button>
      </section>

      <section className="events-grid">
        {displayedEvents.length > 0 ? (
          displayedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <p>No events found for this location yet.</p>
        )}
      </section>
    </main>
  );
}