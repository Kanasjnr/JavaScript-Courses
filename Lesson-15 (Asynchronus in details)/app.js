console.log("Hello World");

// const functionOne = () => {
//    console.log("Function One");
//    functionTwo();
//    console.log("Function One, Part Two");
// };

// const functionTwo = () => {
//    console.log("Function Two");
// }

// functionOne();

const functionOne = () => {
  console.log("Function One");
  functionTwo();
  console.log("Function One, Part Two");
};

const functionTwo = () => {
  setTimeout(() => {
    console.log("Function Two");
  }, 3000);
};

functionOne();

// Simulating data fetching

// const fetchUser = (username) => {
//     setTimeout(() => {
//         return {user: username }
//     }, 2000)
// };
// const user = fetchUser("Bolaji");
// console.log(user);

const fetchUser = (username, callback) => {
  setTimeout(() => {
    return callback({ user: username });
  }, 2000);
};

const fetchUserPhoto = (callback) => {
  setTimeout(() => {
    return callback(["Photo1", "Photo2"]);
  }, 2000);
};

const fetchUserMail = (callback) => {
  setTimeout(() => {
    return callback({ email: "lagbaja@gmail.com" });
  }, 2000);
};

const fetchUserFriends = (callback) => {
  setTimeout(() => {
    return callback({ friends: "Muhammed", friends2: "Rocco" });
  }, 2000);
};

fetchUser("Bolaji", (user) => {
  console.log(user);
  fetchUserPhoto((userPhoto) => {
    console.log(userPhoto);
    fetchUserMail((email) => {
      console.log(email);
    });
    fetchUserFriends((userFriends) => {
      console.log(userFriends);
    });
  });
});
// console.log(user);

// using Of promise

new Promise ((resolve,reject)=>{
  setTimeout(()=>{
    resolve()
  },2000)
}).then((user)=>{
console.log(user);
})