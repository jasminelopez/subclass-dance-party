var MakeTwirlyDancer = function(top, left, timeBetweenSteps) {
 
  MakeDancer.call(this, top, left, timeBetweenSteps); //inheriting the MakeDancer
  //overriding span node 
  this.$node = $('<img src="images/kitten-transparent-medieval-1.png" class="dancer twirly" width="250" height="250">');
  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

MakeTwirlyDancer.prototype = Object.create(MakeDancer.prototype);
MakeTwirlyDancer.prototype.constructor = MakeTwirlyDancer;

MakeTwirlyDancer.prototype.step = function() {
  //MakeDancer.prototype.step.call(this)
  var oldStep = MakeDancer.prototype.step.bind(this);
  // call the old version of step at the beginning of any call to this new version of step
   oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
};