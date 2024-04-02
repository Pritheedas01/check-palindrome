const inputText = document.getElementById('text-input')
const btnCheck = document.getElementById("check-btn");
const result = document.getElementById("result");

btnCheck.addEventListener("click",() => {
    if(inputText.value ==""){
        alert("Please input a value");
    }
    else{
      if(inputText.value.length == 1){
        result.innerHTML =`${inputText.value} is a palindrome`;
      }else{
        checkPalindrome(inputText.value)
      }
    }
})

function checkPalindrome(string) {
    const regex = /[^a-zA-Z0-9\s]+/g;
    const stringWithoutChars = string.replace(regex, '').replaceAll(" ",'').toLowerCase();
    console.log(stringWithoutChars);
    const arrayValues = stringWithoutChars.split('');
    console.log(arrayValues);
    const reverseArrayValues = arrayValues.reverse();
    console.log(reverseArrayValues);
    const reverseString = reverseArrayValues.join('');
    console.log(reverseString);
    if(stringWithoutChars == reverseString) {
        result.innerHTML =`${string} is a palindrome`;
    }
    else {
        result.innerHTML =`${string} is not a palindrome`;
    }
}