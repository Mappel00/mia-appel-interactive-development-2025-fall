let MyString ="#typewriting-target";

let string1TotalCharacterNumber = MyString.length;

let string1iterationIndex = 0;

let string1Intercal = setInterval(function(){
    $("#typewriting-target").append(MyString.charAt(string1iterationIndex));
    string1iterationIndex = string1iterationIndex + 1;
    console.log("1 iteration completed");
    if (string1iterationIndex == string1TotalCharacterNumber){
        clearInterval(string1Intercal);
    }
}, 70); 

let MyString2 ="You maybe someone elses trash or unwanted by another doesn't mean that you won't be loved by someone else. ";

let string2TotalCharacterNumber = MyString.length;

let string2iterationIndex = 0;

let string2Intercal = setInterval(function(){
    $("#word-1").append(MyString.charAt(string1iterationIndex));
    string1iterationIndex = string1iterationIndex + 1;
    console.log("1 iteration completed");
    if (string1iterationIndex == string1TotalCharacterNumber){
        clearInterval(string1Intercal);
    }
}, 70); 