import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingContainer() {
  const [selectedTab, setSelectedTab] = useState('Economy Class');
  const [origin, setOrigin] = useState('JAI');
  const [destination, setDestination] = useState('DEL');

  // Get the current date in YYYY-MM-DD format
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Add leading zero
    const day = String(today.getDate()).padStart(2, '0'); // Add leading zero
    return `${year}-${month}-${day}`;
  };

  const [departureDate, setDepartureDate] = useState(getCurrentDate());
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [tripType, setTripType] = useState('oneWay');
  const navigate = useNavigate();

  const fetchFlights = (e) => {
    e.preventDefault();

    // Prepare the data to forward to the FlightDetails page
    const flightData = {
      origin,
      destination,
      departureDate,
      adults,
      children,
      carrierClass: selectedTab,
      tripType,
    };

    // Navigate to the FlightDetails page with the flight data
    navigate('/flightDetails', { state: flightData });
  };

  return (
    <>
      <section className="section__container booking__container">
        <div className="booking__nav">
          <span
            className={selectedTab === 'Economy Class' ? 'active-tab' : 'tab'}
            onClick={() => setSelectedTab('Economy Class')}
            style={{ color: 'black' }}
          >
            Economy Class
          </span>
          <span
            className={selectedTab === 'Business Class' ? 'active-tab' : 'tab'}
            onClick={() => setSelectedTab('Business Class')}
            style={{ color: 'black' }}
          >
            Business Class
          </span>
          <span
            className={selectedTab === 'First Class' ? 'active-tab' : 'tab'}
            onClick={() => setSelectedTab('First Class')}
            style={{ color: 'black' }}
          >
            First Class
          </span>
        </div>
        <form>
          <div className="form__group">
            <span><i className="ri-map-pin-line" style={{ color: 'black' }}></i></span>
            <div className="input__content">
              <div className="input__group">
                <input
                  type="text"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  style={{ color: 'black' }}
                />
                <label style={{ color: 'black' }}>Location</label>
              </div>
              <p style={{ color: 'black' }}>Where are you going?</p>
            </div>
          </div>

          <div className="form__group">
            <span><i className="ri-calendar-line" style={{ color: 'black' }}></i></span>
            <div className="input__content">
              <div className="input__group">
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  style={{ color: 'black' }}
                />
                <label style={{ color: 'black' }}>Return</label>
              </div>
              <p style={{ color: 'black' }}>Add date</p>
            </div>
          </div>

          <div className="form__group">
            <span><i className="ri-calendar-line" style={{ color: 'black' }}></i></span>
            <div className="input__content">
              <div className="input__group">
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  style={{ color: 'black' }}
                />
                <label style={{ color: 'black' }}>Departure</label>
              </div>
              <p style={{ color: 'black' }}>Add date</p>
            </div>
          </div>

          <div className="form__group">
            <span><i className="ri-user-3-line" style={{ color: 'black' }}></i></span>
            <div className="input__content">
              <div className="input__group">
                <input
                  type="number"
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                  style={{ color: 'black' }}
                />
                <label style={{ color: 'black' }}>Travellers</label>
              </div>
              <p style={{ color: 'black' }}>Add guests</p>
            </div>
          </div>

          <div className="trip-type form__group">
            <div className="input__content">
              <div className="input__group">
                <label style={{ color: 'black' }}>
                  <input
                    type="radio"
                    value="oneWay"
                    style={{ cursor: 'pointer' }}
                    checked={tripType === 'oneWay'}
                    onChange={(e) => setTripType(e.target.value)}
                  />
                  One Way
                </label>
              </div>
            </div>
            <div className="input__content">
              <div className="input__group">
                <label style={{ color: 'black' }}>
                  <input
                    type="radio"
                    value="roundTrip"
                    style={{ cursor: 'pointer' }}
                    checked={tripType === 'roundTrip'}
                    onChange={(e) => setTripType(e.target.value)}
                  />
                  Round Trip
                </label>
              </div>
            </div>
          </div>
          <button className="btn" onClick={fetchFlights} style={{ color: 'black' }}><i className="ri-search-line"></i></button>
        </form>
      </section>
    </>
  );
}

export default BookingContainer;
