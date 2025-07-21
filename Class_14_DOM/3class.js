class Account{
    open_Account(){
        console.log("Account open Successfully")
    }
    deposit_Amount(){
        console.log("Amount Deposited Successfully")
    }
    withdrawl_Amount(){
        console.log("Amount Withdrawl Successfully")
    }
    get_bal(){
        console.log("Server Busy")
    }
    close_Acc(){
        console.log("Bal is -ve: Please Deposite Amount")
    }
}
let a1 = new Account()
let a2 = new Account()

a1.open_Account()
a1.deposit_Amount()
a1.withdrawl_Amount()
a1.get_bal()
a1.close_Acc()