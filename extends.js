class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
}

class Instructor extends TeamMember {
   
    designation = 'web course Instructor'
    team = 'web team'
    
    constructor(name, location){
        super(name, location);
    }
    
    startSupportSession(time){
        console.log(`start the support at ${time}`)
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`)
    }
   
}

class Developer extends TeamMember {
    
    designation = 'web course Instructor'
    team = 'web team'
    tech;
    
    constructor(name, location,tech){
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature){
        console.log(`Please develop the ${feature}`)
    }
    release(version){
        console.log(`Please release the version ${version}`)
    }
    
}

const alia = new Developer('Alia Bhatt','Dhaka', 'React');
console.log(alia);
alia.provideFeedback();