import React from "react";
import Heading from "./header";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./footer";
import Restaurant from "./Restaurant";
import "./App.css";

const App = () => {
  const contact = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer className="footer" contact={contact} />
    </div>
  );
};

export default App;
