
// import * as $ from 'jquery'
 // check off specific todos by clicking

 // if li is red we will turn it black or vice versa
 $("li").click(function(){
   $(this).toggleClass("completed")
 });

 // click on x to delete todos
 $("span").click(function(event){
   event.stopPropagation();
   $(this).parent().remove();
 })
