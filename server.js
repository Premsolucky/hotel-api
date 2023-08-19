const express = require("express");
const app = express();

const PORT = 8080;

app.use(express.json());

const hotels = [
  {
    id: 1,
    name: "Hotel 1",
    city: "Bangalore",
    price: 1000,
    rating: 4.5,
    image: "https://via.placeholder.com/150",
    category: "3 star",
  },
  {
    id: 2,
    name: "Hotel 2",
    city: "Surat",
    price: 2000,
    rating: 4.9,
    image: "https://via.placeholder.com/150",
    category: "4 star",
  },
];

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/hotels", (req, res) => {
  res.json(hotels);
});

app.get("/hotels/:id", (req, res) => {
  const hotel = hotels.find((h) => h.id === parseInt(req.params.id, 10));
  res.send(hotel);
});

app.post("/hotels", (req, res) => {
  const hotel = req.body;
  hotel.id = hotels.length + 1;
  hotels.push(hotel);
  res.send(hotel);
});

app.put("/hotels/:id", (req, res) => {
  const newHotelInfo = req.body;
  hotels[parseInt(req.params.id, 10) - 1] = newHotelInfo;
  res.send(newHotelInfo);
});

app.delete("/hotels/:id", (req, res) => {
  hotels.splice(parseInt(req.params.id, 10) - 1, 1);
  res.send({ success: true });
});
