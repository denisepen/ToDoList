
// import * as $ from 'jquery'
 // check off specific todos by clicking

 // if li is red we will turn it black or vice versa
 $("ul").on("click", "li", function(){
   $(this).toggleClass("completed")
 });

 // click on x to delete todos
 $("ul").on("click", "span", function(event){
   event.stopPropagation();
   // $(this).parent().remove();
   $(this).parent().fadeOut(500, function(){
     $(this).remove();
   });
 })

 $("input[type='text']").keypress(function(event){
   if (event.which === 13){
     // grabbing todotext frominput
     var toDoText = $(this).val();
     $(this).val("")
     // create new li and add to ul
     $("ul").append("<li> <span> <i class='fa fa-trash'></i> </span>" + toDoText + "</li>")

   }
 })

 $(".fa-plus").click(function(){
   $("input[type='text']").fadeToggle();
 })
