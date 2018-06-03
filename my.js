'use strict';


class Hamburger {
  constructor({
    size,
    stuffing
  }) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }
  ////////////////
  /**
   * Добавить topping к гамбургеру. Можно добавить несколько
   * topping, при условии, что они разные.
   * 
   * @param {String} topping - Тип добавки
   */
  addTopping(topping) {
    if (this.toppings.includes(topping)) {
      console.log(`This topping -${topping} alredy add`);
    } else if (!Hamburger.TOPPINGS[topping]) {
      console.log(`No topping like this -${topping}!`);
    } else {
      this.toppings.push(topping);
    }
  }
  /**
   * Убрать topping, при условии, что она ранее была добавлена
   * 
   * @param {String} topping - Тип добавки
   */
  removeTopping(topping) {
    // console.log('1-', this.toppings);
    if (!Hamburger.TOPPINGS[topping]) {
      console.log('2', this.toppings);
      return (`This ${topping} not in Hamburger`);

    }
    // console.log('3', this.toppings);
    this.toppings.find((item, idx) => {
      if (item === topping) {
        this.toppings.splice(idx, 1);
      }
    });

  };

  /**
   * Получить список toppings
   *
   * @return {Array} - Массив добавленных topping, содержит значения констант
   *                   Hamburger.TOPPING_*
   */
  getToppings() {
    return this.toppings;
  }
  /**
   * Узнать размер гамбургера
   *
   * @return {String} - размер гамбургера
   */
  getSize() {
    return this.size
  }

  /**
   * Узнать начинку гамбургера
   *
   * @return {String} - начинка гамбургера
   */
  getStuffing() {
    return this.stuffing
  }

  /**
   * Узнать цену гамбургера
   * @return {Number} - Цена в деньгах
   */
  calculatePrice() {
    if (this.size === undefined || this.stuffing === undefined) {
      console.log('Please tell me what Hamburger you need');
    } else {
      const SumSize = Hamburger.SIZES[this.size].price;
      const SumStuffing = Hamburger.STUFFINGS[this.stuffing].price;
      const SumToppings = this.toppings.reduce((acc, topping) => acc + Hamburger.TOPPINGS[topping].price, 0);
      const totallSum = SumSize + SumStuffing + SumToppings;
      // console.log(`${totallSum}`);
      return totallSum;
    };
  };

  /**
   * Узнать калорийность
   *
   * @return {Number} - Калорийность в калориях
   */
  calculateCalories() {
    if (this.size === undefined || this.stuffing === undefined) {
      console.log('Please tell me what Hamburger you need');
    } else {
      const SumSize = Hamburger.SIZES[this.size].cal;
      const SumStuffing = Hamburger.STUFFINGS[this.stuffing].cal;
      const SumToppings = this.toppings.reduce((acc, topping) => acc + Hamburger.TOPPINGS[topping].cal, 0);
      const totallCal = SumSize + SumStuffing + SumToppings;
      // console.log(`${totallSum}`);
      return totallCal;
    };
  }
  ////////////////////////
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
const hamburger = new Hamburger({
  size: Hamburger.SIZE_SMALL,
  stuffing: Hamburger.STUFFING_CHEESE
});

console.log(hamburger);
// Добавка из приправы
// hamburger.addTopping(Hamburger.TOPPING_SPICE);
hamburger.addTopping(Hamburger.TOPPING_SPICE);
// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log('hamburger after addTopping', hamburger);
// А сколько теперь стоит? 
console.log("Price with sauce: ", hamburger.calculatePrice());

// Проверить, большой ли гамбургер? 
console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log('hamburger after removeTopping', hamburger);
// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1
