document.querySelector('#navigateYoutube').addEventListener('click',(e)=>{
    e.preventDefault();
    window.open(
        "https://www.youtube.com/watch?v=Ed5eh3VDwtI", "_blank")
  })

  
  document.querySelector('#sscExamination').addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href='/CourseInfoPreRequest' 
   
  })