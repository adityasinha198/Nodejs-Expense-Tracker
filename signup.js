function onSubmit(event){
    event.preventDefault();
    const name=event.target.name.value;
    const emailid=event.target.emailid.value;
    const password=event.target.password.value;
    console.log(name)
    const obj = {
        name,
        emailid,
        password
    }
   
    axios.post("http://localhost:8000/signUp",obj)
    .then(res=>{
        console.log(res)
    }).catch(err=>{
        if(err.response.status==406){
            alert("User created")
        }
        if(err.response.status==404){
            alert("Emailid already exists")
        }
    })
}