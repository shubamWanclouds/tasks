function check() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let operator = document.getElementById("operator").value;
  switch (operator) {
    case "==": alert (num1 == num2);
               break;
    case "===": alert (num1 === num2);
                break;
    case "!=": alert (num1 != num2);
               break;
    case ">": alert (num1 > num2);
              break;
    case ">=": alert (num1 >= num2);
               break;
  }
}
