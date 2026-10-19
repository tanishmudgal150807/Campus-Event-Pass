// EventPass receives the registration data and two functions from the parent component
function EventPass({ data, onEdit, onReset }) {

  return (
    <div className="pass-container">

      <div className="event-pass">

        {/* Header section of the digital event pass */}
        <div className="pass-header">
          <span>🎟️</span>
          <h2>CAMPUS EVENT PASS</h2>
        </div>

        {/* Displays the event selected during registration */}
        <div className="pass-event">
          <h1>{data.event}</h1>
          <p>Official Event Registration Pass</p>
        </div>

        {/* Displays the user's registration details */}
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

        {/* Shows that the registration was successfully completed */}
        <div className="pass-status">
          ✓ REGISTRATION CONFIRMED
        </div>

      </div>

      <div className="pass-buttons">

        {/* Calls the onEdit function to go back and modify registration details */}
        <button onClick={onEdit}>
          Edit Registration
        </button>

        {/* Calls onReset to clear the current registration and generate a new pass */}
        <button onClick={onReset} className="reset-button">
          Generate New Pass
        </button>

      </div>

    </div>
  );
}

export default EventPass;