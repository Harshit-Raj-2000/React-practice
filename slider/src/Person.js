import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const Person = (props) => {
  const { id, image, name, title, quote, personIndex, index, length } = props;

  let position = "nextSlide";

  if (personIndex === index) {
    position = "activeSlide";
  }

  if (
    personIndex === index - 1 ||
    (index === 0 && personIndex === length - 1)
  ) {
    position = "lastSlide";
  }

  return (
    <article key={id} className={position}>
      <img src={image} alt={name} className="person-img" />
      <h4>{name}</h4>
      <p className="title">{title}</p>
      <p className="text">{quote}</p>
      <FaQuoteRight className="icon" />
    </article>
  );
};

export default Person;
