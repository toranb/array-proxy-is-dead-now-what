import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import Redux from 'npm:redux';

var { createStore } = Redux;

var reducer = ((state=[], action) => {
    if(action.type === 'ADD') {
        return state.concat({name: 'added'});
    }
    return state;
});

var store = createStore(reducer);

var TodoListComponent = Ember.Component.extend({
    init: function() {
        this._super(...arguments);
        store.subscribe(() => {
            this.notifyPropertyChange('todos');
        });
    },
    todos: Ember.computed(function() {
        return store.getState();
    }),
    actions: {
        add: function() {
            store.dispatch({type: 'ADD'});
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
