import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import mockTicketDetails from './mockTicketdetails.json'; // Import mock ticket details

function FlightDetails() {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate function
  const flightData = location.state || {}; // Access forwarded data

  // Get the current date in YYYY-MM-DD format
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Add leading zero
    const day = String(today.getDate()).padStart(2, '0'); // Add leading zero
    return `${year}-${month}-${day}`;
  };

  const currentDate = getCurrentDate();

  // Simulate fetching flight details
  const getFlightDetails = () => {
    const departureLocation = flightData.origin || 'MAA'; // Default to 'MAA'
    const arrivalLocation = flightData.destination || 'DXB'; // Default to 'DXB'
    const departureDate = flightData.departureDate || currentDate; // Default to current date

    // Combine mock data with fetched data
    const ticketDetails = mockTicketDetails.map((ticket) => ({
      ...ticket,
      departureLocation,
      arrivalLocation,
      departureDate,
    }));

    // Filter flights with departure dates after the current date
    return ticketDetails.filter((ticket) => ticket.departureDate > currentDate);
  };

  const flightDetails = getFlightDetails();

  const handleBookNow = () => {
    navigate('/success'); // Navigate to the Success page
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen p-6">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Flight Details
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {flightDetails.length > 0 ? (
          flightDetails.map((flight, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-lg p-6 border-l-8 border-blue-500 max-w-sm w-full transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                {flight.flightName}
              </h3>
              <div className="text-gray-700 space-y-2">
                <p className="flex justify-between">
                  <span className="font-medium">Departure Location:</span>
                  <span>{flight.departureLocation}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Arrival Location:</span>
                  <span>{flight.arrivalLocation}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Departure Time:</span>
                  <span>{flight.departureTime}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Arrival Time:</span>
                  <span>{flight.arrivalTime}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Duration:</span>
                  <span>{flight.duration}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Ticket Type:</span>
                  <span>{flight.ticketType}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Price:</span>
                  <span>{flight.price}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Departure Date:</span>
                  <span>{flight.departureDate}</span>
                </p>
              </div>
              <div className="mt-4 text-center">
                <button
                  onClick={handleBookNow}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-xl mt-200 font-semibold text-red-600">
            No flights found for the selected date.
          </p>
        )}
      </div>
    </div>
  );
}

export default FlightDetails;