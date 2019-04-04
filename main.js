// var ws = new WebSocket("ws://192.168.43.100:5500/ws")
// ws.onopen = () => {
//     console.log("Connected");
// }
// ws.onmessage = (msg) => {
//     const message = {
//         code : "200",
//         message: msg.data,

//     }
//     ws.onclose = () => {
//         console.log("Disconnected");
//     }
//     window.ws = ws;
// }


function register(){
    console.log("Hello error");
    var email = document.getElementById("_email").value;
    var password = document.getElementById("_password").value;
    var request = {
        "email": email,
        "password":password
    }
    console.log(request);
    
    const xhr = new XMLHttpRequest();
    const url='http://192.168.43.100:8888/auth/register';
    xhr.open("PUT", url,true);
    xhr.setRequestHeader('Content-type','application/json');
    //Http.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    //Http.setRequestHeader('Connection','keep-alive');
    xhr.send(JSON.stringify(request));
    xhr.onreadystatechange=(e)=>{
         console.log(xhr.responseText)
    }


}
function login(){
    console.log("Hello error");
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var request = {
        "email": email,
        "password":password
    }
    console.log(request);
    
    const xhr = new XMLHttpRequest();
    const url='http://192.168.43.100:8888/auth/login';
    xhr.open("POST", url,true);
    xhr.setRequestHeader('Content-type','application/json');
    //Http.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    //Http.setRequestHeader('Connection','keep-alive');
    xhr.send(JSON.stringify(request));
    xhr.onreadystatechange=(e)=>{
         console.log(xhr.responseText)
    }


}