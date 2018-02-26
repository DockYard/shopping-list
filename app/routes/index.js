import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    alert('Hello World');
    return this.get('store').liveQuery(q => q.findRecords('shoppingList'));
  }
});
