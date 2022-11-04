const Engineer = require("../lib/Engineer")

describe('Engineer', () => {

    describe('Initialization', () => {
    
    });

    describe('getRole', () => {
        it('should return engineer when asked what the role is ', () => {
            
        let newEngineer = new Engineer("MarcoEng", 2, "MarcoEng@gmail.com", "github.com/MarcoEng")

        expect(newEngineer.getRole()).toEqual("Engineer");
        
        });

    });

    describe('getHub', () => {
        it('should return github when asked what the role is ', () => {
            let newEngineer = new Engineer("MarcoEng", 2, "MarcoEng@gmail.com", "github.com/MarcoEng")

            expect (newEngineer.getGithub()).toEqual("github.com/MarcoEng")
        });
    });

    describe('getRole ', () => {
        it('should return ROLE when asked what the role is ', () => {

            let newEngineer = new Engineer("MarcoEng", 2, "MarcoEng@gmail.com", "github.com/MarcoEng")

            expect (newEngineer.getRole()).toEqual("Engineer");
        
    });
    
});
});