$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(), 
      $("body").width() * Math.random(),  
      Math.random() * 1500                 
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    console.log(window.dancers);
    initializeMouseover(); 
  });
  // $('.winterButton').on('click', function(event) {
  //   //top right and left
    
  // });

  //lineup
  $('.lineupButton').on('click', function(event) {
    //top right and left
    var top = 50;
    var top1 = 50;
    //locate dancer array 
     for (var i = 0; i < window.dancers.length; i++) {
       var dancer = window.dancers[i];
       
       if (dancer.whiteWalker) {
        dancer.setPosition(top, 1500);
         top = top + 50;
       } else {
        dancer.setPosition(top1, 200);
        top1 = top1 + 50;
       }
     }  
  });

  var initializeMouseover = function () {
   $('.walker').mouseover(function() {
    var color = $(this).css("filter");
     
    $(this).css("filter", "sepia(100%) hue-rotate(190deg) saturate(500%)");
    console.log("test");
  }); 
 }
  

  $('.goBack').on('click', function(event) {
     for (var i = 0; i < window.dancers.length; i++) {
       var dancer = window.dancers[i];
        dancer.setPosition(
          $("body").height() * Math.random(), 
          $("body").width() * Math.random(),  
          Math.random() * 1000                 
        );
     }  
  });
});

