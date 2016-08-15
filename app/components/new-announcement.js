import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    save4() {
      var params = {
        announcer: this.get('announcer') ? this.get('announcer') : "",
        text: this.get('text') ? this.get('text') : "",
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('save5', params);
    }
  }
})
