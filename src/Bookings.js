import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      });
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const fillterBooking =
      bookings.length > 0 &&
      bookings.filter(
        f => f.firstName === searchVal || f.surname === searchVal
      );
    setBookings(fillterBooking);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings && <SearchResults results={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;
