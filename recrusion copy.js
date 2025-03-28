// 1. write a function recursiveSearch() to print all the keys whose value is []
//    output : email, pin , e , h

function recursiveSearch(obj) {
  for (const key in obj) {
    if (Array.isArray(obj[key]) && obj[key].length === 0) {
      console.log(key);
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      //type of object key is null, [], objec
      recursiveSearch(obj[key]);
    }
  }
}

const user = {
  name: "sanjay",
  age: 30,
  cars: ["tata", "honda"],
  address: {
    city: "bangalore",
    pin: [],
    xyz: {
      a: 10,
      b: [],
      c: 30,
      d: {
        e: [],
        f: {
          g: 1,
          h: [],
        },
      },
    },
  },
  emails: [],
};

recursiveSearch(user); // Output: email, pin, e, h
