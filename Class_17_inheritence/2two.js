class Account{
    acc_Name;
    acc_Addr;
    acc_Mobile;
    constructor(name,addr,phno){
        this.acc_Name=name;
        this.acc_Addr=addr;
        this.acc_Mobile=phno;
    }
    update_Mobileno(phno){}
    update_Address(addr){}
}
class SA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal=500;
    constructor(){}
    deposit_Amount(amount){}
    withdrawl_Amount(amount){}
    get_Bal(){return 0}
}
class CA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal=5000;
    constructor(){}
    deposit_Amount(amount){}
    withdrawl_Amount(amount){}
    get_Bal(){return 0}
}