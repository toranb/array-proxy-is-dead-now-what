import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

var TodoListComponent = Ember.Component.extend({
    init: function() {
        this._super(...arguments);
        this.todos = [];
    },
    actions: {
        add: function() {
          this.set('todos', this.get('todos').concat({ name: 'added' }));
        }
    },
    layout: hbs`
      {{#each todos as |todo|}}
        <p>{{todo.name}}</p>
      {{/each}}
      <button onclick={{action "add"}}>add</button>
    `
});

export default TodoListComponent;
