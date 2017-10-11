Task: build an A/B test that fits the requirements below.
Requirements:
1. Build a page that contains a button. On button click, a javascript object containing the key ‘session_id’ with a current timestamp as the value will be created and logged to the browser console, and The button will open one of two modal dialog variations.
2. The modal dialogs will differ only in the image that they contain. Please see below for requirements on the way the modal dialog should be displayed.
3. Randomly select and store the page variation selected for the user.
4. The variation identifier should persist over page reload
5. Implement an input event listener on a form field of your choosing. Log input to the browser console. 
6. Implement validation on a form field of your choosing. Display validation error to the user. Error must display in current stable versions of Chrome and Safari.
7. When the ‘Submit’ button is clicked, please prevent the form from submitting and create a json object that contains the form input fields as well as the layout variation, and log the json object to the browser console.
