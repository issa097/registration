// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBSq4GLxpuX4F7DVtgtLg5rKx4pI3wB1Oc",
//   authDomain: "issa-1ccbd.firebaseapp.com",
//   projectId: "issa-1ccbd",
//   storageBucket: "issa-1ccbd.appspot.com",
//   messagingSenderId: "490623612146",
//   appId: "1:490623612146:web:23ccc1347abc8b6330cc6b",
// };
// firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();
// const database = firebase.database();

// function register() {
//   full_name= document.getElementById("password").value;

//   email= document.getElementById("email").value;
//   phone= document.getElementById("phone").value;
//   Password= document.getElementById("password").value;
// }

// if (validate_email(email) == false || validate_pass(password) == false) {
//   alert("email or pass is wrong");
//   return;
// }
// if (validate_field(full_name) == false || validate_pass(phone) == false) {
//   alert("one or more extra field");
//   return;
// }

// auth.createUserWithEmailAndPassword(email, password)
//   .then(function () {
//     let user = auth.currentUser;

//     let data_ref = database.ref()

//     let user_data = {
//         full_name:  full_name,
//         email:email,
//         phone: phone,
//         Password:Password,
//         last_login:Date.now()
//     }

//     data_ref.child('user/' + user.uid).set(user_data)

//     alert("User Created");
//   })

//   .catch(function (error) {
//     let error_code = error.code;
//     let error_message = error.message;

//     alert(error_message);
//   });

// function validate_email(email) {
//   expression = /^[^@]+@\w+(\.\w+)+\w$/;
//   if (expression.test(email) == true) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function validate_pass(password) {
//   if (password < 8) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function validate_field(field) {
//   if (field == null) {
//     return false;
//   } else {
//     return true;
//   }
//   if (field <= 0) {
//     false;
//   } else {
//     return;
//   }
// }

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);

// // const db = getDatabase(app);
// // document.getElementById("btn").addEventListener("click", function (e) {
// //   e.preventDefault();
// //   set(
// //     ref(db, "user/" + document.getElementById("input").value),

// //     {
// //       username: document.getElementById("input").value,
// //       email: document.getElementById("input1").value,
// //       phonenumber: document.getElementById("input2").value,
// //       password: document.getElementById("input3").value,
// //     }
// //   );
// //   alert("kk");
// // });
