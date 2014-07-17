var Person = function(firstName, lastName, options) {
  this.firstName = firstName;
  this.lastName = lastName;
  options = options || {};
  this.age = options.age || 30;
  this.weight = options.weight || 80;
  this.height = options.height || 150 + Math.floor(Math.random() * 51);
  this.friends = options.friends || [];
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
    return this;
  },
  removeFriend: function(name) {
    this.friends = this.friends.filter(function(friend){
      return friend.firstName !== name;
    });
    return this;
  },
  greetPeople: function(people, greeting) {
    people = people || this.friends;
    greeting = greeting || "Hi";

    if(people.length === 0) {
      throw new Error("No people to greet");
    } else {
      fullGreeting = "";
      people.forEach(function(person){
        fullGreeting += greeting + ", " + person.fullName() + "\n";
      });
      return fullGreeting;
    }
  }
};

// test data
var bill = new Person("Bill", "Clinton", { age: 75 });
var george = new Person("George", "Bush");
var barack = new Person("Barack", "Obama");

console.log(bill.fullName());
console.log(barack.weightInStone());

bill.addFriend(barack);
bill.addFriend(george);
console.log(bill.friends[0]);

bill.removeFriend("George");
console.log(bill.friends[0]);

// console.log(barack.greetPeople());
console.log(bill.greetPeople());
console.log(george.greetPeople([barack, bill], "Ahoy"));
