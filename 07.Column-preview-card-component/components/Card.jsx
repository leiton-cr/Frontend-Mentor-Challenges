const Card = ({name,description, color, icon}) => {
  return (
    <div className={`card card__${color}`}>
      <img src={icon} className="card__logo" alt= {`${name} logo`} />
      <h2 className="card__title"> {name} </h2>
      <p className="card__description">
        {description}
      </p>
      <button aria-label="Sedans learn more" className="card__button">
        Learn More
      </button>
    </div>
  );
}
