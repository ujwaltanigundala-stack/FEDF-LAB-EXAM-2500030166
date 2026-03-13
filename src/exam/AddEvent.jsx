import React, { useState } from 'react'
import './AddEvent.css'

export default function AddEvent() {
  const [formData, setFormData] = useState({
    ename: '',
    description: '',
    date: '',
    edate: '',
    quantity: '',
    amount: ''
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const events = JSON.parse(localStorage.getItem('events')) || []
    const newEvent = { ...formData, id: Date.now() }
    events.push(newEvent)
    localStorage.setItem('events', JSON.stringify(events))
    setFormData({ ename: '', description: '', date: '', edate: '', quantity: '', amount: '' })
    alert('Event added and saved!')
  }

  return (
    <div className="form-container">
        <h2>Add Event</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input id="ename" placeholder="Event Name" value={formData.ename} onChange={handleChange} required/>
                <input id="description" placeholder="Description" value={formData.description} onChange={handleChange}/>
                <input id="date" placeholder="Start Date (DD-MM-YYYY)" type="text" value={formData.date} onChange={handleChange} required/>
                <input id="edate" placeholder="End Date (DD-MM-YYYY)" type="text" value={formData.edate} onChange={handleChange}/>
                <input id="quantity" placeholder="Members" type="number" value={formData.quantity} onChange={handleChange}/>
                <input id="amount" placeholder='Cost' type="number" value={formData.amount} onChange={handleChange}/>
            </div>
            <button type="submit" className="form-btn">Add Event</button>
        </form>
    </div>
  )
}
