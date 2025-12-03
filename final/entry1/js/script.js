let MyString = "Marvel Memories";

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

let MyString2 = "You have been apart of my life since I was a young little girl whose dream was to be able to fly. A way to dream and go away to a far away place. ";

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

let MyString3 = "Fighting against evil villians and saving the day. Feeling the victory of beating the bad guy and saving the people who needed them. Learning about you has given me a place to escape the real world and to travel into the world of fiction.";

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