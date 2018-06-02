'use strict';


class  Hamburger {
  constructor (size, stuffing){
  this.size = size;
  this.stuffing = stuffing;
  this.toppings = [];
}

addTopping (topping) { 
  if (this.toppings.includes(topping)){
    return (`topping ${topping} already includes`);
  }
  this.toppings.push(topping);
 }

};

Hamburger.SIZE_LARGE = 'SIZE_LARGE';
Hamburger.SIZE_SMALL = 'SIZE_SMALL';

Hamburger.SIZES = {
  [Hamburger.SIZE_LARGE]: {
    price: 50,
    cal: 100,
  },
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    cal: 50,
  },
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    cal: 20,
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    cal: 5,
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    cal: 15,
  },
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    cal: 0,
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    cal: 5,
  },
};
// Маленький гамбургер с начинкой из сыра
const hamburger1 = new Hamburger({
  size: Hamburger.SIZE_SMALL,
  stuffing: Hamburger.STUFFING_CHEESE
});


// Добавка из приправы
hamburger1.addTopping(Hamburger.TOPPING_SPICE);

console.log('hamburger1: ', hamburger1);