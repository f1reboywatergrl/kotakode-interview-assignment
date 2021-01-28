# Project Documentation

## First Glance: What's wrong?

1. Cannot enter anything in the text box.
2. "Hapus" button does not work.

## Problem-scanning: What causes these bugs?

### For Problem 1,

1. No state handler for the text box. 
2. No submit handler for the text box.

### Solutions:

1. Added ``onChange`` handler on text box change and set its ``value`` to match the input state.
2. Added ``handleSubmit`` function on button ``click``, first tested it by logging out the input. Works fine.

### Additional bugs:

1. ``Tasks`` is a constant state, added ``setState`` function to make it dynamic.

Now, the console is able to display the correct input. Lets optimize ``ToDoList`` to make it dynamic as well.

1. Removed static jsx in ``TodoList.jsx`` and added parameters to make it dynamic. Default state "Cuci baju" and "Masak Nasi" 
is now stated ONLY in ``App.js``.
2. Made a function to iterate through the ``tasks`` parameter at ``App.js``, and converted each element to a list point.

The ``tambah`` function now works perfectly, and all changes can be viewed at the homepage. Now lets move to Problem 2.

### For Problem 2,

1. No handler for ``hapus`` button at ``TodoList.jsx``. Added a handler to splice array on ``delete`` click, however there seems to be a flaw. Even though the array has been spliced, since it takes ``tasks`` from ``App.js`` as a parameter, it won't re-render correctly and since the state is not changed, nothing will happen.

### Brute-force solution:

Since I need to import the state from ``App.js``, I used the ``useCallback`` hook in ``TodoList.jsx`` and edited the state remotely from that file everytime the ``delete`` button is pressed. Front-end wise, it looks good enough as expected.

Main responsibilities done. Now lets spice the project up with some added features and stylings.

## Additional Features

1. Added priority feature. Urgent tasks can be marked with "!" as its first character to indicate importance. Item will be pushed to the top of the list and will be distinguished by a red background.
2. Added special styling if the task has the word "Kotakode" in it.
3. Added fade-in animation on item add.
4. Added gradient background inspired by Kotakode's color palette.
5. Styled input textbox.
6. Styled buttons.

## Final remarks

Overall the task was quite fun, I had no difficulty identifying the problem or finding ideas on how to make the page better, however I struggled a bit in implementing the ``delete`` function since it requires a hook that I was not familiar with. I'm also glad that I still got to learn something this time.