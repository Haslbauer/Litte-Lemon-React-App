import { useState } from 'react'


export default function BookingTable() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [submittedData, setSubmittedData]= useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setSubmittedData({name, date, time, guests});
        setName('');
        setDate('');
        setTime('');
        setGuests('');
    }
    return (     
        <>
        <h1 id='reservationh1'>Make a reservation</h1>        
        <section id="reservation" className="reservation-container">
            <div>
                
            </div>
            <form onSubmit={handleSubmit}  className="reservation">
                <div>
                    <h2>Reserve a Table</h2>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" required minLength="3" placeholder="Your Name" />
                    <input value={date} onChange={(e) => setDate(e.target.value)} type="date" required placeholder="Date" />
                    <input value={time} onChange={(e) => setTime(e.target.value)}type="time" required placeholder="Time" />
                    <input value={guests} onChange={(e) => setGuests(e.target.value)} type="number" min="1" max="10" required placeholder="Number of Guests" />
                    <button type="submit">Reserve now</button>
                </div>
            </form>
            {submittedData && (
                <div className='reservation-submitted'>
                    <h3>Your Reservation</h3>
                    <p>Name: {submittedData.name}</p>
                    <p>Date: {submittedData.date} / Time: {submittedData.time}</p>
                    <p>Number of Guests: {submittedData.guests}</p>
                </div>
            )}
        </section>
        </>
    )
}