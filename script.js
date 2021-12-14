
var name ="John"
var age = prompt("write your age")
if(age > 18) {
    console.log("your age is "+age + " So you can drink beer ")
}else {
    console.log("Your age is " +age + " So you can only drink Juice")
}
//with ternary operator
age >18 ? console.log("you can drink beerd") :console.log("you can drink only juiceeeeee bndeeee")

switch (true) {
    case age<13:
    console.log("you are a boy")
        
        break;
    case (age>= 13 && age<20):
    console.log("you are a teenager")
        
        break; 
    case 30>age>20:
    console.log("you are a young man")
            
            break;    

    default:
        console.log("you are a man")
        break;
}