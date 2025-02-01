class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accNum = accountNumber
        this.accHolder = accountHolder
        this.balance = balance
    }

    deposit(amount) {
        this.balance = this.balance + amount
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount
        } else {
            console.log('Transaction cancelled! The amount to be withdrawn is over the available balance.')
        }
    }

    getBalance() {
        console.log(`The current balance is ${this.balance}$`)
    }
}

const account1 = new BankAccount (123456, 'Helen Johnson', 200000)
account1.deposit(10000)
account1.withdraw(220000)
account1.deposit(100000)
account1.withdraw(220000)
account1.getBalance()

const account2 = new BankAccount (654321, 'James Taylor', 15000)
account2.deposit(150150)
account2.deposit(35000)
account2.withdraw(110500)
account2.getBalance()

