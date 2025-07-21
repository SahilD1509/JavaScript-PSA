class Account {
  constructor(id, name, balance) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
}
let a1 = new Account(101,'RG',5000)
let a2 = new Account(101,'PG',15000)
let a3 = new Account(101,'SG',25000)

console.log(a1)
console.log(a2)
console.log(a3)