// CODE here for your Lambda Classes
// Person
// First we need a Person class. This will be our base-class
// Person receives name age location gender all as props
// Person receives speak as a method.
// This method logs out a phrase 
//Hello my name is Fred, I am from Bedrock where name and location are the object's own props

class Person{
constructor(object){
    this.newName = object.name;
    this.newlocation = object.location;
    this.newGender = object.gender;
}
speak(){
    return `Hello my  name is ${this.newName}.I am from  ${this.newlocation}`;
}
    
}

const Jonny = new Person({
    name :"Jonny",
    location:"Kansas City",
    gender: "M"
  });
  console.log(Jonny.speak());


//   Instructor
// Now that we have a Person as our base class, we'll build our Instructor class.
// Instructor uses the same attributes that have been set up by Person
// Instructor has the following unique props:
// specialty what the Instructor is good at i.e. 'redux'
// favLanguage i.e. 'JavaScript, Python, Elm etc.'
// catchPhrase i.e. Don't forget the homies
// Instructor has the following methods:
// demo receives a subject string as an argument and logs out the phrase 'Today 
// we are learning about {subject}' where subject is the param passed in.
// grade receives a student object and a subject string as arguments 
// and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person{
    constructor(object){
        super(object);
        this.newSpecialty = object.speciality;
        this.newFavLanguage = object.favLanguage;
        this.newCatchPhrase = object.CatchPhrase
    }
    demo(subject){
        return ` we are learning about ${subject}`
    }

    grade(subject){
        return `${this.newName} receives a perfect score on ${subject}`

    }


}

let josh = new  Instructor ({
  name: "Josh Knell",
  location: "California",
  age:35,
  specialty:  "redux",
  favLanguage :"JavaScript",
  catchPhrase : "Don't forget the homies"
});

console.log(josh.demo("ruby"));
console.log(josh.grade("Java"));


// Student
// Now we need some students!
// Student uses the same attributes that have been set up by Person
// Student has the following unique props:
// previousBackground i.e. what the Student used to do before Lambda School
// className i.e. CS132
// favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// Student has the following methods:
// listsSubjects a method that logs out all of the 
// student's favoriteSubjects one by one.
// PRAssignment a method that receives a subject as an argument and logs out
//  that the student.name has submitted a PR for {subject}
// sprintChallenge similar to PRAssignment but logs out student.name has begun 
// sprint challenge on {subject}

class Student extends Person{
    constructor(object){
        super(object);
        this.newpreviousBackground  = object.previousBackground ;
        this.newclassName = object.className;
        this.newfavSubjects = object.favSubjects;
    }
    
    PRAssignment(subject){
       return `${this.newName} has submitted a PR for ${subject}` 
    }

}

let Manju = new  Student ({
  name: "Manju",
  location: "Atlanta",
  age:20,
  previousBackground :  "Cashier",
  className :"Web19",
  favSubjects : "['Html', 'CSS', 'JavaScript']"
});

console.log(Manju. PRAssignment("java"));
console.log(Manju. PRAssignment("Html"));
console.log(Manju. PRAssignment("Javascript"));


// Project Manager
// Now that we have instructors and students, we'd be nowhere without our PM's
// ProjectManagers are extensions of Instructors
// ProjectManagers have the following unique props:
// gradClassName: i.e. CS1
// favInstructor: i.e. Sean
// ProjectManagers have the following Methods:
// standUp a method that takes in a slack channel and 
// logs `{name} announces to {channel}, @channel standy times!​​​​​
// debugsCode a method that takes in a student object and a subject and 
// logs out {name} debugs {student.name}'s code on {subject}

class ProjectManagers extends Instructor{
    constructor(object){
        super(object);
        this.newgradClassName  = object.gradClassName;
        this. newfavInstructor = object. favInstructor;
    }
    
StandUp(channel){
   return `${this.newName} announces to ${channel}, @channel standy times!​​​​​`
}
debugsCode(studentName,subject){
return `${this.newName} debugs ${studentName}'s code on ${subject}`;
}
}

let Bradly = new  ProjectManagers ({
  name: "Bradly",
  location: "Russia",
  age:24,
  specialty:  "redux",
  favLanguage :"JavaScript",
  catchPhrase : "Don't forget the homies",
  gradClassName:" CS1",
  favInstructor: " Sean"

});

console.log(Bradly. StandUp("web19_Bradley"));
console.log(Bradly. debugsCode("manju","Javascript"));