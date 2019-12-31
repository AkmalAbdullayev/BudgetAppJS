const title = document.getElementById("budget");
const amount = document.getElementById("amount");
const budget = document.getElementById("unitMoney");
const unitBalance = document.getElementById("unitBalance");
const money = document.getElementById("money");
const expenseTitle = document.getElementById("expense");
const expenseAmount = document.getElementById("expenseAmount");
const addBtn = document.getElementById("addBtn");
const crudForTitle = document.getElementById("crudForTitle");
const crudForValue = document.getElementById("crudForValue");
const unitExpenses = document.getElementById("unitExpenses");

function addAmount() {
    amount.addEventListener("click", function () {
        // convert input to number
        let convertUnitBudget = parseInt(budget.textContent);
        let convertTitle = parseInt(title.value);

        if (title.value == "") {
            alert("Enter amount".toUpperCase());
            convertTitle = 0;
        }

        convertUnitBudget += convertTitle;
        budget.textContent = convertUnitBudget;
        unitBalance.textContent = convertUnitBudget;
        title.value = "";

        addExpense(convertUnitBudget);
    });
}

function addExpense(convertUnitBudget) {
    addBtn.addEventListener("click", function () {
        // convert input to number
        let convertExpenseAmounttoNum = parseInt(expenseAmount.value);
        let convertUnitExpensesToNum = parseInt(unitExpenses.textContent);

        const header = document.createElement("h5");
        const headerForValue = document.createElement("h5");
        headerForValue.className = "value";
        if (expenseTitle.value == "" || expenseAmount.value == "") {
            alert("Enter amount title and expense amount".toUpperCase());
        } else if (convertExpenseAmounttoNum) {

            if (convertUnitBudget >= convertExpenseAmounttoNum) {
                header.textContent = expenseTitle.value;
                headerForValue.textContent = convertExpenseAmounttoNum;
                convertUnitExpensesToNum += convertExpenseAmounttoNum;
                unitExpenses.textContent = convertUnitExpensesToNum;
                crudForTitle.appendChild(header);
                crudForValue.appendChild(headerForValue);
                convertUnitBudget -= convertExpenseAmounttoNum;
                unitBalance.textContent = convertUnitBudget;
            }
            if (convertUnitBudget <= 500) {
                alert(`You have ${convertUnitBudget} dollars. Please don't forget to supplement money`);
            } else if (convertUnitBudget <= 0) {
                alert("You don't have money. Please supplement");
            }
        } else {
            alert("You don't have enough money");
        }
        expenseTitle.value = "";
        expenseAmount.value = "";

    });
}

const main = () => {
    addAmount();
}
main();