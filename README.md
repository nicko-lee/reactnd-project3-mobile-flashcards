# Udacity React Nanodegree Project 3 - Mobile Flashcards

## Some background and personal reflection
This assignment proved to be quite challenging for reasons other than the code itself. After having completed Project 1 and 2 I am beginning to feel more comfortable with JS, ES6 and React in general as a framework. However what was difficult in Project 3 wasn't so much the code itself, which other than using native mobile elements such as View instead of Divs and so on, was relatively easy to grasp and similar to React for Web. Instead I had most difficulty with environments and the idiosyncrasies of building for mobile platforms. 

Environments - was super hard to get set up. And finally I got something setup but it is so fragile and keeps crashing and requiring me to restart the simulator. Secondly couldn't get expo to work on my mobile. Thirdly I can only run my app on iPhone SE on the simulator for some frustrating reason.

Idiosyncracies - even just working with the keyboard was challenging. I didn't know how to get the keyboard to show and go away easily and had to figure that out. Things like the time and battery bar at the top kept getting in the way and I had to figure out a way to not have my UI elements crash into them.

## Key learnings
The key learnings I derived from this project were manifold. Here are some that I have been recording as I'm building this:

*  **Working with the keyboard** - had to find a way to create a DismissKeyboard reusable component. So that when people touch away from the TextInput fields it would dismiss the keyboard.

*  **Working with KeyboardAvoidingView in conjunction with TabNavigator** - for some reason I followed along with video tutorials and what seemed like a very simple matter of swapping out the default View for a KeyboardAvoidingView yet weird funky things happened when I tried over and over again. I suspect it is to do with TabNavigator and something is going on there that doesn't let them work together.

*  **Working with ScrollView** - good experience with this and was intuitive and easy to work with. Which is not always the case with many of the other components I had to deal with.

*  **Working with TextInput** - this was surprisingly hard to work with. The HTML equivalent of a form input element was far easier to work with.

*  **Debugging** - with React for Web Chrome or Firefox dev tools were invaluable. You could easily see what is going on in your app and also can use Inspect Element and so on. But here I felt that my hands were tied and I am still in the midst of figuring out how to debug this stuff.

*  **Working with StackNavigators nested within TabNavigators** - first I learnt how to use TabNavigators on their own to get a feel for it. Then I learnt how to work with StackNavigators on their own. But the moment I tried to put them together to create more complex routing in my app, everything started failing. Took me awhile but I figured out you could nest stacks in tabs and this helped tremendously going forward.

*  **Learning how to work with React Navigation's Navigation prop** - one cool feature of React Navigation is that similar to React Router for Web, it comes with some free data out of the box. In this case you get the navigation prop which lets you access quite a few things as well as include parameters together with your routing which I utilized in this app.

*  **Wrapping my head around the asynchronous nature of AsyncStorage** - promises and callbacks was very confusing and at times the results I was getting were very strange and just couldn't seem to get my data from AsyncStorage. But once I realized it returns promises and after looking more into the concept of promises and how they can be in one of three states and don't execute in order, it started to make a bit more sense. Still confusing stuff though.

*  **Working with AsyncStorage API** - Had a bit of difficulty using the setItem() method at first and kept getting fatal errors. But soon learnt about the mergeItem() method which helped me solve the issues around adding a single card to an existing deck.

*  **Working with 2 different 'data stores' and appreciating the challenges to keep them both in sync** - I realized that I was essentially working with 2 different 'data stores' - one being the Redux store which contained my app state and the other being AsyncStorage which persisted my app state. Hence for each time a user inputs any new data, I need to handle it twice, once for Redux and the other for AsycnStorage. And each 'scheme' handles the data a little differently and also the methods and ways you access and manipulate that data is different so it was tricky at first needing to understand both ways and handling them both without conflating the two in each postToDb() method in my app.

*  **Good experience incorporating external libraries into my project** - Specifically I am referring to (react-native-flip-card)[https://www.npmjs.com/package/react-native-flip-card] which came in pretty handy to build a component for the Quiz flow that came with built in 'flipping' animation. It had a simple API but still required some thought to get up and running.

*  **Good practical experience in styling for mobile apps** - I learnt that styling although similar to styling for the web there were many mobile specific concepts. For example flexbox worked differently from flexbox for the web, there is no concept of pixels as units on the mobile version of "CSS" so instead of specifying 100px we drop the 'px' altogether. Also learnt how to use the StyleSheet API that comes bundled in the react-native library. This streamlined and made my styling neater compared to how I did it in Project 2 having not known better at the time. Interestingly enough I commented in my README for Project 2 that one of the things in Project 2 was we had to figure out styling on our own since there was nothing in the course content about it. Then when I started course content for Project 3 I saw the content on styling. So perhaps in the future if there was some indication in the course materials earlier on to point students to the next Part that would be nice. Also learnt a very handy technique of using the backgroundColor property (especially in View elements) to debug styling issues. At first I was going nuts trying to debug styling and layout issues but once I started putting in background colors while developing, it all made so much more sense!

*  **Faced issues with Permissions and Notifications API from Expo** - initially I could not get the notifications to work. Which was very frustrating as it was the final feature I needed to meet spec and complete this project! I thought there was something wrong with my code but upon debugging I kept finding that when I provided the key to where I stored the notifications in AsyncStorage it kept returning null. Then I realized it was because of a permissions issue. The popup asking the user to grant permission never comes up for me in the simulation hence that branch of code I specified to set a value to the notifications key NEVER RUNS.






