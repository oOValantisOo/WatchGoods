function validateData(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var country = document.getElementById("country").value;
    var agree = document.getElementById("agree");
    var message = document.getElementById("message").value;
    const string1 = "none"
    const string2 = country;
    const compareValue = string1.localeCompare(string2)

    
    if(name.length<5){
        alert("Name length is too short! Must be at least 5 characters long!");
    } else if(!email.endsWith(".com")){
        alert("Invalid email domain!");
    } else if(!male.checked && !female.checked){
        alert("Must pick a gender!");
    } else if(compareValue == 0){
        alert("Must pick a country!");
    } else if(!agree.checked){
        alert("Must agree before contacting us!");
    } else if(message.length<15){
        alert("Message length must be at least 15 characters long!");
    }
    else {
        alert("Submission successful!");
    }
}