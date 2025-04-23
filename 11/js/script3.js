// Завдання 1: isStudent
let isStudent = true;

if (isStudent) {
  console.log("Ви студент");
} else {
  console.log("Ви не студент");
}
console.log("");
// Завдання 2: fruit
let fruit = "яблуко";

switch (fruit) {
  case "яблуко":
    console.log("Це червоний фрукт");
    break;
  case "банан":
    console.log("Це жовтий фрукт");
    break;
  case "апельсин":
    console.log("Це помаранчевий фрукт");
    break;
  default:
    console.log("Невідомий фрукт");
    break;
}
console.log("");
// Завдання 3: зворотний відлік
let count = 10;

while (count >= 1) {
  console.log(count);
  count--;
}