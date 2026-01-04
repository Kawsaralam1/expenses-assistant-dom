
// getting all the value


// add even listeners for calculate button

const calculateBtn = document.getElementById('calculate');
calculateBtn.addEventListener('click', function () {

    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

        if(income <= 0 || isNaN(income)){
            document.getElementById("income-error").classList.remove("hidden");
            return;
        };

        if(software <= 0 || isNaN(software)){
            document.getElementById("software-error").classList.remove("hidden");
            return;
        };

        if(courses <= 0 || isNaN(courses)){
            document.getElementById("courses-error").classList.remove("hidden");
            return;
        };

        if(internet <= 0 || isNaN(internet)){
            document.getElementById("internet-error").classList.remove("hidden");
            return;
        };


    const totalExpense = software + courses + internet;
    const balance = income - totalExpense;

    const totalExpenseElement = document.getElementById('total-expenses');
    totalExpenseElement.innerText = totalExpense.toFixed(2);

    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = balance.toFixed(2);

    const result = document.getElementById('results');
    result.classList.remove('hidden');

    const historyItem = document.createElement('div');
    historyItem.className =
        "bg-white p-3 rounded-md border-l-2 border-indigo-500";

    historyItem.innerHTML = `
        <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
        <p class="text-xs text-gray-500">Income: $${income.toFixed(2)} </p>
        <p class="text-xs text-gray-500">Expense: $${totalExpense.toFixed(2)} </p>
        <p class="text-xs text-gray-500">Balance: $${balance.toFixed(2)} </p>
        `
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});

// add even listeners savings button

const calculateSaving = document.getElementById('calculate-savings');
calculateSaving.addEventListener('click', function () {
    const savingInputPercentace = parseFloat(document.getElementById('savings').value);

    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    const totalExpense = software + courses + internet;
    const balance = income - totalExpense;


    const savingAmount = (savingInputPercentace * balance) / 100;
    const savingElement = document.getElementById('savings-amount');
    savingElement.innerText = savingAmount.toFixed(2);

    const remainingBalance = balance - savingAmount;
    const remainingElement = document.getElementById('remaining-balance');
    remainingElement.innerText = remainingBalance.toFixed(2);


});


// history tab functionality 

const historyTab = document.getElementById('history-tab');
const assistanTab = document.getElementById('assistant-tab');

historyTab.addEventListener('click', function () {
    historyTab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );

    historyTab.classList.remove("text-gray-600");
    assistanTab.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );
    assistanTab.classList.add("text-gray-600");
    document.getElementById('expense-form').classList.add("hidden");
    document.getElementById('history-section').classList.remove("hidden");

    assistanTab.addEventListener("click", function () {
        assistanTab.classList.add(
            "text-white",
            "bg-gradient-to-r",
            "from-blue-500",
            "to-purple-600"
        )

        historyTab.classList.remove(
            "text-white",
            "bg-gradient-to-r",
            "from-blue-500",
            "to-purple-600"
        )

    });

});

// live validation for input

document.getElementById("income").addEventListener("input", function(){
    const inputValue = parseFloat(document.getElementById("income").value);

    if(inputValue <= 0 || isNaN(inputValue)){
        document.getElementById("income-error").classList.remove("hidden");
        return;
    };
});
