# 🏦 Bank Account System (JavaScript)

## 📌 Project Status

### 🚧 Work in Progress 🚧
This project is actively being developed and refactored as part of my JavaScript learning journey.

The current implementation may be incomplete, unoptimized, or subject to breaking changes as new concepts are explored and applied.

### 📖 Overview

This is a simple Bank Account system built with vanilla JavaScript to practice and understand:

-  ES6 class creation
-  Constructors
-  Instance properties & methods
-  Inheritance using extends
-  method overriding and reuse
-  Basic real-world logic modeling

The project simulates basic banking operations such as deposits, withdrawals, transaction tracking, and interest calculation.

### 🎯 Purpose

The main goal of this project is learning by doing, specifically:

-  How classes work in JavaScript
-  How data and behavior are structured inside objects
-  How child classes inherit functionality from parent classes
-  How real-world rules translate into code logic
-  This is not intended to be production-ready code.

### 🧱 Features (Current)
BankAccount

-  Create an account with an owner and initial balance
-  Deposit funds with validation
-  Withdraw funds with balance checks
-  Track transaction history
-  Display current balance and transactions
-  SavingsAccount (inherits from BankAccount)
-  Includes an interest rate
-  Can apply interest to the current balance

### 🛠️ Technologies Used

-  JavaScript (ES6+)
-  No external libraries or frameworks

### 🧪 Example Usage

const account = new BankAccount("EIJI", 1000);
account.deposit(500);
account.withdraw(300);
account.getBalance();
account.getTransactions();

const savings = new SavingsAccount("EIJI", 2000, 2);
savings.addInterest();
savings.getBalance();

### 🔮 Planned Improvements

-  Refactor validation logic
-  Improve transaction structure (objects instead of strings)
-  Better error handling
-  Add transfer functionality
-  Apply encapsulation (private fields)
-  Improve console output formatting

### 🧠 Learning Notes

This project prioritizes clarity and experimentation over optimization.
Code quality and structure will improve as more JavaScript concepts are learned.

### 📄 License

This project is for educational purposes only.

## Author
EIJI
