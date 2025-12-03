let MyString = "Art Stuff Collection";

let string1TotalCharacterNumber = MyString.length; 

let string1iterationIndex = 0;

let stringIntercal = setInterval(function(){
    $("#typewriting1").append(MyString.charAt(string1iterationIndex));
    string1iterationIndex = string1iterationIndex + 1; 
    console.log("1 iteration completed");
    if(string1iterationIndex == string1TotalCharacterNumber){
        clearInterval(string1Interval);
    }
}, 70);

let MyString2 = "My collection of art stuff started off small such as a pen here and there but the longer and farther I got into art the more intense my collection got. Now going from one pen to a whole water color palette and brushes with paper. ";

let string2TotalCharacterNumber = MyString2.length; 

let string2iterationIndex = 0;

let stringIntercal2 = setInterval(function(){
    $("#typewriting2").append(MyString2.charAt(string2iterationIndex));
    string2iterationIndex = string2iterationIndex + 1; 
    console.log("1 iteration completed");
    if(string2iterationIndex == string2TotalCharacterNumber){
        clearInterval(string2Interval);
    }
}, 70);

let MyString3 = "With those memories comes the times where I went shopping with my family and how they were confused what each item was used for. My collection is the memories that art brought to me and the happiness that I have when using that stuff to create art. ";

let string3TotalCharacterNumber = MyString3.length; 

let string3iterationIndex = 0;

let stringIntercal3 = setInterval(function(){
    $("#typewriting3").append(MyString3.charAt(string3iterationIndex));
    string3iterationIndex = string3iterationIndex + 1; 
    console.log("1 iteration completed");
    if(string3iterationIndex == string3TotalCharacterNumber){
        clearInterval(string3Interval);
    }
}, 70);