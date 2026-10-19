
import { useState } from "react";
import "./App.css";

const events = [
  {
    id: 1,
    name: "Tech Fest",
    subtitle: "Build. Break. Innovate.",
    category: "TECHNOLOGY",
    icon: "⌘",
    dates: ["2026-11-05", "2026-11-06", "2026-11-07"],
  },
  {
    id: 2,
    name: "Cultural Fest",
    subtitle: "Feel the rhythm.",
    category: "CULTURE",
    icon: "✳",
    dates: ["2026-11-12", "2026-11-13", "2026-11-14"],
  },
  {
    id: 3,
    name: "Sports Meet",
    subtitle: "Play beyond limits.",
    category: "SPORTS",
    icon: "↗",
    dates: ["2026-11-20", "2026-11-21", "2026-11-22"],
  },
  {
    id: 4,
    name: "Hackathon",
    subtitle: "24 hours. One big idea.",
    category: "INNOVATION",
    icon: "⌁",
    dates: ["2026-12-04", "2026-12-05", "2026-12-06"],
  },
];

function formatDate(date) {
  if (!date) return "Date not selected";

  return new Date(`${date}T12:00:00`).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function App() {
  const [theme, setTheme] = useState("dark");
  const [selectedEvent, setSelectedEvent] = useState(events[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventDate, setEventDate] = useState(events[0].dates[0]);
  const [pass, setPass] = useState(null);
  const [error, setError] = useState("");

  function chooseEvent(event) {
    setSelectedEvent(event);
    setEventDate(event.dates[0]);
    setPass(null);
    setError("");
  }

  function generatePass(e) {
    e.preventDefault();

    if (name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("Enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (!eventDate) {
      setError("Please select an event date.");
      return;
    }

    setError("");

    setPass({
      name: name.trim(),
      email,
      phone,
      event: selectedEvent.name,
      category: selectedEvent.category,
      icon: selectedEvent.icon,
      date: eventDate,
      id: `EVT-${Date.now().toString().slice(-7)}`,
    });
  }

  function resetForm() {
    setPass(null);
    setName("");
    setEmail("");
    setPhone("");
    setError("");
  }

  return (
    <main className="app" data-theme={theme}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-symbol">E</span>
          <span>EVENT<span className="brand-light">/PASS</span></span>
        </a>

        <div className="topbar-right">
          <span className="topbar-label">YOUR NEXT EXPERIENCE</span>
          <button
            className="theme-toggle"
            onClick={() =>
              setTheme((current) => current === "dark" ? "light" : "dark")
            }
            type="button"
            aria-label="Toggle light and dark mode"
          >
            <span>{theme === "dark" ? "☼" : "☾"}</span>
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            YOUR ACCESS STARTS HERE
          </div>

          <h1>
            Make it
            <br />
            <span className="gradient-text">an event.</span>
          </h1>

          <p className="hero-description">
            Find your crowd. Pick your date. Get your pass.
            Your next unforgettable experience is just a few clicks away.
          </p>

          <a className="hero-link" href="#registration">
            GET YOUR PASS <span>↘</span>
          </a>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="hero-art-core">E<span>.</span></div>
          <span className="art-tag art-tag-one">CREATE</span>
          <span className="art-tag art-tag-two">CONNECT</span>
          <span className="art-tag art-tag-three">REPEAT ↗</span>
          <div className="art-line art-line-one" />
          <div className="art-line art-line-two" />
        </div>
      </section>

      <section className="events-section" id="events">
        <div className="section-heading">
          <div>
            <span className="section-kicker">01 / EXPLORE</span>
            <h2>Pick your <span>vibe.</span></h2>
          </div>
          <span className="section-count">04 EXPERIENCES</span>
        </div>

        <div className="event-grid">
          {events.map((event, index) => (
            <button
              type="button"
              key={event.id}
              className={`event-card ${
                selectedEvent.id === event.id ? "event-card-active" : ""
              }`}
              onClick={() => chooseEvent(event)}
            >
              <div className={`event-card-art art-${index + 1}`}>
                <span className="event-icon">{event.icon}</span>
                <span className="event-number">0{event.id}</span>
                <span className="card-diagonal card-diagonal-one" />
                <span className="card-diagonal card-diagonal-two" />
              </div>

              <div className="event-card-body">
                <span className="event-category">{event.category}</span>
                <h3>{event.name}</h3>
                <p>{event.subtitle}</p>
                <div className="event-card-footer">
                  <span>{event.dates.length} available dates</span>
                  <span className="event-arrow">
                    {selectedEvent.id === event.id ? "✓" : "↗"}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="registration-section" id="registration">
        <div className="section-heading">
          <div>
            <span className="section-kicker">02 / REGISTER</span>
            <h2>Make it <span>official.</span></h2>
          </div>
          <span className="section-count">ALMOST THERE</span>
        </div>

        <div className="registration-layout">
          <form className="registration-form" onSubmit={generatePass}>
            <div className="selected-event-strip">
              <span className="selected-event-icon">{selectedEvent.icon}</span>
              <div>
                <span className="field-label">YOUR SELECTED EVENT</span>
                <strong>{selectedEvent.name}</strong>
              </div>
              <button
                type="button"
                className="change-event"
                onClick={() =>
                  document.getElementById("events")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                CHANGE ↗
              </button>
            </div>

            <label className="field">
              <span>Full name</span>
              <input
                type="text"
                placeholder="e.g. Tanish Mudgal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                required
              />
            </label>

            <label className="field">
              <span>Email address</span>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </label>

            <label className="field">
              <span>Mobile number</span>
              <input
                type="tel"
                placeholder="10-digit mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                inputMode="numeric"
                maxLength={10}
                autoComplete="tel"
                required
              />
            </label>

            <label className="field">
              <span>Choose your event date</span>
              <select
                value={eventDate}
                onChange={(e) => {
                  setEventDate(e.target.value);
                  setPass(null);
                }}
                required
              >
                {selectedEvent.dates.map((date) => (
                  <option key={date} value={date}>
                    {formatDate(date)}
                  </option>
                ))}
              </select>
              <small className="field-hint">
                Demo dates are provided for this project.
              </small>
            </label>

            {error && <p className="error-message">{error}</p>}

            <button className="generate-button" type="submit">
              GENERATE MY PASS <span>↗</span>
            </button>

            <p className="form-note">
              By generating a pass, you confirm that your details are correct.
            </p>
          </form>

          <div className="pass-preview-wrap">
            <div className="preview-heading">
              <span>LIVE PREVIEW</span>
              <span className="preview-indicator">
                <span /> DIGITAL PASS
              </span>
            </div>

            {pass ? (
              <div className="ticket">
                <div className="ticket-glow" />
                <div className="ticket-topline">
                  <span className="ticket-brand">EVENT<span>/PASS</span></span>
                  <span className="ticket-type">ADMIT ONE</span>
                </div>

                <div className="ticket-graphic">
                  <span className="ticket-graphic-symbol">{pass.icon}</span>
                  <span className="ticket-swipe ticket-swipe-one" />
                  <span className="ticket-swipe ticket-swipe-two" />
                  <span className="ticket-swipe ticket-swipe-three" />
                  <span className="ticket-graphic-label">{pass.category}</span>
                </div>

                <div className="ticket-event-info">
                  <span className="ticket-overline">YOU'RE ON THE LIST</span>
                  <h3>{pass.event}</h3>
                  <p>{pass.name}</p>
                </div>

                <div className="ticket-details">
                  <div>
                    <span>DATE</span>
                    <strong>{formatDate(pass.date)}</strong>
                  </div>
                  <div>
                    <span>PASS ID</span>
                    <strong>{pass.id}</strong>
                  </div>
                </div>

                <div className="ticket-divider">
                  <span />
                  <span />
                </div>

                <div className="ticket-bottom">
                  <div>
                    <span className="ticket-overline">YOUR EXPERIENCE AWAITS</span>
                    <strong>SHOW UP. STAND OUT.</strong>
                  </div>
                  <div className="ticket-stamp">E<span>.</span></div>
                </div>

                <p className="ticket-disclaimer">
                  DEMO PASS · NOT A VALID ENTRY TICKET
                </p>
              </div>
            ) : (
              <div className="empty-pass">
                <div className="empty-pass-lines">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="empty-pass-symbol">E<span>.</span></div>
                <span className="empty-pass-kicker">YOUR NEXT CHAPTER</span>
                <h3>Your pass, your moment.</h3>
                <p>
                  Fill in your details and generate a pass with your event,
                  chosen date, and unique reference ID.
                </p>
                <div className="empty-pass-footer">
                  <span>EVENT / PASS</span>
                  <span>•••• •••• ••••</span>
                </div>
              </div>
            )}

            {pass && (
              <div className="pass-actions">
                <button
                  type="button"
                  className="download-button"
                  onClick={() => window.print()}
                >
                  PRINT / SAVE AS PDF ↗
                </button>
                <button
                  type="button"
                  className="reset-button"
                  onClick={resetForm}
                >
                  CREATE ANOTHER
                </button>
              </div>
            )}

            <p className="preview-note">
              This is a front-end demo. Registrations are not stored on a server.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-symbol">E</span>
          <span>EVENT<span className="brand-light">/PASS</span></span>
        </a>
        <p>MADE FOR MOMENTS THAT MATTER.</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

export default App;
