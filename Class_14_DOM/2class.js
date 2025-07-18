class Account{
    // Class contains methods and properties
    acc_Id = 101;
    acc_name = "Rahul";
    open_Account(){
        console.log("Account Opened Succesfully")
    }
}
let a1 = new Account()
let a2 = new Account()
console.log(a1)
console.log(a2)
console.log(a1.acc_Id)
console.log(a2.acc_Id)
a1.open_Account()