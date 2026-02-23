1 ans:

 getElementById selects one element by id, getElementsByClassName selects multiple elements by class, querySelector selects the first element by any CSS selector, and querySelectorAll selects all elements by any CSS selector.


2 ans:

 Use document.createElement() to make an element, set its content or attributes, then insert it into the DOM with appendChild or similar.

3 ans:

 An event on an element automatically propagates up to its parent elements unless stopped.

4 ans:

Attach a single event listener to a parent and handle events on its children using event.target, which saves memory and works for dynamic elements.


5 ans:

preventDefault() stops the default browser action, while stopPropagation() stops the event from bubbling or capturing further.