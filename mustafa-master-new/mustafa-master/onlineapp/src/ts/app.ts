//Type script -> Type script is super set of javascript
// browser understand only html,css, java script. so we need to convert ts(Type script) to js(Java script).
// tsc(type script compiler)tool used to covert(compile) typescript into javascript
 // package.json will be generated by using npm
 // tsconfig.json contain type script compiler configuration. when you run tsc command, it will check the tsconfig.json file.
import {Employee} from "./Employee";
import {EmployeeValidator } from "./EmployeeValidator";
import {address} from "./Employee";
import {IEmployee} from "./employeeInterface";
import {Calculator} from "./calculator";
import {Computer} from "./computer";
import {ICalculator} from "./calculatorInterface";

 let a : Number = 20;
 
 let b:string = "Hello";
 
 let c:boolean = true;
 
 let d : String = "Welcome";
 
 //tightly coupled
let emp:Employee = new Employee("Harish",20,600000,"SE");

let emp2:Employee = new Employee("Mahesh",40,800000,"Mechanical");
emp2.officeEntered();

let emp3:Employee = new Employee("Mahesh",40,800000,"Mechanical");

let emp4:Employee = new Employee("Mahesh",40,800000,"Mechanical");
emp4.officeEntered();

emp4 = emp;

Employee.officeExit();

console.log("Total employees entered into office : "+Employee.count);
// typechecking the json data
let emp5:IEmployee = {"name":"Mahesh","age":40,"salary":500000,"designation":"SE","address":{"streetname":"varthur","city":"Bengalore","pincode":560087,"country":"india"}};
console.log(emp5);
// loosly coupled
let cal1:ICalculator = new Calculator();
console.log("Addition result :: "+cal1.add(20,30));
console.log("Multiplication result :: "+cal1.multiply(20,30));
console.log("It is testing the build and deployemnet process");

