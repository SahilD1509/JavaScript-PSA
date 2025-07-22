class Account{
    acc_name;
    acc_Address;
    acc_mobile;
    update_address(){}
    update_mobile(){}
}
class SavingsAccount extends Account{
    acc_id;
    acc_bal;
    min_bal=500;
    deposit_amount(amount){}
    get_bal(){}
}
class CurrentAccount extends Account{
    acc_id;
    acc_bal;
    min_bal=5000;
    withdrawl_amount(amount){}
    get_bal(){}
}
class SavingsAccount extends Account{

}
new SavingsAccount(202,'Rahul','Waynad',9085787589,5000)
class CurrentAccount extends Account{

}
new CurrentAccount(1001,'sonia','bangalore',9098776789,6900)