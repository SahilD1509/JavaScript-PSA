/* class Account{
    acc_Id;
    acc_Name;
    acc_bal;

    deposit_Amount(amount){
        return true;
    }
}
let a1 = new Account(101,"Rahul",15000)
a1.deposit_Amount(5000)
a1.deposit_Amount(1500) */

class Account {
    constructor(acc_Id, acc_Name, acc_bal) {
        this.acc_Id = acc_Id;
        this.acc_Name = acc_Name;
        this.acc_bal = acc_bal;
    }
    deposit_Amount(amount) {
        this.acc_bal += amount;
        console.log(`Deposited ${amount}. New balance: ${this.acc_bal}`);
        return true;
    }
}
// Usage
let a1 = new Account(101, "Rahul", 15000);
a1.deposit_Amount(5000);
a1.deposit_Amount(1500);
