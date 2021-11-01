# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Versioning:
[Semantic version for react apps](https://reactjs.org/docs/faq-versioning.html)

# Testing:
Use whichever testing framework is used on the team. In the case of something like jest we should test:
modal errors if necessary props aren't present
hitting escape/cancel/x closes modal
typing in data and submitting saves data
that screen readers can see the appropriate properties set for the react components

# Accessibility:
Most of what I could find were aria-labeledby and aria-describedby properties for the Dialog component. My googling failed me, but honestly I don't have a ton of experience handling 508 compliance/accessibility for React components so I'm looking forward to learning more about that. I also didn't set this as a prop, but we could pass in some values for colors/themes to account for color blindness, high contrast, dark mode, etc.

# User stories

1.  For the developer I marked up the code with jsdoc comments, so you should be able to run `jsdoc src/` to get which props are required for the modal. The DialogDemo also serves dual purposes as it gives devs an example of how to use the modal.
2.  For the non-technical manager, they should also be able to reference the jsdocs. Additionally, I can communicate with them to help them understand if the react component is what they need or if adjustments have to be made such that their needs are met with a future version.

# Shortcomings:
Used MUI with several instances of the sx prop. That can cause a performance hit but I was told KITE took care of styling. I also forgot to ask what constituted a failure for the success/failure message. I made a notification that pops up with failure if the data you're saving is the same as it was before (but it'll still save). This is unrealistic, but that's what I get for not asking.
