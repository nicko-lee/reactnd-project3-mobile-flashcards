# Udacity React Nanodegree Project 3 - Mobile Flashcards

## Some background and personal reflection
This assignment proved to be quite challenging for reasons other than the code itself. After having completed Project 1 and 2 I am beginning to feel more comfortable with JS, ES6 and React in general as a framework. However what was difficult in Project 3 wasn't so much the code itself, which other than using native mobile elements such as View instead of Divs and so on, was relatively easy to grasp and similar to React for Web. Instead I had most difficulty with environments and the idiosyncrasies of building for mobile platforms. 

Environments - was super hard to get set up. And finally I got something setup but it is so fragile and keeps crashing and requiring me to restart the simulator. Secondly couldn't get expo to work on my mobile. Thirdly I can only run my app on iPhone SE on the simulator for some frustrating reason.

Idiosyncracies - even just working with the keyboard was challenging. I didn't know how to get the keyboard to show and go away easily and had to figure that out. Things like the time and battery bar at the top kept getting in the way and I had to figure out a way to not have my UI elements crash into them.

## Key learnings
The key learnings I derived from this project were manifold. Here are some that I have been recording as I'm building this:

*  **Working with the keyboard** - had to find a way to create a DismissKeyboard reusable component. So that when people touch away from the TextInput fields it would dismiss the keyboard.

*  **Working with KeyboardAvoidingView in conjunction with TabNavigator** - for some reason I followed along with video tutorials and what seemed like a very simple matter of swapping out the default View for a KeyboardAvoidingView yet weird funky things happened when I tried over and over again.

*  **Working with TextInput** - this was surprisingly hard to work with. The HTML equivalent of a form input element was far easier to work with.

*  **Debugging** - with React for Web Chrome or Firefox dev tools were invaluable. You could easily see what is going on in your app and also can use Inspect Element and so on. But here I felt that my hands were tied and I am still in the midst of figuring out how to debug this stuff.





