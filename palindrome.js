function palindome() {
    let word = document.getElementById("word").value;
    const length = word.length;
    for (let i = 0; i < length/2; i++) {
        if (word[i] != word[length-1-i]) {
          alert("Not a Palindrome!");
          return;
        }
    }
    alert("Palindrome");
}
