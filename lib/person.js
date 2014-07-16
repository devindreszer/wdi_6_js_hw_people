var Person = function(firstName, lastName, age, weight, height, friends) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age || 30;
  this.weight = weight || 80;
  this.height = height || 150 + Math.floor(Math.random() * 51);
  this.friends = friends || [];
};

Person.prototype = {
  fullName: function(){
    return this.firstName + " " + this.lastName;
  }
};
