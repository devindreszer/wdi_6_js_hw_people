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
  },
  weightInStone: function(){
    return this.weight * 0.157473;
  },
  addFriend: function(friend) {
    this.friends.push(friend);
  },
  removeFriend: function(name) {
    this.friends = this.friends.filter(function(friend){
      return friend.firstName !== name;
    });
  }
};

var bill = new Person("Bill", "Clinton");
var barack = new Person("Barack", "Obama");

console.log(bill.fullName());
console.log(barack.weightInStone());

bill.addFriend(barack);
console.log(bill.friends[0]);

bill.removeFriend("Barack");
console.log(bill.friends[0]);
