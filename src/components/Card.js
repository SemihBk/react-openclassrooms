function Card() {
  const titleCard = "Panier";
  const monsteraPrice = 8;
  const ivyPrice = 8;
  const flowersPrice = 8;
  return (
    <div>
      <h1>{titleCard}</h1>
      <ul>
        <li>Monsterra : {monsteraPrice}€</li>
        <li>Lierre : {ivyPrice}€</li>
        <li>Fleurs : {flowersPrice}€</li>
      </ul>
    </div>
  );
}

export default Card;
