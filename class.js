// synatactic sugar
class Instructor {
    name;
    designation = 'web course Instructor'
    team = 'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`start the support at ${time}`)
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`)
    }
}

const aamir = new Instructor('aamir', 'mumbai');
console.log(aamir);
aamir.startSupportSession('9:00');
aamir.createQuiz(60);