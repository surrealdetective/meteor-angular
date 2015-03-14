# Tutorial 

## Part 0

  1 How do you start the server?
  2 What is the folder structure for organizing html / css / js?
  3 How does meteor compile a specific view?
  4 How do you add Meteor pacakages to a repo?
  5 What naming convention do we use for angular files and why?
  6 How do we limit Angular to run only on the client side? Why is that necessary in Meteor?
  7 What code syntax do you use to run javascript in angular?

## Part 1

  1 Where should you put an HTML template that Angular uses to dynamically display changing data?
  2 If you don't see changes in your app, what should you try doing?

## Part 2
  
  ### View & Template

  1 How does Angular-Meteor reccommend structuring code in your app? Why? Is this necessary?

  2 What does the view reflect when using Angular? How do you create a View Component?

  3 What word is used to describe the binding points that Angular uses to dynamically generate the view?

  4 What's the difference between the ng-controller and ng-repeat directives?

  5 What is the correct syntax for writing an angular directive?

  6 What naming convention do angular directives use to connect model, views, and controllers such that you can give a model a variable name to dynamically display in the view? (like {{party.name}})

  ### Model & Controller

  1 What is a constructor function?
  2 Why is the controller a constructor function?
  3 What does the controller take a $scope parameter?
  4 What is the type of the $scope parameter that you pass as the first argument in the array that gets passed to the controller-constructor function?
  5 What is the 2nd argument?
  6 How might you instantiate a model within the controller?
  7 How is this model accessed in the view? Why can it be accessed in the view?
  8 What is object literal notation?
  9 What does it mean that the controller 'provides context for our data model'?

  * ngController directive located on the div, not the body tag

  10 What does it mean that "the $scope that was injected into our controller function." Why is injection used vs. some other means?
  11 What does it mean "This scope is a prototypical descendant of the root scope that was created"? Where is this scope available in the view?

  ### Scopes
  12 What is the glue that allows the template, model, and controller to work together?
  13 What does Angular's use of scope allow, re: models and views?

  ### Check for Practical Understanding
  14 Add a new model and display it in the view
  15 Use the angular directive ng-repeat to create a table
  16 Make an 8x8 table w/ ng-repeat

  ### Unanswered
  17 Can you do string interpolation w/ meteor or angular?

## Part 3
  
  1 What would you typically do to hook up Angular w/ a server + database? What other 3 things might you do to make things instant?
  2 What is distributed client code and why does meteor make writing it simple? How does accomplishing this task make things easier when writing a modern web app?
  3 What is an RPC endpoint? What's the alternative to caching data on the client side? Why is providing invalidation messages tricky as data changes, typically? 
  4 What database API does meteor's client and server share?
  5 Compare & contrast w/ how validation on an SQL database differs from Ruby validation
  6 How does Meteor's data security model handle code that runs on both client and server, to keep things safe?
  7 What is Meteor's in-memory database cache called? How does it work?
  8 What does it mean that a server "patches" each client's cache?
  9 Compare Reactivity and 3 way data binding. Why use 2 different words?
  10 Minimongo lets Mongo.collection be used on both client and server code. From which side does it port Mongo.collection's use over to?
  11 Where does minimongo get instantiated?

  12 Why do you create a "binding"? What happens now that you have one?
  13 Instead of binding an empty array to a Mongo Collections, we instantiate that variable to a $meteor.collection. Why?
  14 You're in app.js. What are the 3 or so things you do, in the order you do them?
  15 Where does $meteor come from? Why is it passed into the controller? 
  16. What does mongo.db replace?
  

  ### Database
  17 How do you start mongo db w/ meteor?
  18 What syntax adds data to which table in mongo db?
  19 How do read all data from a mongo table?
  20 How do you update the db using mongo?
  21 How do you read Mongo docs / where's a good primer to learn these commands?

## Part 4
  
  1 How many times do you have to add the ng-model directive to a form?
  2 Do you have to use quotation marks when adding angular directive to ng.html files?
  3 What's the convention/sytax for adding a new party in a form that creates a new party?
  4 Where is data stored when the user interacts with an ng-model binded html element?
  5 When can you reference scoped variables directly? (without preceding w/ $scope.)
  6 What angular directive do you use to hook up form submit w/ db?
  7 For a button, what should be the default setting of the object, and why?
  8 Can you add functions to be called in the view? How?
  9 What's a vanilla way of using .splice to remove an item from a collection?
  10 How would you replace vanilla js w/ angular styled add and removal of objects?
  11 What's the reasoning for doing things w/ Angular over regular js?

  ** which file is Mongo.Collection added to?

## Part 5

  ### Route Basics
  1 How does $stateService, provided by $stateProvider, enable "deep linking"?
  2 What's the difference between $stateProvider and $stateService. 
  3 Why is $stateService used in conjunction w/ uiView directive?
  4 What is uiView directive?
  5 What is the rails equivalent of the uiView directive?
  6 The whole point of $stateService and $uiView is to an app that has what feature?
  
  ### 2 PAGE APP
  7 uiView replaces ng-include because?
  8 <base href="/"> tag is required by HTML5 location mode becuase?

  ### Routes
  9 What method do you use to add routes to your app?
  10 Where do you create routes?
  11 What dependencies do you inject to handle route creation?
  12 What method do you use from which dependency to actually name the routes?
  13 How do you handle urls that users may go to, that don't exist?
  14 Why doesn't angular use regular urls?
  15 Because angular doesn't use regular urls, HTML5 location mode is used. What is this?
  16 $stateParams is used to do what re: urls?
  17 How do you pass $stateParams or change it?
  18 When you click back (after navigating around), what happens, and what could have happened instead?

  ** How do you get /parties/random12309sd to generate an error bc it doesn't exist?

## Part 6

  ### Binding
  1 What do you use to bind an object to the view?
  2 $meteor.object's purpose is what?
  3 What are the 2 arguments $meteor.object typically returns?
  4 How do you stop angular from auto-saving?

  ### Controllering
  1 How do you create save and reset buttons?
  2 How do you create an if else statement in the controller? to determine success/failure 
  3 Why is numberOfDocs and error passed to .then() 2 function args? : .then(function(numberOfDocs){}, function(error){});

## Part 7
  
  ### Structure
  1 In what 3 folders does meteor not load onto both server and client?
  2 What's the diff btwn how css is loaded in development vs production? 
  3 Ideally, you should do what in order to ensure css / dependencies are loaded sequentially?
  
  ### Load Order
  4 What gets loaded first: subdirectories or parent directories?
  5 Are files loaded in alphabetical order or updatedAt?
  6 What's the diff btwn files in lib and files that match main.* in terms of load order?

  ### Server
  7 What folder do you keep private data in that only the server can read?

  ### Client
  8 What 3 folders does the client ignore when loading files?
  8.5 For instance, does the client read what's in the models folder? Why is this useful? What's an example of a model that needs to be read on both client and server side?

  ### Public
  9 Where do you keep images, .ico, and robot.txt?

  ### Angular
  10 What are the 2 popular ways to manage folder structure?
  11 What way is recommended by meteor-angular? Why?
  12 What can you find out more by going to https://github.com/johnpapa/angularjs-styleguide#application-structure ?
  
  ### Restructuring 
  13 Why put routes.js in client folder?
  14 What runs in the app.js file located in client/lib?
  15 ReTest: what method is used to define routes?
  16 