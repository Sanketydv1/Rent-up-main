import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import "./EnqueryNow.css";

const EnqueryForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleEnquiryClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  return (
    <div  className={`enquery-link-box ${showForm ? 'show-form' : ''}`}  style={{ float: 'right' }}>
      <Link to="#" onClick={handleEnquiryClick}>ENQUIRY NOW</Link>
      {showForm && (
        <div className="enquery-form-popup">
          <div className="enquery-form-container">
            <form>
              <label>Name:</label>
              <input type="text" name="name" />
              <br />
              <label>Email:</label>
              <input type="email" name="email" />
              <br />
              <label className='message'>Mobile:</label>
              <input type="Mobile" name="mobile" />
              <br />
              <button className="submit"  type="submit">Send Enquiry</button>
            <button className="close-btn" onClick={handleFormClose}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnqueryForm;