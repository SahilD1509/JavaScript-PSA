class Account{
    acc_Name;
    acc_Address;
    acc_Mobile;
    constructor(name,addr,phno){
        console.log("Account class Constructor")
        this.acc_Name=name;
        this.acc_Address=addr;
        this.acc_Mobile=phno;
    }
}
class SA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal=500;
    constructor(id,name,addr,phno,amount){
        super(name,addr,phno);
        console.log("SA class - constructor")
        this.acc_Id=id;
        this.acc_Bal=amount;
    }
}
let sa1=new SA(101,'Rahul','Wayanad',9591,5001)
console.log(sa1)