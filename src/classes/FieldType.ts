const faker = require("faker");

export default (type: string): any => {
  switch (type) {
    case "FirstName":
      return faker.name.firstName();
    case "LastName":
      return faker.name.lastName();
    case "Phone":
      return faker.phone.phoneNumber();
    case "Email":
      return faker.internet.email();
  }
};
