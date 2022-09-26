window.addEventListener("DOMContentLoaded",()=>{
    const token = localStorage.getItem("token")

    axios.get("http://localhost:8000/backendreport",{headers :{"Authorisation": token}})
    .then(res =>{
        // console.log(res.data.arrday[0])
        // console.log(res.data.arrweek[0])
        // console.log(res.data.arrmonth[0])
        // console.log(res.data.arrday.length)
        console.log(res.data)
        if(res.data == "Nothing to show"){
            alert("No values to show in expensem \nYOU ARE NOT PREMIUM USER")
        }
        else{
        
        for(let i=0;i<res.data.arrday.length;i++)

        {    let daily = document.getElementById("daily")

            let date = res.data.arrday[i].createdAt
            let description = res.data.arrday[i].description
            let category= res.data.arrday[i].category
            let expense = res.data.arrday[i].amount
            console.log(expense)

            let tablerow = document.createElement("tr")
            tablerow.setAttribute("style","border:2px solid black ;color")

            let datedetail = document.createElement("td")
            datedetail.setAttribute("style","border:2px solid black ;color")
            
            let descdetail = document.createElement("td")
            descdetail.setAttribute("style","border:2px solid black ;color")
            
            let categoryetail = document.createElement("td")
            categoryetail.setAttribute("style","border:2px solid black ;color")

            let expensedetail = document.createElement("td")
            expensedetail.setAttribute("style","border:2px solid black ;color")

            datedetail.innerHTML = `${date}`
            descdetail.innerHTML = `${description}`
            categoryetail.innerHTML = `${category}`
            expensedetail.innerHTML = `${expense}`

            tablerow.appendChild(datedetail)
            tablerow.appendChild(descdetail)
            tablerow.appendChild(categoryetail)
            tablerow.appendChild(expensedetail)

            

           console.log(tablerow) 
        daily.appendChild(tablerow)

            

        }



        for(let i=0;i<res.data.arrweek.length;i++)

        {    let week = document.getElementById("week")

            let date = res.data.arrweek[i].createdAt
            let description = res.data.arrweek[i].description
            let category= res.data.arrweek[i].category
            let expense = res.data.arrweek[i].amount
            console.log(expense)

            let tablerow = document.createElement("tr")
            tablerow.setAttribute("style","border:2px solid black ;color")

            let datedetail = document.createElement("td")
            datedetail.setAttribute("style","border:2px solid black ;color")
            
            let descdetail = document.createElement("td")
            descdetail.setAttribute("style","border:2px solid black ;color")

            let categoryetail = document.createElement("td")
            categoryetail.setAttribute("style","border:2px solid black ;color")

            let expensedetail = document.createElement("td")
            expensedetail.setAttribute("style","border:2px solid black ;color")

            datedetail.innerHTML = `${date}`
            descdetail.innerHTML = `${description}`
            categoryetail.innerHTML = `${category}`
            expensedetail.innerHTML = `${expense}`

            tablerow.appendChild(datedetail)
            tablerow.appendChild(descdetail)
            tablerow.appendChild(categoryetail)
            tablerow.appendChild(expensedetail)

            

           console.log(tablerow) 
        week.appendChild(tablerow)

            

        }


        for(let i=0;i<res.data.arrmonth.length;i++)

        {    let month = document.getElementById("month")

            let date = res.data.arrmonth[i].createdAt
            let description = res.data.arrmonth[i].description
            let category= res.data.arrmonth[i].category
            let expense = res.data.arrmonth[i].amount
            console.log(expense)

            let tablerow = document.createElement("tr")
            tablerow.setAttribute("style","border:2px solid black ;color")

            let datedetail = document.createElement("td")
            datedetail.setAttribute("style","border:2px solid black ;color")
            
            let descdetail = document.createElement("td")
            descdetail.setAttribute("style","border:2px solid black ;color")

            let categoryetail = document.createElement("td")
            categoryetail.setAttribute("style","border:2px solid black ;color")

            let expensedetail = document.createElement("td")
            expensedetail.setAttribute("style","border:2px solid black ;color")

            datedetail.innerHTML = `${date}`
            descdetail.innerHTML = `${description}`
            categoryetail.innerHTML = `${category}`
            expensedetail.innerHTML = `${expense}`

            tablerow.appendChild(datedetail)
            tablerow.appendChild(descdetail)
            tablerow.appendChild(categoryetail)
            tablerow.appendChild(expensedetail)

            

           console.log(tablerow) 
        month.appendChild(tablerow)

            

        }
    }
        
       
        

    })
    

    .catch(err => console.log(err))
})
