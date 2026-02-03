class BankAccount {
    constructor (owner, balance = 0, transactions = []) {
        this.owner = owner;
        this.balance = balance;
        this.transactions = transactions;
    };
    deposit (amount) {
    
        //  1. Type check first
        if ( typeof amount !== "number" || isNaN(amount) ) {
            console.log(`Error: ${amount} is not a valid number`);
            return;
        }
        
        //  2. Range check
        if ( amount <= 0 ) {
            console.log(`Error: Deposit amount must be greater than zero.`);
            return;
        }
        
        //  3. Safe to Proceed
        this.balance += amount;
        this.transactions.push(`You've deposited $${amount}`)
        
        //  Updates balance and gives summary
        let depositMsg = `Hi, ${this.owner}\nYou received $${amount} amount\nYour current balance is now: $${this.balance}`;

        console.log(depositMsg);
        //  Only accept positive numbers
        //  Increase the balance
        //  Record the transactions
    };
    withdraw (amount) {
        //  1. Type Check first
        if (typeof amount !== 'number' || isNaN(amount)) {
            console.log(`Error: ${amount} is not a valid number`);
            return;
        }

        //  2. Range check
        if (amount <= 0) {
            console.log(`Error: Withdraw amount must be greater than zero`);
            return;
        }

        //  3. Safe to proceed
        this.balance -= amount;
        this.transactions.push(`You've withdrawn $${amount}`);

        //  Withdraw message & summary
        let withdrawMsg = `Hi, ${this.owner} \nYou withdrew $${amount} amount\nYour current balance is now: $${this.balance}`

        //  Reject if amount is invalid or greater than balance
        //  Decrease the balance
        //  Record the transactions

        console.log(withdrawMsg);
    };
    getBalance () {
        console.log(`Your current balance is $${this.balance}`);
        //  Logs all transactions
    };
    getTransactions () {
        for(let i = 0; i < this.transactions.length; i++){
            console.log(`${this.transactions[i]}`)
        }
        console.log(this.balance);
        //  Log all transactions
    };

}

class SavingsAccount extends BankAccount {
    constructor (owner, balance, interestRate = 1.02, transactions) {
        super(owner, balance, transactions);
        this.interestRate = interestRate;
    };
    addInterest() {
        console.log(this.balance)
        this.balance = this.balance * ( 1 + ( this.interestRate / 100 ));
        console.log(`Interest rate: $${this.balance}`)
    };

};


//  testing
const account = new BankAccount("Eiji", 1000);
account.deposit(500); //    1000 + 500
account.deposit(-90);
account.withdraw(300); //   1500 - 300
account.getBalance(); //    1200
account.getTransactions(); //   transaction list

const savings = new SavingsAccount("Eiji", 2000, 2);
savings.addInterest();
savings.getBalance();
