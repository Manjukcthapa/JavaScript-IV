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
    return `Hello my  name is ${this.newName}.I am from  ${this.newPhrase}`;
}
    
}

const Jonny = new Person({
    name :"Jonny",
    location:"Kansas City",
    gender: "M"
  });


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

class Instructor extends Person {
    constructor(object){
        super(object);
        this.newspeciality = object.speciality;
        this.newfavLanguage = object.favLanguage;
        this.newcatchPhrase = object.catchPhrase;
    }
  
}





let JoshKnell = new Instructor({
    name : "JoshKnell",
    location:"California",
    gender:"M",
    speciality:"redux",
    favLanguage:"JavaScript",
    catchPhrase:"Don't forget the homies",


});
