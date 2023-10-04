import { Customer } from "./Customer";

export class Bank {
  customers: Customer[] = [];

  addCustomer(customer: Customer) {
    this.customers.push(customer);
  }

  getTotalBalance() {
    return this.customers.reduce(
      (total, customer) => total + customer.balance,
      0
    );
  }
}
