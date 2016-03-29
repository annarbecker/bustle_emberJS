import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  timestamp: DS.attr(),
  image: DS.attr(),
  story: DS.attr(),
  category: DS.attr()
});
