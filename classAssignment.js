/* Created class of `Job` with the properties:
name
industry
requiresDegree
field
any other relevant properties (get creative!)*/
 
class Job{
    constructor (name, industry, requiresDegree, field, experienceRequired, professionalLevel){
        this.name = name;
        this.industry = industry;
        this.requiresDegree = requiresDegree;
        this.field = field;
        this.experienceRequired = experienceRequired;
        this.professionalLevel = professionalLevel;
    }
/*Added following methods:
getName
getFieldAndIndustry
any other relevant methods*/
    getName(){
        return `${this.name} is the name of the job.`
    }
    getFieldAndIndustry(){
        return `This job is within the ${this.field} field and the ${this.industry} industry.`
    }
    getRequirements(){
        return `this job is a ${this.professionalLevel} level job.
                This job requires a degree: ${this.requiresDegree}. 
                This job requires prior experience: ${this.experienceRequired}`
        
    }
} 

/*Extending the class*/

class Resume extends Job{
    constructor (name, industry, requiresDegree, field, experienceRequired, professionalLevel, startYear, endYear) { 
        super(name, industry, requiresDegree, field, experienceRequired, professionalLevel);
        this.startYear = startYear
        this.endYear = endYear
    }

    getStartYear(){
        return `This job was started in ${this.startYear}.`
    }

    getEndYear(){
        return `This job was ended in ${this.endYear}.`
    }
    
}

// create three different instances of the Job class
let job1 = new Job ('CTAC Participant','tech', 'yes: highschool', 'computer programming', 'no', 'entry level');
let job2 = new Job ('Teacher','Education', 'yes: bachelors', 'High Shool Education', 'no', 'entry level and up');
let job3 = new Job ('Medical Scribe','Healthcare', 'yes: highschool', 'patient care', 'no', 'entry level');



// console log any 2 methods for each instance of the class
console.log(job1.getName(), job1.getFieldAndIndustry())
console.log(job2.getName(), job2.getRequirements())
console.log(job3.getName(), job3.getFieldAndIndustry())

// console.log(job1)
// console.log(job2)
// console.log(job3)

// create an instance of the extended class
let resumeJob1 = new Resume('Dairy Queen Employee','Service', 'no', 'Food Service', 'no', 'entry level', '2010', '2013')

// console log 2 new methods from the extended class
console.log(resumeJob1.getName(), resumeJob1.getStartYear());
console.log(resumeJob1.getName(), resumeJob1.getEndYear());

// console.log(resumeJob1)

// Challenge (Optional)

// Do the entire exercise over using functional OOP. If you already did it that way, use the ES6 way using the keyword 'class' to refactor your code. Submit both versions.