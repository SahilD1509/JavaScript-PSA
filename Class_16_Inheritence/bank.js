class Account {
    constructor(acc_id, acc_name, acc_address, acc_mobile) {
        this.acc_id = acc_id;
        this.acc_name = acc_name;
        this.acc_address = acc_address;
        this.acc_mobile = acc_mobile;
    }

    updateAddress(newAddress) {
        this.acc_address = newAddress;
    }

    updateMobile(newMobile) {
        this.acc_mobile = newMobile;
    }
}

class SavingsAccount extends Account {
    constructor(acc_id, acc_name, acc_address, acc_mobile, acc_bal = 0) {
        super(acc_id, acc_name, acc_address, acc_mobile);
        this.acc_bal = acc_bal;
        this.min_bal = 500;
    }

    depositAmount(amount) {
        this.acc_bal += amount;
    }

    getBalance() {
        return this.acc_bal;
    }
}

class CurrentAccount extends Account {
    constructor(acc_id, acc_name, acc_address, acc_mobile, acc_bal = 0) {
        super(acc_id, acc_name, acc_address, acc_mobile);
        this.acc_bal = acc_bal;
        this.min_bal = 5000;
    }

    withdrawAmount(amount) {
        if (this.acc_bal - amount >= this.min_bal) {
            this.acc_bal -= amount;
        } else {
            console.log("Withdrawal denied: Minimum balance not maintained.");
        }
    }

    getBalance() {
        return this.acc_bal;
    }
}

// Create instances
const savingsAcc = new SavingsAccount(202, 'Rahul', 'Wayanad', 9085787589, 1000);
const currentAcc = new CurrentAccount(1001, 'Sonia', 'Bangalore', 9098776789, 10000);

// Test outputs
console.log("Savings Account Balance:", savingsAcc.getBalance());
console.log("Current Account Balance:", currentAcc.getBalance());

savingsAcc.depositAmount(500);
console.log("Updated Savings Balance:", savingsAcc.getBalance());

currentAcc.withdrawAmount(3000);
console.log("Updated Current Balance:", currentAcc.getBalance());
