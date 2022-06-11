// function mySignInFunction(e){
//     // e.preventDefault()
//    const userid = document.querySelector("#login-userid").value
//    const password =  document.querySelector("#login-password").value
  
//     window.location.href='/CourseInfo'
  
 
//  }

 document.querySelector('#login-submit').addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href='/CourseInfo' 
  })
  