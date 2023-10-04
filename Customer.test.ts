import { Customer } from "./Customer";

describe("Customer", () => {
  it("should deposit correct amount", () => {
    const customer = new Customer("Mac", 200);
    customer.deposit(50);
    expect(customer.balance).toEqual(250);
  });

  it("should withdraw correct amount", () => {
    const customer = new Customer("Mac", 200);
    customer.withdraw(50);
    expect(customer.balance).toEqual(150);
  });

  it("should transfer to funds correctly", () => {
    const sender = new Customer("Mac", 200);
    const recipient = new Customer("Jan", 300);
    sender.transfer(recipient, 50);
    expect(sender.balance).toEqual(150);
    expect(recipient.balance).toEqual(350);
  });

  it("should not allow debiting amount on insufficient balance", () => {
    const customer = new Customer("Mac", 200);
    expect(() => customer.withdraw(250)).toThrow("Insufficient balance");
  });
});
