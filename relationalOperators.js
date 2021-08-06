function check() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  document.getElementById("results").innerHTML += "num1 + num2 :  " + (num1 + num2);
  document.getElementById("results").innerHTML += "<br> num1 - num2 :  " + (num1 - num2);
  document.getElementById("results").innerHTML += "<br> num1 * num2 :  " + (num1 * num2);
  document.getElementById("results").innerHTML += "<br> num1 / num2 :  " + (num1 / num2);
  document.getElementById("results").innerHTML += "<br> num1 % num2 :  " + (num1 % num2);
  document.getElementById("results").innerHTML += "<br> num1 > num2 :  " + (num1 > num2);
  document.getElementById("results").innerHTML += "<br> num1 >= num2 :  " + (num1 >= num2);
  document.getElementById("results").innerHTML += "<br> num1 < num2 :  " + (num1 < num2);
  document.getElementById("results").innerHTML += "<br> num1 <= num2 :  " + (num1 <= num2);
  document.getElementById("results").innerHTML += "<br> num1 == num2 :  " + (num1 == num2);
  document.getElementById("results").innerHTML += "<br> num1 != num2 :  " + (num1 != num2);
//   switch (operator) {
//     case "==":
//       alert (num1 == num2);
//       break;
//     case "===":
//       alert (num1 === num2);
//       break;
//     case "!=":
//       alert (num1 != num2);
//       break;
//     case ">":
//       alert (num1 > num2);
//       break;
//     case ">=":
//       alert (num1 >= num2);
//       break;
//     case "<":
//       alert (num1 < num2);
//       break;
//     case "<=":
//       alert (num1 <= num2);
//       break;
//     case "+":
//       alert (num1 + num2);
//       break;
//     case "-":
//       alert (num1 - num2);
//       break;
//     case "*":
//       alert (num1 * num2);
//       break;
//     case "/":
//       alert (num1 / num2);
//       break;
//     case "%":
//       alert (num1 % num2);
//       break;
//     default:
//       alert("something wrong happened");
//   }
}
