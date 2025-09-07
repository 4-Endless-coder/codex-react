import React from 'react';

const BookingsTable = ({ bookings }) => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>All Bookings</h2>
      {bookings.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#495E57', color: 'white' }}>
              <th style={{ padding: '0.75rem', border: '1px solid #ddd' }}>Date</th>
              <th style={{ padding: '0.75rem', border: '1px solid #ddd' }}>Time</th>
              <th style={{ padding: '0.75rem', border: '1px solid #ddd' }}>Guests</th>
              <th style={{ padding: '0.75rem', border: '1px solid #ddd' }}>Occasion</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'white' }}>
                <td style={{ padding: '0.75rem', border: '1px solid #ddd', textAlign: 'center' }}>{booking.date}</td>
                <td style={{ padding: '0.75rem', border: '1px solid #ddd', textAlign: 'center' }}>{booking.time}</td>
                <td style={{ padding: '0.75rem', border: '1px solid #ddd', textAlign: 'center' }}>{booking.guests}</td>
                <td style={{ padding: '0.75rem', border: '1px solid #ddd', textAlign: 'center' }}>{booking.occasion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: 'center' }}>No bookings have been made yet.</p>
      )}
    </div>
  );
};

export default BookingsTable;