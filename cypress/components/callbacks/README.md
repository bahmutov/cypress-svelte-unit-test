Examples from https://fireship.io/lessons/svelte-v3-overview-firebase/

Shows how to listen for messages from the component via callbacks.

```js
mount(TodoItem, {
  props: {
    id: 'todo-id',
    text: 'write a test',
    complete: false,
  },
  callbacks: {
    remove: cy.stub().as('remove'),
    toggle: cy.stub().as('toggle'),
    'inner-message': cy.stub().as('inner-message'),
  },
})
```
