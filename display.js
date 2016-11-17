'use strict';

function display() {
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'object') {
      displayObject(arguments[i])
    } else {
      displayValue(arguments[i])
    }
  }
}

function displayObject(object){
  displayValue(object.constructor.name + ' {');
  for(var propertyName in object){
    displayValue(propertyName + ': ' + object[propertyName], true, true);
  }
  displayValue('}', true);
}

function displayValue(value, addMargin, addPadding) {
  var div = document.createElement('div')
  div.style.fontSize = '18px'
  //if (addMargin)
//    div.style.marginBottom = '30px'
  if (addPadding)
    div.style.paddingLeft = '30px'
  div.innerText = value
  document.body.appendChild(div)
}

//////////////////////////////////////////////////////////////////////////

// (1) Function Arguments

/*
function myFunc(a, b, c){
  return a + b + c;
}

display(myFunc(1,2,3));
display(myFunc(1,2,3,4));
display(myFunc(1,2));
*/

// Auguments are not required like .NET languages
// Like all variables in javascript, arguments are untyped
// Unspecified arguments become undefined
// Arguments available through arguments object
//     It's array-like, but not really an array

/*
function myFunction(){
  var x = 0; 
  for(var i=0; i<arguments.length; i++){
    x += arguments[i];
  }
  return x;
}

display(myFunction(1,2,3));
display(myFunction(1,2,3,4));
display(myFunction(1,2));
*/

//////////////////////////////////////////////////////////////////////////

// (2) Chaining 

/*
 Useful for creating fluent APIs for working against a mutable object
 Designed around returning the source object
 Popularized by jQuery
     Common from .NET perspective in LINQ

 jQuery('foo')
      .addClass('bar')
      .fadeIn('slow')
      .html('Hello World');

*/

/*
var Calc = function(start) {
  this.add = function(x){
    start = start + x;
    return this;
  };
  
  this.multiply = function(x){
    start = start * x;
    return this;
  };
  
  this.equals = function(callback){
    callback(start);
    return this;
  };
}

new Calc(0)
  .add(1)
  .add(2)
  .multiply(3)
  .equals(function(result){
  display(result);
});
*/

/*
Return the object you want to chain
    the this object
    Capture the this object if the caller isn't trusted
*/

/*
var Calc = function(start) {
    var returnObject=this;  
  this.add = function(x){
    start = start + x;
    return returnObject;
  };
  
  this.multiply = function(x){
    start = start * x;
    return returnObject;
  };
  
  this.equals = function(callback){
    callback(start);
    return returnObject;
  };
}

new Calc(1)
  .add(1)
  .add(2)
  .multiply(3)
  .equals(function(result){
  display(result);
});
*/

//////////////////////////////////////////////////////////////////////////

// (3) Obeservable Properties

/*
 How can you react to a value changing on an object ? 
    .NET we can have properties with method bodies
    INotifyPropertyChanging/INotifyPropertyChanged available in .NET

*/

// When I read the discussion about that course, most of them do not recommend that course 
// So I change the course 

// Pratical Design Patterns in Javascript By Jonathan Mills

//////////////////////// Types of Patterns ////////////////////////
/*
Creational                    Structural                Behaviour
(1) Constructor               (1) Decorator             (1) Command
(2) Module                    (2) Facade                (2) Mediator
(3) Factory                   (3) Flyweight             (3) Observer
(4) Singleton
*/

