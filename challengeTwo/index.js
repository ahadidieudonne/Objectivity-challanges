const accounts = {};

function createAccount(name, initialDeposit) {
  if (accounts[name]) {
    console.log('Account with that name already exists');
    return;
  }

  accounts[name] = initialDeposit || 0;
  console.log(`Account for ${name} created with initial balance of ${initialDeposit || 0}`);
}

function deposit(name, amount) {
  if (!accounts[name]) {
    console.log('Account not found');
    return;
  }

  accounts[name] += amount;
  console.log(`Deposited ${amount} into ${name}'s account. New balance is ${accounts[name]}`);
}

function withdraw(name, amount) {
  if (!accounts[name]) {
    console.log('Account not found');
    return;
  }

  if (accounts[name] < amount) {
    console.log('Insufficient funds');
    return;
  }

  accounts[name] -= amount;
  console.log(`Withdrawn ${amount} from ${name}'s account. New balance is ${accounts[name]}`);
}

// checking an account balance

function checkBalance(name) {
  if (!accounts[name]) {
    console.log('Account not found');
    return;
  }

  console.log(`${name}'s account balance is ${accounts[name]}`);
}
createAccount('Shilo', 100);
deposit('Shilo', 50);
withdraw('Shilo', 75);
checkBalance('Shilo');
