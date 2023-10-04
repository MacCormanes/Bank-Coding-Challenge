export class Customer {
  name: string;
  balance: number;

  constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      throw new Error("Insufficient balance");
    }
  }

  transfer(to: Customer, amount: number) {
    this.withdraw(amount);
    to.deposit(amount);
  }
}
