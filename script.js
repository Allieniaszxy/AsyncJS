//asynchronous javascript
//call back is more like a timer that allows the execution of a function before another can be executed
// function greet(name, callback) {
//   console.log(`Hello ${name}`);
//   callback(name);
// }

// function sayGoodbye(name) {
//   console.log(`Goodbye, ${name}!`);
// }

// greet("John", sayGoodbye);

//method name: setTimeOut and setInterval

// setTimeout(myFunction, 30000);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "I love You !!";
// }

// function orderFood() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Food is ready!");
//     }, 2000);
//   });
// }
// orderFood()
//   .then((message) => console.log(message))
//   .catch((error) => console.error(error));

///data structure
//stack queue deque link linkedlist
//call stack web api micro

//Declare an async function
// async function getUserData(userId) {
//   try {
//     const user = await fetchUser(userId);
//     const posts = await fetchPosts(user.id);

//     console.log("User", user);
//     console.log("Posts", posts);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }
// getUserData(5);

// // Optional: using .then() as an alternative approach
// fetchUser(5)
//   .then((user) => fetchPosts(user.id))
//   .then((posts) => console.log("Posts", posts))
//   .catch((err) => console.log("Error:", err));

// function test() {
//   console.log(a);
//   var a = 10;
//   console.log(a);
// }
// test();

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
