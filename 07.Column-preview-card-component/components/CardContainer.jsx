const CardContainer = (props) => {
  const cars = [
    {
      color: "orange",
      icon: "images/icon-sedans.svg",
      name: "Sedans",
      description:
        "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    },
    {
      color: "light-green",
      icon: "images/icon-suvs.svg",
      name: "SUVs",
      description:
        "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    },
    {
      color: "dark-green",
      icon: "images/icon-luxury.svg",
      name: "Luxury",
      description:
        "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    },
  ];

  return (
    <div className="container">
      {cars.map(({ name, description, color, icon }) => (
        <Card
          key={name}
          name={name}
          description={description}
          color={color}
          icon={icon}
        ></Card>
      ))}
    </div>
  );
};
