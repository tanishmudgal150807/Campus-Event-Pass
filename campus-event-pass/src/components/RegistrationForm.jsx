import { useState } from "react"; //store and manage data using functional components

function RegistrationForm({ onSubmit }) {
  const [formData, setFormData] = useState({ /* Stores the user's input data for the registration form */
    name: "",
    email: "",
    phone: "",
    event: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => { //when user changes input, it runs, e = event object
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.event) {
      newErrors.event = "Please select an event";
    }

    return newErrors;
  };

  const handleSubmit = (e) => { //runs when user submits the form
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({}); //clears previous errors
    onSubmit(formData);
  };

  return (
    <div className="form-card"> {/*JSX allows us to write HTML-like syntax inside JavaScript*/}
      <h2>Campus Event Registration</h2>
      <p className="subtitle">
        Register for your favourite campus event
      </p>

      <form onSubmit={handleSubmit}>

        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange} // updates react state
        />
        {errors.name && <p className="error">{errors.name}</p>} 

        <label>Email</label>
        <input
          type="email"
          name="email" // Identifies this field for handleChange
          placeholder="Enter your email"
          value={formData.email} // Controlled input: value comes from React state
          onChange={handleChange} // Updates state when user types
        />

        {/* Conditional rendering: shows error only if it exists */}
        {errors.email && <p className="error">{errors.email}</p>}


        <label>Phone Number</label>
        <input
          type="text"
          name="phone" // Identifies this field for handleChange
          placeholder="Enter 10-digit phone number"
          value={formData.phone}
          onChange={handleChange}
        />

        {errors.phone && <p className="error">{errors.phone}</p>}


        <label>Select Event</label>

        {/* Dropdown for selecting an event */}
        <select
          name="event"
          value={formData.event}
          onChange={handleChange}
        >
          <option value="">-- Choose an Event --</option>
          <option value="Tech Fest 2026">Tech Fest 2026</option>
          <option value="Cultural Fest 2026">Cultural Fest 2026</option>
          <option value="Sports Meet 2026">Sports Meet 2026</option>
          <option value="Hackathon 2026">Hackathon 2026</option>
        </select>

        {errors.event && <p className="error">{errors.event}</p>}


        {/* Submits the form and triggers the form's onSubmit handler */}
        <button type="submit">
          Generate Event Pass
        </button>

      </form>
    </div>
  );
}

export default RegistrationForm; // Makes component available to other files