/* let m1 = new Map();
m1.set("name", "codexgh")
m1.set({a: 1}, "大连")
console.log(m1);

let m2 = new Map([
  ["name", "codexgh"],
  [{a: 1}, "大连"]
]);
console.log(m2); */

/* let m2 = new Map([
  ["name", "codexgh"],
  [{a: 1}, "大连"]
]);
console.log(m2.get("name")); */

/* let m2 = new Map([
  ["name", "codexgh"],
  [{a: 1}, "大连"]
]);
console.log(m2.has("name")); */

/* let m2 = new Map([
  ["name", "codexgh"],
  [{a: 1}, "大连"]
]);
console.log(m2.delete("name")); */
/* 
let m2 = new Map([
  ["name", "codexgh"],
  [{a: 1}, "大连"]
]);
m2.clear();
console.log(m2); */


/* let m2 = new Map([
  ["name", "codexgh"],
  [{a: 1}, "大连"]
]);

for (const iterator of m2.keys()) {
  console.log(iterator);
} */


/* let m2 = new Map([
  ["name", "codexgh"],
  [{a: 1}, "大连"]
]);

for (const iterator of m2.values()) {
  console.log(iterator);
} */

/* let m2 = new Map([
  ["name", "codexgh"],
  [{a: 1}, "大连"]
]);

for (const iterator of m2.entries()) {
  console.log(iterator);
} */

let m2 = new Map([
  ["name", "codexgh"],
  [{a: 1}, "大连"]
]);
m2.forEach((item, index) => {
  console.log(item, index);
})