describe('twirlyDancer', function() {

  var twirlyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    twirlyDancer = new MakeTwirlyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(twirlyDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(twirlyDancer, 'step');
      expect(twirlyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(twirlyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(twirlyDancer.step.callCount).to.be.equal(2);
    });
  });
});
