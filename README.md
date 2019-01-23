## Playground para testes com React

Links:

https://daveceddia.com/learning-react-start-small/

### Pequenos experimentos iniciais:

* render “hello world”

* render a few nested plain old HTML elements to get a feel for JSX

* “refactor” hello world into 2 components, Hello and World. Nest them inside HelloWorld.
* make World accept an optional prop, the “name” to display, and render it.

* create a static array of things, like const items = [{id: 1, name: "one"}, {id: 2, name: "two"}]. Create a component that takes “items” as a prop and uses items.map(...) to render the list of items.

* Make a counter. Initial state: count = 0. Have a “+” button and a “-“ button that change the count by setting state.

* Put the counter state in the root component, and put the buttons that increment/decrement it in a child a few levels below. Pass the increment/decrement functions down as props so that the children can update the parent’s state.
