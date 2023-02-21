class TeamMember{
    name;
    location;
    constructor(name, location){
this.name = name;
this.location = location;
    }
    provideFeedback(){
        console.log(` ${this.name} thank you for your feedback.`)
    }
}



class Instructor extends TeamMember{
    name;
    desigation ='Web Course Instructor'
    team ='Web team'
    
    constructor(name, location){
       super(name, location);
    }
    startSupportSession (time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
    provideFeedback(){
        console.log(` ${this.name} thank you for your feedback.`)
    }
}
//
class Developer extends TeamMember{
   
    desigation ='Web Course Instructor'
    team ='Web team'
    tech;
    
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }
    developerFeature(feature){
        console.log(`Please develop the ${fearture}`)
    }
    release(version){
        console.log(`Please release the  version ${version}`)
    }
    
}
//
class JobPlacement extends TeamMember{
    
    desigation ='Job placement commandos'
    team ='Job placement'
    region;
  
    constructor(name, location, region){
        super(name, location);
        this.region = region;
    }
    provideResume(feature){
        console.log(`Please develop the ${fearture}`)
    }
    prepareStudent(version){
        console.log(`Please release the  version ${version}`)
    }
    
}
const alia = new Developer('Alia Bhatt', 'Dhaka', 'React');
console.log(alia);
alia.provideFeedback();
const bipasha = new JobPlacement('bipasha','kolkata','India');
console.log(bipasha);