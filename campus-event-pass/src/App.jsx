import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import EventPass from "./components/EventPass";
import "./App.css";

function App() {
  const [submitted, setSubmitted] = useState(false);

  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
  });

  const handleFormSubmit = (data) => {
    setRegistrationData(data);
    setSubmitted(true);
  };

  const handleEdit = () => {
    setSubmitted(false);
  };

  const handleReset = () => {
    setRegistrationData({
      name: "",
      email: "",
      phone: "",
      event: "",
    });

    setSubmitted(false);
  };

  return (
    <div className="app">

      {!submitted ? (
        <RegistrationForm onSubmit={handleFormSubmit} />
      ) : (
        <EventPass
          data={registrationData}
          onEdit={handleEdit}
          onReset={handleReset}
        />
      )}

    </div>
  );
}

export default App;