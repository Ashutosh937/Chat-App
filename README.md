### Project Overview

1. This project is made using React.
2.  The database has been created using Firebase Firestore Realtime db.
3. Much of the project is styled using CSS and material-ui.
4. Two very important libraries have been included namely material-ui/core, material-ui/icons.
5. For linking pages and giving it a multipage feel in a single page application React-Router-Dom has been used.
6. React Context API's have been used extensively.  7. At last one of the most important thing. The project is equipped with Google Authentication i.e. for logging in the user can log in through their  google accounts.
7. We may deploy or not deploy the application.


### Initializing the Project

1. We start by creating a new Project using the create-react-app library.
2. We then remove some unnecessary files from our main folder i.e. the logo.avg, app.test.js and setupTests.js.
3. Then we need to start modifying the App.js component by removing everything between the div tags and writing some data with basic html to check if the app is working.
4. Then we need to think of a basic outline which will be required to make our project and will help us to see things clearly.


### Basic outline

1. The project is inspired from WhatsApp so for the basic Donut, we'll take the page which appears to us when we browse whatsapp on web.
2. We can clearly see that we have to make 3 main components to get started with.
3. First being the Dashboard component where we find the search or create chat option and all the other chats are shown.
4. The Chat option where we can send and receive messages.
5. The login component from where the user can login through Google. We will provide a method so that the user can Sign In using google.


### Implementation Method With Working

1. We see that WhatsApp uses a lot of icons to show its site better;
2. So we start with this, by importing the icons we require from @material-ui/icons.
3. CSS is used to modify the looks and get that better. BEM naming convention has been used for convenience.
4. The component has been divided into different sections for our convenience. The header area containing the icons and the avatar have been put under the div class with the name dashboard__header. The search option has been put under the classname dashboard__search. Similarly the chat part has been put under the div class with classname dashboard__chats.
5. It can be clearly seen that to render the chats in the dashboard and style them accordingly it will be convenient to use another component. Hence another component name DashChat is been made to handle that easily.
6. This component uses a React hook named useEffect to get the userName everytime a new user comes in. It also uses useEffect to get a random value for the avatar so that every time a new user comes in they get an avatar assigned if they haven't come through google authentication. It also contains a function createChat to create a Chat everytime user hita the button. IF the user is present it takes it to the user or you can also create users dynamically if not present already.
7. The dashboard component uses useEffect hook to get the unique userId and the user Data everytime a user logs in.
8. Next comes the Chat component. This component is divided into 3 parts with the header having a subpart to keep things clean and simple.
9. The first part is the chat header part where the avatar of the sender, their name and timeStamp are visible. In whatsapp the attachment icon, the morevert icon are also present. For this these icons have been placed into a seperate div container.
10. The next part is the body of the chat. This part of the body mainly displays the conversation between the two people; the sender and the receiver.
This component uses the useEffect hook to get the messages for the body part and the name and last seen of the person.
11. The last part of this component contains a search option which has been implemented through a form, a mic, an emoticon and send icons. The button present in the footer function triggers a  function sendMessage which sends the sender's message and both the sender's and receiver's message get displays in the chat__body. It also uses the useEffect similar to the dashboard component to assign avatars.
12. The chat component uses a very unique React hook called useParams which returns the id of the user.


### WorkFlow

1. The user logs in through the Login page.
2. When he completes the google authentication he is redirected to the page where his previous chats are been displayed at the left hand side on the dashbord.
3. On the dashboard the last message sent during every conversation is been displayed too along with their profile.
3. When he clicks on any of the previous chats he is redirected to the chat and his previous messages with the receiver are been shown on the right hand side in the chat window.
4. He can see when the person last checked into the app. The timestamp is available just below the avatar. Moreover everytime any of them send a message the time stamp is displayed along with the message.
5. If someone sent a message while the user is on a different chat window, the message shows on the dashboard itself.


### The Screenshots of the project are there in the screenshot folder.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
