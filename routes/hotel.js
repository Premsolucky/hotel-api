const express = require("express");
const router = express.Router();

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

router.get("/", (req, res) => {
  res.json(hotels);
});

router.get("/:id", (req, res) => {
  const hotel = hotels.find((h) => h.id === parseInt(req.params.id, 10));
  res.send(hotel);
});

router.post("/", (req, res) => {
  const hotel = req.body;
  hotel.id = hotels.length + 1;
  hotels.push(hotel);
  res.send(hotel);
});

router.put("/:id", (req, res) => {
  const newHotelInfo = req.body;
  hotels[parseInt(req.params.id, 10) - 1] = newHotelInfo;
  res.send(newHotelInfo);
});

router.delete("/:id", (req, res) => {
  hotels.splice(parseInt(req.params.id, 10) - 1, 1);
  res.send({ success: true });
});

module.exports = router;
