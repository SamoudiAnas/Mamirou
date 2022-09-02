const fakerJS = require("@faker-js/faker");
const faker = fakerJS.faker;
const USERS = [];

function createRandomUser() {
    return {
        productImage: faker.image.fashion(),
    };
}

Array.from({ length: 200 }).forEach(() => {
    USERS.push(createRandomUser());
});

module.exports = USERS;
