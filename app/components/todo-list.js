import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

var TodoListComponent = Ember.Component.extend({
    todos: Ember.computed(function() {
        return Ember.ArrayProxy.create({
            content: []
        });
    }),
    actions: {
        add: function() {
            var todo = Ember.Object.create({name: 'added'});
            this.get('todos').pushObject(todo);
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
