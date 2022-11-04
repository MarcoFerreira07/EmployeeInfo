const Employee = require("../lib/Employee")



descrirbe('Employee',() =>{


    describe('initialization', () => {
        it('should get initialized correctly' , () => {
            let newEmployee = new Employee("marco" , 1, "marco@gmail.com");

            expect(newEmployee.name).toEqual("marco");
            expect(newEmployee.id).toEqual(1);
            expect(newEmployee.email).toEqual("marco@gmail.com");
        });
    });

    describe('getName', () => {
        it('should return the name that I give it upon instantaition ' , () => {
        let newEmployee = new Employee("marco" , 1, "marco@gmail.com");
        expect(newEmployee.name).toEqual("marco");
        });
    });

    describe('getRole', () => {
        
    });
})