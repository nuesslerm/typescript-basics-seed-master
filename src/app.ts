/* 
* arrow functions and implicit returns

const pizzas = [{ name: 'Pepperoni', toppings: ['pepperoni'] }];

// const mappedPizzas = pizzas.map(function (pizza) {
//   return pizza.name.toUpperCase();
// });

const mappedPizzas = pizzas.map((pizza) => pizza.name.toUpperCase());

console.log(mappedPizzas);

// const pizza = {
//   name: 'Blazing Inferno',
//   getName: function () {
//     setTimeout(() => {
//       console.log(this.name);
//     }, 100);
//   },
// };

const pizza = {
  name: 'Blazing Inferno',
  getName: () => {
    console.log(pizza.name);
  },
};

* default function params

console.log(pizza.getName());
 */

// function multiply(a: number, b: number = 25) {
//   return a * b;
// }

// console.log(multiply(5));
// console.log(multiply(5, 35));

// * object literal improvements

// const pizza = {
//   name: 'Pepperoni',
//   price: 15,
//   getName() {
//     return this.name;
//   },
// };

// console.log(pizza.getName());

// const toppings = ['pepperoni'];

// const order = {
//   pizza,
//   toppings,
// };

// function createOrder(pizza: String, toppings: String) {
//   return { pizza, toppings };
// }

// console.log(order);

// * rest param

// function sumAll(message: String, ...arr: number[]): number {
//   console.log(arguments[0]);
//   return arr.reduce((acc, curr) => acc + curr, 0);
// }

// const sum = sumAll('Hello', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14);

// console.log(sum);

// * array spread operator

// const toppings = ['bacon', 'chilli'];

// const newToppings = ['pepperoni'];

// const allToppings = [...toppings, ...newToppings];

// console.log(allToppings);

// * object spread operator

// const pizza = {
//   name: 'pepperoni',
// };

// const toppings = ['pepperoni'];

// // const order = {
// //   ...pizza,
// //   toppings,
// // };

// // const finalOrder = { ...order };

// // console.log(finalOrder);

// const order = Object.assign({}, pizza, { toppings });

// const spreadOrder = { ...pizza, toppings };

// console.log('%s\n%s', order, spreadOrder);

// * destructuring arrays and objects

// import { uppercase } from './utils';

// const pizza = {
//   name: 'Pepperoni',
//   toppings: ['pepperoni'],
// };

// function order({
//   name: pizzaName,
//   toppings: pizzaToppings,
// }: {
//   name: String;
//   toppings: String[];
// }) {
//   return { pizzaName, pizzaToppings };
// }

// const { pizzaName } = order(pizza);

// console.log(pizzaName);

// const toppings = ['pepperoni', 'bacon', 'chilli'];

// const [first, second, third] = toppings;

// console.log(first, second, third);

// function logToppings([first, second]: String[]) {
//   console.log(first, second);
// }

// logToppings(toppings);

// * number types, arguments and functions

// const pizzaCost: number = 10;
// const pizzaToppings: number = 5;

// function calculatePrice(cost: number, toppings: number): number {
//   return cost + 1.5 * toppings;
// }

// // can use floats and integers, etc.
// const cost: number = calculatePrice(pizzaCost, pizzaToppings);
// console.log(`Pizza costs: ${cost}`);

// parseInt('15', 10);
