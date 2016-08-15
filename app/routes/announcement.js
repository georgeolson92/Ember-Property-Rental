import Ember from 'ember';

var announcements = [{
  text: "All rentals have squatters",
  announcer: "Batman"
}, {
  text: "We used lead paint",
  announcer: "Joker"
}, {
  text: "only torches allowed",
  announcer: "PyroGuy"
}];

export default Ember.Route.extend({
  model() {
    return announcements;
  }
});
