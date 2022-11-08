const Manager = require("../lib/Manager")

describe('Manager', () => {

    describe('Initialization', () => {
        it('should return entire manager info ', () => {
            
            let newManager = new Manager("MarcoManager", 2, "MarcoManager@gmail.com", 201)
    
        });
    });

    describe('getRole', () => {
        it('should return engineer when asked what the role is ', () => {
            
        let newManager = new Manager("MarcoManager", 2, "MarcoManager@gmail.com", 201)


        expect(newManager.getName()).toEqual("MarcoManager");
        expect(newManager.getId()).toEqual(2);
        expect(newManager.getEmail()).toEqual("MarcoManager@gmail.com");
        expect(newManager.getOfficeNumber()).toEqual(201);
        
        });

        describe('getOfficeNumber', () => {

            it('should return Office number', () => {

                let newManager = new Manager("MarcoManager", 2, "MarcoManager@gmail.com", 201)

                expect (newManager.getOfficeNumber()).toEqual(201)
                
            });
            
        });

       
    });






});