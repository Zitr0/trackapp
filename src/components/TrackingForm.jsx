import React, { useState } from 'react';

const TrackingForm = ({ onTrack }) => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (trackingNumber) {
      onTrack(trackingNumber);
      setTrackingNumber('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="tracking-form">
      <input
        type="text"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        placeholder="Enter tracking number"
        className="tracking-input"
      />
      <button type="submit" className="tracking-button">Track</button>
    </form>
  );
};

export default TrackingForm;
