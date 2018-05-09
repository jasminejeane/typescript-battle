



var numberOfOrcs: number = 100;
var numberOfHumans: string = '100';

const humanAttackPower: number = 2;
const orcAttackPower: number = 3;

const humanBattlecry = 'For the alliance!';
const orcBattlecry = 'For the horde';

function makeAttack(quantity: number, power: number, battlecry: string) {
  return function() {
    console.log(battlecry);
    quantity = quantity - power;
  };
}

const orcAttack = makeAttack(Number(numberOfHumans), orcAttackPower, orcBattlecry);
const humanAttack = makeAttack(numberOfOrcs, humanAttackPower, humanBattlecry);

orcAttack();
humanAttack();

