const resetfields = () =>{
    
   document.getElementById("first-name").value = ''
   document.getElementById("last-name").value = ''
   document.getElementById("email-id").value = ''
   document.getElementById("phone-number").value = ''
   document.getElementById("batch-number").value = ''
   document.getElementById("module-number").value = ''
   document.getElementById("invalidCheck").checked = false



/*---------------------------for Valid----------------------------------------*/   
   setTimeout(() =>{
    document.getElementById('valid-first-name').style.display = 'none'
    document.getElementById('valid-last-name').style.display = 'none'
    document.getElementById('valid-email').style.display = 'none'
    document.getElementById('valid-phone-number').style.display = 'none'
    document.getElementById('valid-batch-number').style.display = 'none'
    document.getElementById('valid-module-number').style.display = 'none'
   },2000)

   /*---------------------------for Invalid----------------------------------------*/   
      setTimeout(() => {
    document.getElementById('invalid-first-name').style.display = 'none'
    document.getElementById('invalid-last-name').style.display = 'none'
    document.getElementById('invalid-email').style.display = 'none'    
    document.getElementById('invalid-phone-number').style.display = 'none'
    document.getElementById('invalid-batch-number').style.display = 'none'
    document.getElementById('invalid-module-number').style.display = 'none'
    document.getElementById('invalid-check').style.display = 'none';
   },6000);
}

const validation = () => {
    // console.log('Hi')
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('email-id').value
    let phone = document.getElementById('phone-number').value
    let batch = document.getElementById('batch-number').value
    let module = document.getElementById('module-number').value
    let validCheck = document.getElementById('invalidCheck').checked

    // console.log(firstName+" "+lastName+" "+email);
    // console.log(phone+" "+batch+" "+module+" "+validCheck)

    let error = false;



    /*--------------------------------------------------------Validation Check---------------------------------------------------------------------------*/
    
    // 1)
   /*---------------------------FirstName----------------------------------------*/ 
    if(firstName && firstName.length >= 3) {
        document.getElementById('valid-first-name').style.display = 'block'
        document.getElementById('invalid-first-name').style.display = 'none'
    }
    else {
        document.getElementById('valid-first-name').style.display = 'none'
        document.getElementById('invalid-first-name').style.display = 'block'
        error = true;
    }
    /*---------------------------LastName----------------------------------------*/ 
    if(lastName && lastName.length >= 3) {
        document.getElementById('valid-last-name').style.display = 'block'
        document.getElementById('invalid-last-name').style.display = 'none'
    }else {
        document.getElementById('valid-last-name').style.display = 'none'
        document.getElementById('invalid-last-name').style.display = 'block'
        error = true;
    }
    /*---------------------------Email----------------------------------------*/ 
    if(email !='' &&
        email.includes('@') &&
        email.includes(".") &&
        email.indexOf('@') <= email.length -2 &&
        email.indexOf('@')>0
        ){        
        document.getElementById('valid-email').style.display = 'block'
        document.getElementById('invalid-email').style.display = 'none'
    }else{
        document.getElementById('valid-email').style.display = 'none'
        document.getElementById('invalid-email').style.display = 'block'
        error = true;
    }
    /*---------------------------Phone----------------------------------------*/ 
    if(phone.length === 10 && phone.includes('1','2','3','4','5','6','7','8','9','0')){        
        document.getElementById('valid-phone-number').style.display = 'block'
        document.getElementById('invalid-phone-number').style.display = 'none'
    }
    else{
        document.getElementById('valid-phone-number').style.display = 'none'
        document.getElementById('invalid-phone-number').style.display = 'block'
        error = true;
    }
    /*---------------------------Batch----------------------------------------*/ 
    if(batch){
        
        document.getElementById('valid-batch-number').style.display = 'block'
        document.getElementById('invalid-batch-number').style.display = 'none'
    }else{
        
        document.getElementById('valid-batch-number').style.display = 'none'
        document.getElementById('invalid-batch-number').style.display = 'block'
        error = true;
    }
    /*---------------------------Module----------------------------------------*/ 
    if(module){        
        document.getElementById('valid-module-number').style.display = 'block'
        document.getElementById('invalid-module-number').style.display = 'none'
    }else{        
        document.getElementById('valid-module-number').style.display = 'none'
        document.getElementById('invalid-module-number').style.display = 'block'
        error = true;
    }
    /*---------------------------T & C----------------------------------------*/ 
    if(validCheck){
        document.getElementById('invalid-check').style.display = 'none';
    }
    else {
        document.getElementById('invalid-check').style.display = 'block';
    }

    if(!error){        
    alert('Your details have been saved successfully!')
    }

    resetfields()
}