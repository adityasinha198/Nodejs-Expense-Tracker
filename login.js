function login(event){
    event.preventDefault();
    
    const emailid=event.target.emailid.value;
    const password=event.target.password.value;
    console.log(emailid)
    const obj = {
        emailid,
        password
    }
   
   axios.post("http://localhost:8000/login",obj)
    .then(res=>{
        console.log("Logged in")
        alert("Logged in successfully")
    }).catch(err=>{
        if(err.response.status==404){
            alert("User exists")
        }
    })
}