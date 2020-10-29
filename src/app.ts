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

// function createOrder(pizza: string, toppings: string) {
//   return { pizza, toppings };
// }

// console.log(order);

// * rest param

// function sumAll(message: string, ...arr: number[]): number {
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
//   name: string;
//   toppings: string[];
// }) {
//   return { pizzaName, pizzaToppings };
// }

// const { pizzaName } = order(pizza);

// console.log(pizzaName);

// const toppings = ['pepperoni', 'bacon', 'chilli'];

// const [first, second, third] = toppings;

// console.log(first, second, third);

// function logToppings([first, second]: string[]) {
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

// * string type, string literals

// const coupon: string = 'pizza25';

// function normalizeCoupon(code: string): string {
//   return code.toUpperCase();
// }

// const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;

// console.log(couponMessage);

// * boolean type, boolean literals

// const pizzas: number = 2;

// function offerDiscount(orders: number): boolean {
//   return orders >= 3;
// }

// if (offerDiscount(pizzas)) {
//   console.log(`You're entitled to a discount!`);
// } else {
//   console.log(`Order more than 3 pizzas for a discount!`);
// }

// * the "any" type

// let coupon: any;

// coupon = 25;
// coupon = '25';
// coupon = true;

// * implicit vs explicit types

// let implicitCoupon = 'pizza25'; // inferred type
// let explicitCoupon: string = 'pizza25';
// let explicitCoupon1;
// explicitCoupon1 = 'pizza25';

// * void type

// let selectedTopping: string = 'pepperoni';

// function selectTopping(topping: string): void {
//   selectedTopping = topping;
// }

// selectTopping('bacon');

// console.log(selectedTopping);

// * never type
// type tells ts that a value will never occur
// return type never actually returns something because it is unreachable
// or if an error is thrown, which means that we're not continuing the function
// past the error, and the code below it will never be reached (ie. return is unreachable)

// function orderError(error: string): never {
//   throw new Error(error);
//   // never going to return a value!
// }

// orderError('Something went wrong');

// * null, undefined, strict null checks

// let coupon: string | null = 'pizza25';

// function removeCoupon(): void {
//   coupon = null;
// }

// console.log(coupon);

// removeCoupon();

// console.log(coupon);

// * union and literal types

// let pizzaSize: string = 'small';

// function selectSize(size: 'small' | 'medium' | 'large'): void {
//   pizzaSize = size;
// }

// selectSize('medium');

// let pizzaSize: number = 1;

// function selectSize(size: 1 | 2 | 3): void {
//   pizzaSize = size;
// }

// selectSize(3);

// console.log(`Pizza size: ${pizzaSize}`);

// * function types

// function sumOrder(price: number, quantity: number): number {
//   return price * quantity;
// }

// let sumOrder: Function;

// sumOrder = (price: number, quantity: number): number => {
//   return price * quantity;
// };

// let sumOrder: (price: number, quantity: number) => number;

// sumOrder = (x, y) => x * y;

// let sumOrder: /* type declaration */ (
//   price: number,
//   quantity: number
// ) => number = /* function assignment */ (x, y) => x * y;

// const sum = sumOrder(25, 2);

// console.log(`Total sum: ${sum}`);

// * functions and optional arguments

// let sumOrder: (price: number, quantity?: number) => number;

// sumOrder = (x, y) => {
//   if (y) return x * y;
//   return x;
// };

// const sum = sumOrder(25);

// console.log(`Total sum: ${sum}`);

// * typed functions and default params

// let sumOrder: (price: number, quantity?: number) => number;

// // sumOrder = (x, y) => {
// //   const q = y || 1;
// //   return x * q;
// // };

// sumOrder = (x, y = 1) => {
//   return x * y;
// };

// const sum = sumOrder(34);

// console.log(`Total sum: ${sum}`);

// * object types

// let pizza: { name: string; price: number };

// pizza = {
//   name: 'plain old pepperoni',
//   price: 20,
// };

// let pizza: { name: string; price: number; getName(): string } = {
//   name: 'plain old pepperoni',
//   price: 20,
//   getName() {
//     return pizza.name;
//   },
// };

// console.log(pizza.getName());

// * array types and generics

// let sizes: string[];

// sizes = ['small', 'medium', 'large'];

// let toppings: Array<string>;

// toppings = ['pepperoni', 'tomato', 'bacon'];

// * tuple types for arrays

// let pizza: [string, number, boolean, string];

// pizza = ['pepperoni', 20, true, ''];

// * type aliases

// type Size = 'small' | 'medium' | 'large';
// type Callback = (size: Size) => void;

// let pizzaSize: Size = 'small';

// const selectSize: Callback = (x) => {
//   pizzaSize = x;
// };

// selectSize('small');

// * type assertions

// type Pizza = { name: string; toppings: number };

// const pizza: Pizza = { name: 'blazing inferno', toppings: 5 };

// const serialized = JSON.stringify(pizza);

// // function getNameFromJSON(obj: string) {
// //   return (<Pizza>JSON.parse(obj)).name;
// // }
// function getNameFromJSON(obj: string) {
//   return (JSON.parse(obj) as Pizza).name;
// }

// getNameFromJSON(serialized);

// * creating interfaces

// type Pizza = {
//   name: string;
//   sizes: string[];
// };

// let pizza: Pizza;

// function createPizza(name: string, sizes: string[]): Pizza {
//   return {
//     name,
//     sizes,
//   };
// }

// pizza = createPizza('pepperoni', ['small', 'medium']);

// interface Pizza {
//   name: string;
//   sizes: string[];
// }

// // interface Pizzas {
// //   data: Pizza[];
// // }

// let pizza: Pizza;

// function createPizza(name: string, sizes: string[]): Pizza {
//   return {
//     name,
//     sizes,
//   };
// }

// pizza = createPizza('pepperoni', ['small', 'medium']);

// * interfaces with function types
