import { Bank } from "./Bank";
import { Customer } from "./Customer";

describe("Bank", () => {
  it("should calculate total balance", () => {
    const bank = new Bank();
    const customer1 = new Customer("Jan", 200);
    const customer2 = new Customer("Mac", 300);
    bank.addCustomer(customer1);
    bank.addCustomer(customer2);
    expect(bank.getTotalBalance()).toEqual(500);
  });
});
