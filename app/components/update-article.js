import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions: {
    updateArticleForm() {
      this.set('updateArticleForm', true);
    },
    update(article) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        timestamp: this.get('timestamp'),
        image: this.get('image'),
        story: this.get('story'),
        category: this.get('category')
      };
      this.set('updateArticleForm', false);
      this.sendAction('update', article, params);
    }
  }
});
