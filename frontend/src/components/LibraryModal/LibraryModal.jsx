import { useNavigate } from "react-router-dom";
import { libraries } from "../../data/mockData";

export default function LibraryModal({ schoolName, studentId, onClose }) {
  const navigate = useNavigate();

  function handleSelect(place) {
    navigate("/events", {
      state: {
        selectedPlace: place,
        schoolName,
        studentId,
      },
    });
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <p className="tag">Nearby learning spaces</p>
        <h2>Choose a library or community space</h2>
        <p>
          Based on <strong>{schoolName || "your school"}</strong>, here are
          nearby places for student-friendly events.
        </p>

        <div className="library-list">
          {libraries.map((place) => (
            <button
              key={place.id}
              className="library-card"
              onClick={() => handleSelect(place)}
            >
              <div>
                <h3>{place.name}</h3>
                <p>
                  {place.type} • {place.distance}
                </p>
                <small>{place.note}</small>
              </div>
              <span>→</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}