var faker = require("faker");

console.log("Welcome To My shop");

for (let index = 0; index < 10; index++) {
  console.log(faker.commerce.productName());
  console.log(faker.commerce.price());
}
