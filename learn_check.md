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

  1 Where should you put an HTML template that that Angular uses to dynamically display changing data?
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

  