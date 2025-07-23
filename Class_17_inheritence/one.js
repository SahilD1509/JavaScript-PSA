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
class SA extends Account{}
class CA extends Account{}