// Accordion Script
function toggleContent(id) {
    const content = document.getElementById(id);
    content.previousElementSibling.classList.toggle('active');
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  }
  
  
  