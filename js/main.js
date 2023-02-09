// WEB303 Assignment 2

// Name: Jancy Patel

$(function(){
      const prospect = $('#prospect');
      const convert = $('#convert');
      const retain = $('#retain');
  
      const content = $('#content');
  
      function getContent(e) {
          content.slideUp(500, ()=>{
  
              const fileName = `${e.target.id}.html`;
      
              const xhr = new XMLHttpRequest();
              xhr.open('GET', fileName, true);
      
              xhr.onload = function(){
                  content.html(this.responseText);
                  content.slideDown();
              }
      
              xhr.send();
          });
  
      }
      prospect.click(getContent);
      convert.click(getContent);
      retain.click(getContent);
  });


