const Intern = require ("../lib/Intern");

describe("Intern",() => {

    describe ("initialization", () => {

        let newIntern = new Intern("Mac", 3, "Mactheintern@gmail.com", "SMU");

        expect (newIntern.name).toEqual("Mac")
        expect (newIntern.id).toEqual(3)
        expect (newIntern.email).toEqual("Mactheintern@gmail.com")
        expect (newIntern.school).toEqual("SMU")

    });

    describe ("getSchool", () => {


        it('should return school name ', () => {
            
            let newIntern = new Intern("Mac", 3, "Mactheintern@gmail.com", "SMU");
            
           
            expect (newIntern.getSchool()).toEqual("SMU")
            
        });
    });

    describe ("getRole", () => {


        it('should return Role name ', () => {
            
            let newIntern = new Intern("Mac", 3, "Mactheintern@gmail.com", "SMU");
            
           
            expect (newIntern.getRole()).toEqual("Intern")
            
        });
    });




});