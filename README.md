# Mini Page Builder

This is page builder app. Which allows user to build a page layout with `drag & drop`

[Checkout live demo here](https://uddesh-mini-page-builder.netlify.app/)

### or

## Instruction to run on local machine

1. Clone to repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the app on localhost
4. Open browser and got to [localhost:3000](http://localhost:3000)

## Folder Structure

1. Assets:- Contains the `image`
2. Containers:- This directory contains all the `UI` and `Business Logic`
3. Global:- It contains `global styling` file and a `global component` file that are being user in various parts of the application
4. Redux:- It contains `store`, `reducers` and all `actions`
5. Util:- It contains utility function to create an element on the page

## Libraries used

1. Redux (For `state management`)
2. Styled Components (To use `JS` in `CSS`)
3. uuid (To generate `unique id` for each element)
