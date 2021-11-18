import React from "react";
import classes from "../../styles/SingleCard.module.css";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className={classes.card}>
      <div className={flipped ? classes.flipped : ""}>
        <img className={classes.front} src={card.src} alt="card front" />
        <img
          className={classes.back}
          src="/img/cover.png"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
};

export default SingleCard;
