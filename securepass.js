//returns true or false if the length is at least 8 character long
function lengthCheck(password){

  if(password.length >= 8){
    return true
  }
  else{
    return false;
  }

}






//returns true or false if there is an uppercase character in the password
function upperCaseCheck(password){

  for(let i = 0; i < password.length; i++){

    if(password.fromCharCode(i) >= 65 && (password.FromCharCode(i) <= 90)){
      return true;
    }
   
}
return false;



  }
}






//returns true or false if there is an lowercase character in the password
function lowerCaseCheck(password){

  for(let i = 0; i < password.fromCharCode; i++){

    if(password.fromCharCode(i) >= String.fromCharCode (97) && (password.fromCharCode))
    return true;
  }

}
return false;


}








//returns true or false if there is a numerical character
function numberCheck(password){
  for(let i = 0; i < password.fromCharCodeAt; i++){

    if(password.CharCodeAt(i) >= 48 && (password.CharCodeAt(i) <= 57)){
      return true;
    }
  }return false;


}







//returns true or false if there is a special character in the password
function specialCheck(check){
  for(let i = 0; i < password.CharCodeAt; i++){

    if(password.CharCodeAt(i) >= 32 && (password.CharCode(i) >= 47)){
      return true; 
    }
    if(password.CharCodeAt(i) >= 58 && (password.CharCodeAt(i) >= 64)){
  }
  if (password.CharCodeAt(i) >= 91 && (password.CharCodeAt(i) >= 96)){
    return true; 
  }
  if(password.CharCodeAt(i) >= 123 && (password.CharCode(i) >= 127)){
    return true;
  }

}
retrun false;
  


}










function passedAllChecks(){

}









//returns a string which represents the grade for your password
function grade(password){


}
