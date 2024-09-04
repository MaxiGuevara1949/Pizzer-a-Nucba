const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];
/* Imprimir las pizzas con ID par */

pizzas.forEach((pizza) => {
  if (pizza.id % 2 === 0) {
    console.log(`Las pizzas pares son" ${pizza.nombre}`);
  }
});

/* Pizzas menor a 600 */

pizzas.forEach((pizza) => {
  if (pizza.precio <= 600) {
    console.log(
      `Las pizzas menor a $600 son estas ${pizza.nombre} que sale $${pizza.precio}`
    );
  }
});

/* Pizas con nombre y precio  */

pizzas.map((pizzas) => {
  if (pizzas.nombre && pizzas.precio) {
    console.log(`Las pizzas son ${pizzas.nombre} que salen $${pizzas.precio}`);
  }
});

/* Todos los ingredientes de cada pizza */

pizzas.forEach((pizza) => {
  console.log(`${pizza.nombre} "tiene:"${pizza.ingredientes}`);
});
