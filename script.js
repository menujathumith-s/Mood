let user = {};

function nextSlide() 

{

    let name = document.getElementById("nameInput").value.trim();
    // get first name only
    let firstName = name.split(" ")[0];
    

    // make first letter capital
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

    let email = document.getElementById("emailInput").value.trim();
    let dob = document.getElementById("birthdayInput").value;

    if (!name || !email || !dob) {
        alert("Please fill all fields");
        return;
    }

    let emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailCheck.test(email)) {
        alert("Invalid email");
        return;
    }

    let birth = new Date(dob);
    let today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    if (today.getMonth() < birth.getMonth() || (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())) {
        age--;
    }

    if (age < 13 && age > 83) {
        alert("Age must be 13 or above and 83 or below 83");
        return;
    }

    
    if (age<21){
        tyo="a teenager";
    }
    else if (age<35){
        tyo="young";
    }

    else if (age<55){
        tyo="middle-age";
    }

    else{
        tyo="old";
    }


    document.getElementById("welcomeText").innerText = "Hi " + firstName + " !";
    document.getElementById("ageText").innerText = "ohh... you are " + tyo +" ( "+ age + " years old !)";
    document.getElementById("fillText").innerText= "If you want to upgrade, Please fill these blanks " + firstName + "....";

    document.getElementById("slide1").classList.remove("active");
    document.getElementById("slide2").classList.add("active");

}

window.addEventListener("DOMContentLoaded",()=>{
    const video= document.getElementById("bv");
    video.addEventListener("loadeddata",()=>{
        video.playbackRate=0.7;
        video.play();
    });
});

function toggleJob() {
    let job = document.getElementById("job");
    let type = document.querySelector('input[name="type"]:checked')?.value;
    job.disabled = (type !== "worker");
}

function showResult() {
    let gender = document.querySelector('input[name="gender"]:checked')?.value;
    let type = document.querySelector('input[name="type"]:checked')?.value;
    let mood = document.getElementById("mood").value;
    let job = document.getElementById("job").value;

    if (!gender || !type) {
        alert("Select all options");
        return;
    }

    let suggestion = "";
    let bg = "";
    let jobs= "";

    if (mood === "Happy😃") {
        if (gender==="male"){
        suggestion = "Go outside and enjoy nature 🌳";
        bg = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee";
        let sound = document.getElementById("slideha");
        sound.currentTime = 0; // restart sound
        sound.play();
        sound.volume = 0.5;} // 50%
        else{
        suggestion = "Listen to music and make your own dance";
        bg = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee";
        let sound = document.getElementById("slideha");
        sound.currentTime = 0; // restart sound
        sound.play();
        sound.volume = 0.5;}
        
    } else if (mood === "Sad😥") {
        if (gender==="male"){
        suggestion = "Listen to music or watch a movie 🎵";
        bg = "https://images.unsplash.com/photo-1492724441997-5dc865305da7";
        let sound = document.getElementById("slidesa");
        sound.currentTime = 0; // restart sound
        sound.play();
        sound.volume = 0.5;} // 50%
        else {
        suggestion = "Get comfort from close friends or someone u trust";
        bg = "https://images.unsplash.com/photo-1492724441997-5dc865305da7";
        let sound = document.getElementById("slidesa");
        sound.currentTime = 0; // restart sound
        sound.play();
        sound.volume = 0.5;} // 50%
    } else if (mood === "Angry😡") {
        if (gender==="male"){
        suggestion = "Take deep breaths and relax 😌";
        bg = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e";
        let sound = document.getElementById("slidean");
        sound.currentTime = 0; // restart sound
        sound.play();
        sound.volume = 0.5;} // 50%
        else{
        suggestion = "Get time to cool down and control yourself";
        bg = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e";
        let sound = document.getElementById("slidean");
        sound.currentTime = 0; // restart sound
        sound.play();
        sound.volume = 0.5; }// 50%
    } else if (mood === "Frustration😔") {
        if (gender==="male"){
        suggestion = "Forget past live at present with fixing your mistakes 😎";
        bg = "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D";
        let sound = document.getElementById("slidefr");
        sound.currentTime = 0; // restart sound
        sound.play();
        sound.volume = 0.5;} // 50%
        else{
        suggestion = "Forget past live at present with fixing your mistakes";
        bg = "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D";
        let sound = document.getElementById("slidefr");
        sound.currentTime = 0; // restart sound
        sound.play();
        sound.volume = 0.5;} // 50%
    } else if (mood === "Thinking🤔") {
        if (gender==="male"){
        suggestion = "Think about new things not past 🙄";
        bg = "https://plus.unsplash.com/premium_photo-1719943510748-4b4354fbcf56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D";
        let sound = document.getElementById("slideth");
        sound.currentTime = 0; // restart sound
        sound.play();
        sound.volume = 0.5;} // 50%
        else{
        suggestion = "Think about new things not others";
        bg = "https://plus.unsplash.com/premium_photo-1719943510748-4b4354fbcf56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D";
        let sound = document.getElementById("slideth");
        sound.currentTime = 0; // restart sound
        sound.play();
        sound.volume = 0.5;} // 50%
    } else if (mood === "Normal🙂") {
        if (gender==="male"){
        suggestion = "Do what your brain says 😏";
        bg = "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D";
        let sound = document.getElementById("slideno");
        sound.currentTime = 0; // restart sound
        sound.play();
        sound.volume = 0.5;} // 50%
        else {
        suggestion = "Do what your brain says";
        bg = "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D";
        let sound = document.getElementById("slideno");
        sound.currentTime = 0; // restart sound
        sound.play();
        sound.volume = 0.5;} // 50%
    } else {
        if (gender==="male"){
        suggestion = "Take a rest and recharge 😴";
        bg = "https://images.unsplash.com/photo-1519681393784-d120267933ba";
        let sound = document.getElementById("slideti");
        sound.currentTime = 0; // restart sound
        sound.play();
        sound.volume = 0.5;} // 50%
        else{
        suggestion = "Take rest and recharge 😴";
        bg = "https://images.unsplash.com/photo-1519681393784-d120267933ba";
        let sound = document.getElementById("slideti");
        sound.currentTime = 0; // restart sound
        sound.play();
        sound.volume = 0.5;} // 50%
    }

    if (job==="Engineer⛏️"){
        if (gender==="male"){
        jobs = "👷";}
        else{jobs="👷‍♀️";}
    }else if (job==="Doctor🩺"){
        if (gender==="male"){
        jobs = "🧑‍⚕️";}
        else{jobs="👩‍⚕️";}
    }else if (job==="Businessman💸"){
        if (gender==="male"){
        jobs="🧑‍💼";}
        else{jobs="👩‍💼";}
    }else if (job==="Programmer💻"){
        if (gender==="male"){
        jobs="🧑‍💻";}
        else{jobs="👩‍💻";}
    }else {
        if (gender==="male"){
        jobs="";}
        else{jobs="";}
    }

    if (type === "student") {
        suggestion += "\nAlso focus on your studies 📚";
    } else {
        suggestion += "\nFocus on your work " + jobs ;
    }

    if (gender === "male") {
        suggestion += "\n \ngood luck bro 👊 !";
    } else {
        suggestion += "\n\ngood luck sis 🤙 !";
    }

    let name = document.getElementById("nameInput").value.trim();
    let firstName = name.split(" ")[0];
    let Last = name.split(" ")[1];

    if (Last === undefined){
      Last = "...";}

    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    
    document.getElementById("resultTitle").innerText = "Hello "+ firstName +" "+ Last   ;
    document.getElementById("resultText").innerText = suggestion;
    document.getElementById("slide3").style.backgroundImage = `url(${bg})`;

    document.getElementById("slide2").classList.remove("active");
    document.getElementById("slide3").classList.add("active");

    sendEmail(suggestion);

}

/* SEND EMAIL FUNCTION */
function sendEmail() {

    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let suggestion = document.getElementById("resultText").value;

    if (!name || !email) {
        alert("Please fill all fields");
        return;
    }

     emailjs.send("service_eigjzqs", "template_nr2m2nb", {

        to_email: email,
        from_name:"Mo0d😎",
        message: suggestion,
        name:name,
        
})
}
/*    .then(() => {
        alert("Email sent successfully ✅");
    })
    .catch(function(error) {
    alert("Error: " + error.text);
    console.log(error);
});
} */
