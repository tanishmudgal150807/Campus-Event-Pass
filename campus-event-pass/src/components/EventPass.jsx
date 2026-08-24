function EventPass({ data, onEdit, onReset }) {
  return (
    <div className="pass-container">

      <div className="event-pass">

        <div className="pass-header">
          <span>🎟️</span>
          <h2>CAMPUS EVENT PASS</h2>
        </div>

        <div className="pass-event">
          <h1>{data.event}</h1>
          <p>Official Event Registration Pass</p>
        </div>

        <div className="pass-details">

          <div className="detail">
            <span>Name</span>
            <strong>{data.name}</strong>
          </div>

          <div className="detail">
            <span>Email</span>
            <strong>{data.email}</strong>
          </div>

          <div className="detail">
            <span>Phone</span>
            <strong>{data.phone}</strong>
          </div>

          <div className="detail">
            <span>Date</span>
            <strong>15 September 2026</strong>
          </div>

          <div className="detail">
            <span>Venue</span>
            <strong>University Main Auditorium</strong>
          </div>

        </div>

        <div className="pass-status">
          ✓ REGISTRATION CONFIRMED
        </div>

      </div>

      <div className="pass-buttons">
        <button onClick={onEdit}>
          Edit Registration
        </button>

        <button onClick={onReset} className="reset-button">
          Generate New Pass
        </button>
      </div>

    </div>
  );
}

export default EventPass;