let MyString = "My Knick Knack Collection";

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

let MyString2 = "You might be anothers trash or unwanted. But to me you hold a story that calls to me.";

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

let MyString3 = "You might have lost a home but with me you have gained a new family among the other lost items that I have collected over the years.";

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


$(".main-part").hide();

$("#button").on("click", function(){
   $(".main-part").show();
})