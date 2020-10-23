/* const pizzas = [{ name: 'Pepperoni', toppings: ['pepperoni'] }];

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

console.log(pizza.getName());
 */

function multiply(a: number, b: number = 25) {
  return a * b;
}

console.log(multiply(5));
console.log(multiply(5, 35));
