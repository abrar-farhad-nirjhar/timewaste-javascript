
document.getElementById('error').hidden = true


function check_validity(b=false, c=false){
    
    if(b==false || c==false){
       
        
        return false
    }
    else{
       
       
        return true
    }

  

    

}


document.getElementById('calculate').addEventListener('click', (event)=>{

    event.preventDefault()
    service = document.getElementById('service').value

    amount = document.getElementById('amount').value

    people = document.getElementById('people').value


    
   
    

    if(check_validity(amount!="", people!="")){


        document.getElementById('result').hidden = false
        let result = 0
        if(service==='Poor'){
            result = amount*.05
        }
        else if(service==='Average'){
            result = amount*.1
        }
        else if(service==='Good'){
            result = amount*.15
        }
        console.log(result)
        result = result/people;
        document.getElementById('result').innerHTML = "$"+result + " per person"
        document.getElementById('error').hidden = true
    }
    else{

        document.getElementById('result').hidden = true
        document.getElementById('error').hidden = false
    }


})





