class BankAccount {
    constructor (owner, balance = 0, transactions = []) {
        this.owner = owner;
        this.balance = balance;
        this.transactions = transactions;
    }
    
    deposit (amount) {
        //  Terminates operation if amount is NAN
        if ( amount <= 0 || isNaN(amount) ) {
            return console.log(`${amount} is not a valid number`);
        };


        //  Adds the amount to current balance
        if ( amount > 0 ) {
            this.balance += amount;
            this.transactions.push(`You've deposited $${amount}`)
        };

        let depositMsg = `
        Hi, ${this.owner}
        You received $${amount} amount
        Your current balance is now: $${this.balance}`


        //  Updates balance and gives summary
        console.log(depositMsg);

        //  Only accept positive numbers
        //  Increase the balance
        //  Record the transactions
    }
    withdraw (amount) {

        if ( this.balance < amount || this.balance <= 0 || isNaN(amount)){
            return console.log(`
            Your current balance is: $${this.balance}
            ${amount} is not valid.
            Please enter Numbers only.
            Make sure balance is more than wthdrawal amount.
            `)
        };

        if ( amount > 0 ) {
            this.balance -= amount;
            this.transactions.push(`You've withdrawn $${amount}`)
        };

        let withdrawMsg = `
        Hi, ${this.owner}
        You withdrew $${amount} amount
        Your current balance is now: $${this.balance}`
        //  Reject if amount is invalid or greater than balance
        //  Decrease the balance
        //  Record the transactions

        console.log(withdrawMsg);
    }
    getBalance () {
        console.log(`Your current balance is $${this.balance}`);
        //  Logs all transactions
    }
    getTransactions () {
        for(let i = 0; i < this.transactions.length; i++){
            console.log(`${this.transactions[i]}`)
        }
        console.log(this.balance);
        //  Log all transactions
    }

}

class SavingsAccount extends BankAccount {
    constructor (owner, balance, interestRate = 1.02, transactions) {
        super(owner, balance, transactions);
        this.interestRate = interestRate;
    }

    addInterest() {
        console.log(this.balance)
        this.balance = this.balance * ( 1 + ( this.interestRate / 100 ));
        console.log(`Interest rate: $${this.balance}`)
    }

};

