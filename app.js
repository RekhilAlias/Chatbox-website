const mobileButton = document.getElementById("mobile-cta");
const Nav = document.querySelector('nav');
const mobileExit = document.getElementById('mobile-exit');


mobileButton.addEventListener('click',()=>{

    Nav.classList.add('menu-btn')
})







mobileExit.addEventListener('click',()=>{

    Nav.classList.remove('menu-btn')
})


function exi(){
  
  Nav.classList.remove('menu-btn')
  
}






//web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBZ4E7nDW8lOb_4zqCfyNBdB8Bxb4OcF18",
  authDomain: "chat-box-form.firebaseapp.com",
  projectId: "chat-box-form",
  storageBucket: "chat-box-form.appspot.com",
  messagingSenderId: "853724565276",
  appId: "1:853724565276:web:8e4c12a3df917c99b134d9"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("infos");
  
  // Listen for a submit
  document.querySelector(".contact").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
   
    console.log(name, email);
  
    saveContactInfo(name, email);
  
  // Show alert
  document.querySelector('.alert').style.display = 'block';
  
  // Hide alert 
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
    document.querySelector(".contact").reset();
  }
  
  // Save infos to Firebase
  function saveContactInfo(name, email) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      name: name,
      email: email 
    });
  }
  