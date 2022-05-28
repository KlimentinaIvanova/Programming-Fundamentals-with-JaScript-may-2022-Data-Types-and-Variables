function gladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shiledPrice,
  armorPrice
) {
  let expenses = 0;
  let lostFightsConuter = 0;
  let shiledBrokeCounter = 0;

  for (let currentFight = 1; currentFight <= lostFights; currentFight++) {
    lostFightsConuter++;
    if (lostFightsConuter % 2 === 0) {
      expenses += helmetPrice;
    }
    if (lostFightsConuter % 3 === 0) {
      expenses += swordPrice;
    }
    if (lostFightsConuter % 6 === 0) {
      expenses += shiledPrice;
      shiledBrokeCounter++;
      if (shiledBrokeCounter % 2 === 0) {
        expenses += armorPrice;
      }
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}
gladiatorExpenses(7, 2, 3, 4, 5);
