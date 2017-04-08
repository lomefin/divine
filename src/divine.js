/***

DIVINE

Started in 2017 by Leonardo Luarte (@lomefin)

****/

class IDAlgorhythm{

}

class Module11 {

  clean(string){
    var onlyDigits = string.replace(/[\D]/g,"");
    if(onlyDigits.length < 2) return onlyDigits;
    var firstPart  = onlyDigits.substr(0,onlyDigits.length-1);
    var lastPart   = onlyDigits.substr(onlyDigits.length-1, onlyDigits.length);

    return firstPart + "-" + lastPart;
  }

  calculate(string){
    let multipliers = "32765432765432765432765432"; 
    var sum = 0;
    for(var i = 0; i < string.length; i++){ 
      sum = sum +(parseInt(string.charAt(i)) * parseInt(multipliers.charAt(i))); 
    } 
    var dv = 11 - (sum % 11);
  }

  verify(string, verification){
    console.debug("Verifying ", string, " against ", verification);
    return this.calculate(string) == verification;
  }

  validate(event) {
    var id = this.clean(event.target.value);
    var split = id.split("-");
    this.verify(split[0], split[1]);
    event.target.value = id;
  }



}

class Divine {

  constructor(){
    console.debug("Divine starting. Hallelluyah!");
    this.module11 = new Module11();
    this.findAllInputs();
    
  }

  findAllInputs() {
    for( var input of document.getElementsByClassName("needs-divine-validation")){
      input.addEventListener("keyup", (event)=>{this.module11.validate(event)});
    }
  }

}


document.addEventListener("DOMContentLoaded", function(event) { 
  var divine = new Divine();
});

// export default Divine;