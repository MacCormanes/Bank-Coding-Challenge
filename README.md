# Solution for Bank Coding Challenge

## 📝 Coding Challenge Requirements
As a Customer I can join the bank by providing a name and an initial deposit.
- The bank should maintain a balance for multiple
  customers and allow them to deposit, withdraw and
  check their current balancesf
- As a bank manager you should also be able to see the
  total balance of the bana
- Ensure that a customer cannot withdraw more money
  than they have in their account; an\
- Allow Customers to transfer money to another customer



## 📖 Some Guidelines
You can implement this functionality however you prefer,
but here are some guidelines to make it easier:
- Tests, code readability and maintainabilitÈ
- Keep it simple, try not to over-engineer the solution. We
  are going to use this as a discussion prompt for the
  interview, we do not expect this to be a difficult
  challenge to solvef
- There's no need to bother with user input, GUI or
  persistence – no CLI, React Frontend, Client/Server etc 
- All "interaction" must be done by running the tests°
- A README file explaining your design choices along with
detailed instructions on how to run the tests would be
very helpful.

## 🛠️ Setup Project
To get this project up and running in your development environment, follow these step-by-step instructions.

### 🍴 Prerequisites
We need to install or make sure that these tools are pre-installed on your machine:
- [NodeJS](https://nodejs.org/en/download/): It is a JavaScript runtime build.
```bash
 npm install --save-dev jest @types/jest ts-jest babel-jest
```
- Create a jest.config.js
```bash
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
```
- Initialize a tsconfig.json file
```bash
 tsc --init
```
- Change scripts in package.json file
```bash
...
  "scripts": {
    "test": "jest"
  },
...
```

## 🔍 Usage
run npm test

## References: 
Initial setup for jest with typescript
https://marketsplash.com/tutorials/typescript/jest-typescript/
