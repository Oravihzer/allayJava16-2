// 1.  create new project
// 2. create add button which will ask the user for name and age and add to an array as object
// 3. create show button which will log the array to console
// 4. create a button which will remove the last user added
// 5. create a button which will remove all users

// let users = [];

// function addNameAndAge() {
//   users.push({
//     name: prompt("enter your name"),
//     age: Number(prompt("enter your age")),
//   });
// }

// function showArrayOnConsole() {
//   console.log(users);
// }

// function removeLastUser() {
//   users.pop();
// }

// function removeAll() {
//   users = [];
// }

// ************************************************ //

// 1. create new project
// 2. create add button which will ask the user for name and age and add to an array as object
// 3. create show button which will log the array to console
// 4. create a button which will remove the last user added
// 5. create a button which will remove all users
// 6. button that ask the user to choose what index to see

// [] - enter to index
// . - enter to object

let arrProj1 = [];

function addUsers() {
  arrProj1.push({
    name: prompt("enter you name:"),
    age: Number(prompt("enter your age:")),
  });
}
function showUsers() {
  console.log(arrProj1);
}
function removeLastUser() {
  arrProj1.pop();
}
function resetAllUsers() {
  arrProj1 = [];
}
function watchUser() {
  let num1 = Number(prompt("enter index number!"));
  console.log(arrProj1[num1]);
}
