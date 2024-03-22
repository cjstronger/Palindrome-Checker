function palindrome(str) {
    const regex = /[a-z]|[0-9]/gi
    let newStr = (str.toLowerCase().split('').filter(e => e.match(regex)))
  if(newStr.join('') === newStr.reverse().join('')){
    return true
  }
    return false;
  }
  
  palindrome("race car");
