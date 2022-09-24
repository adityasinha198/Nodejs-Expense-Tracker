function forgetpass(event){
    event.preventDefault();
    
    const email=event.target.email.value;
    obj = {
        email:email
    }
    
    //console.log(emailid)
    axios.post("http://localhost:8000/forgetpass",obj)
    .then(res =>{
        console.log(res)
    })
    .catch(err => console.log(err))
}