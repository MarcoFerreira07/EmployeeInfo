const Employee = require("../lib/Employee")



describe('Employee',() =>{


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


        expect(newEmployee.getName()).toEqual("marco");
        });
    });

    describe('getRole', () => {
        it('should return the name that I give it upon instantaition ' , () => {
            let newEmployee = new Employee("marco" , 1, "marco@gmail.com", "employee");

            expect(newEmployee.getRole()).toEqual("employee");


        });
        
    });

    describe('getId', () => {
        it('should return the ID that I give it upon instantaition ' , () => {
            let newEmployee = new Employee("Marco", 2, "marco2@gmail.com")

           
            expect(newEmployee.getId()).toEqual(2);
        });
        
    });
})