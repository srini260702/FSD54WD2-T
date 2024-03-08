




Hall Booking Api


Server.js :

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://guvi:<password>@guvitasks.3r20lc4.mongodb.net//hall_booking_app', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Handle MongoDB connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Create MongoDB Schemas
const RoomSchema = new mongoose.Schema({
  roomNumber: Number,
  seats: Number,
  amenities: String,
  price: Number,
});

const BookingSchema = new mongoose.Schema({
  customerName: String,
  date: Date,
  startTime: String,
  endTime: String,
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
});

const Room = mongoose.model('Room', RoomSchema);
const Booking = mongoose.model('Booking', BookingSchema);

// 1. Create a Room
app.post('/api/rooms', async (req, res) => {
  try {
    const { roomNumber, seats, amenities, price } = req.body;
    const room = new Room({ roomNumber, seats, amenities, price });
    await room.save();
    res.status(201).json(room);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// 2. Book a Room
app.post('/api/bookings', async (req, res) => {
  try {
    const { customerName, date, startTime, endTime, roomId } = req.body;
    const booking = new Booking({ customerName, date, startTime, endTime, roomId });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// 3. List all Rooms with Booked Data
app.get('/api/rooms/bookings', async (req, res) => {
  try {
    const roomBookings = await Room.find().populate('bookings');
    res.json(roomBookings);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// 4. List all Customers with Booked Data
app.get('/api/customers/bookings', async (req, res) => {
  try {
    const customerBookings = await Booking.find().populate('roomId');
    res.json(customerBookings);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// 5. List how many times a customer has booked the room
app.get('/api/customers/booking-count', async (req, res) => {
  try {
    const bookingCount = await Booking.aggregate([
      { $group: { _id: '$customerName', count: { $sum: 1 } } },
      { $project: { customerName: '$_id', count: 1, _id: 0 } },
    ]);
    res.json(bookingCount);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});