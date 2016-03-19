import DS from 'ember-data';

export default DS.Model.extend({
  actual: DS.attr('string'),
  short: DS.attr('string'),
  created: DS.attr('string',{
    defaultValue: function(){
      return new Date();
    }
  })
});
