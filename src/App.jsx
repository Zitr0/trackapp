import React from 'react';
import TrackingForm from './components/TrackingForm';
import TrackingHistory from './components/TrackingHistory';
import './index.css';

const App = () => {
  const [history, setHistory] = React.useState([]);
  const [currentStatus, setCurrentStatus] = React.useState(null);

  React.useEffect(() => {
    const savedHistory = localStorage.getItem('trackingHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handleTrack = async (trackingNumber) => {
    try {
      const response = await fetch(`https://portal.envia.co/ServicioRestConsultaEstados/Service1Consulta.svc/ConsultaEstadoGuia/${trackingNumber}`);
      const data = await response.json();
      setCurrentStatus(data);

      // Add a unique ID to each entry
      const newEntry = { ...data, id: Date.now() };
      const updatedHistory = [...history, newEntry];
      setHistory(updatedHistory);
      localStorage.setItem('trackingHistory', JSON.stringify(updatedHistory));
    } catch (error) {
      console.error('Error fetching tracking info:', error);
    }
  };

  const handleDelete = (id) => {
    const updatedHistory = history.filter(item => item.id !== id);
    setHistory(updatedHistory);
    localStorage.setItem('trackingHistory', JSON.stringify(updatedHistory));
  };

  return (
    <div className="app">
      <h1>Consulta guías - Envía</h1>
      <TrackingForm onTrack={handleTrack} />
      {currentStatus && (
        <div className="current-status">
          <h2>Current Status</h2>
          <p>Guide: {currentStatus.guia}</p>
          <p>Status: {currentStatus.estado}</p>
        </div>
      )}
      <TrackingHistory history={history} onTrack={handleTrack} onDelete={handleDelete} />
    </div>
  );
};

export default App;





