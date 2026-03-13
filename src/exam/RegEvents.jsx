import React, { useState, useEffect } from 'react'

export default function RegEvents() {
    const [booking, setBooking] = useState([])

    useEffect(() => {
        const events = JSON.parse(localStorage.getItem('events')) || []
        setBooking(events)
    }, [])


  return (
    <div>
      <h2>All Events</h2>
      {booking.length === 0 ? (
        <p>No events registered yet. Go to Add Event to create one.</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Members</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((event) => (
              <tr key={event.id}>
                <td>{event.ename}</td>
                <td>{event.description}</td>
                <td>{event.date}</td>
                <td>{event.edate}</td>
                <td>{event.quantity}</td>
                <td>${event.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
