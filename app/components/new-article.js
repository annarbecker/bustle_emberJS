import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        timestamp: this.get('timestamp'),
        image: this.get('image'),
        story: this.get('story'),
        category: this.get('category')
      };
      this.sendAction('save', params);
    }
}
});
