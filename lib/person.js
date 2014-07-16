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
  },
  greetPeople: function(people, greeting) {
    people = people || this.friends;
    greeting = greeting || "Hi";

    if(people.length === 0) {
      throw "No people to greet";
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
var bill = new Person("Bill", "Clinton");
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
