import React from "react";
const Footer = props => {
  const contact = props.contact;
  return (
    <ul>
      {contact.map(m => (
        <li>{m}</li>
      ))}
    </ul>
  );
};

export default Footer;
