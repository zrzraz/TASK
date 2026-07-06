import { useState } from "react";
import LibraryModal from "../../components/LibraryModal/LibraryModal";

export default function Login() {
  const [started, setStarted] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setShowModal(true);
  }

  return (
    <main className="welcome-page">
      <section className="hero-section">
        <p className="tag">Student-centered local discovery</p>
        <h1>Discover opportunities beyond the classroom.</h1>
        <p>
          T.A.S.K. helps students connect with libraries, parks, workshops,
          tutoring, and community spaces near their school.
        </p>

        {!started && (
          <button className="btn primary hero-btn" onClick={() => setStarted(true)}>
            Get Started
          </button>
        )}
      </section>

      {started && (
        <section className="login-card">
          <h2>Welcome to T.A.S.K.</h2>
          <p className="subtext">
            Enter your school information to personalize nearby opportunities.
          </p>

          <form onSubmit={handleSubmit}>
            <label>School Name</label>
            <input
              type="text"
              placeholder="Example: City College of New York"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              required
            />

            <label>Student ID</label>
            <input
              type="text"
              placeholder="Enter your student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            />

            <button className="btn primary" type="submit">
              Continue
            </button>

            <button
              className="btn secondary"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Continue as Guest
            </button>
          </form>
        </section>
      )}

      {showModal && (
        <LibraryModal
          schoolName={schoolName || "Guest Access"}
          studentId={studentId || "Guest"}
          onClose={() => setShowModal(false)}
        />
      )}
    </main>
  );
}