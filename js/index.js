
// get value function
function getInputByValue(id){
    return parseFloat(document.getElementById(id).value);
};

function showError(id){
    document.getElementById(id).classList.remove("hidden");
};

function hideError(id){
    document.getElementById(id).classList.add("hidden");
};


function formatCurrency(amount){
    return `${amount.toFixed(2)}`;
};


function addToHistory(income, totalExpense, balance){
    const historyItem = document.createElement('div');
    historyItem.className =
        "bg-white p-3 rounded-md border-l-2 border-indigo-500";

    historyItem.innerHTML = `
        <p class="text-xs text-gray-500">Serial: ${count} </p>
        <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
        <p class="text-xs text-gray-500">Income: $${formatCurrency(income)} </p>
        <p class="text-xs text-gray-500">Expense: $${formatCurrency(totalExpense)} </p>
        <p class="text-xs text-gray-500">Balance: $${formatCurrency(balance)} </p>
        `
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
};



// getting all the value
let count = 0;

// add even listeners for calculate button
const calculateBtn = document.getElementById('calculate');
calculateBtn.addEventListener('click', function () {

    count += 1;
    // const income = parseFloat(document.getElementById('income').value);
    // const software = parseFloat(document.getElementById('software').value);
    // const courses = parseFloat(document.getElementById('courses').value);
    // const internet = parseFloat(document.getElementById('internet').value);

    // get value from function
    const income = getInputByValue("income");
    const software = getInputByValue("software");
    const courses = getInputByValue("courses");
    const internet = getInputByValue("internet");

        if(income <= 0 || isNaN(income)){
            // document.getElementById("income-error").classList.remove("hidden");
            showError("income-error");
            return;
        };

        if(software <= 0 || isNaN(software)){
            // document.getElementById("software-error").classList.remove("hidden");
            showError("software-error");
            return;
        };

        if(courses <= 0 || isNaN(courses)){
            // document.getElementById("courses-error").classList.remove("hidden");
            showError("courses-error");
            return;
        };

        if(internet <= 0 || isNaN(internet)){
            // document.getElementById("internet-error").classList.remove("hidden");
            showError("internet-error");
            return;
        };

        const totalExpense = software + courses + internet;
        const balance = income - totalExpense;

        if(totalExpense > income){
            // document.getElementById("logic-error").classList.remove("hidden");
            showError("logic-error");
            return;
        };
    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText =  totalExpense.toFixed(2);

    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = balance.toFixed(2);

    const result = document.getElementById('results');
    result.classList.remove("hidden");

    // Expense history
//     const historyItem = document.createElement('div');
//     historyItem.className =
//         "bg-white p-3 rounded-md border-l-2 border-indigo-500";

//     historyItem.innerHTML = `
//         <p class="text-xs text-gray-500">Serial: ${count} </p>
//         <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
//         <p class="text-xs text-gray-500">Income: $${formatCurrency(income)} </p>
//         <p class="text-xs text-gray-500">Expense: $${formatCurrency(totalExpense)} </p>
//         <p class="text-xs text-gray-500">Balance: $${formatCurrency(balance)} </p>
//         `
//     const historyContainer = document.getElementById('history-list');
//     historyContainer.insertBefore(historyItem, historyContainer.firstChild);

        addToHistory(income, totalExpense, balance);

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


    const savingAmount = (savingInputPercentace * balance ) / 100;
    const savingElement = document.getElementById("savings-amount");
    savingElement.innerText = savingAmount.toFixed(2);
   

    const remainingBalance = balance - savingAmount;
    const remaingElement = document.getElementById("remaining-balance");
    remaingElement.innerText = remainingBalance.toFixed(2);


});


// history tab functionality 

const historyTab = document.getElementById("history-tab");
const assistanTab = document.getElementById("assistant-tab");

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
    
    // document.getElementById('expense-form').classList.add("hidden");
    // document.getElementById('history-section').classList.remove("hidden");
    hideError("expense-form");
    showError("history-section");
});

 assistanTab.addEventListener("click", function () {
        assistanTab.classList.add(
            "text-white",
            "bg-gradient-to-r",
            "from-blue-500",
            "to-purple-600"
        );

        historyTab.classList.remove(
            "text-white",
            "bg-gradient-to-r",
            "from-blue-500",
            "to-purple-600"
        );

        showError("expense-form");
        hideError("history-section");
        // document.getElementById('expense-form').classList.remove("hidden");
        // document.getElementById('history-section').classList.add("hidden");

    });

// live validation for input

document.getElementById("income").addEventListener("input", function(){
    const inputValue = parseFloat(document.getElementById("income").value);

    if(inputValue <= 0 || isNaN(inputValue)){
        // document.getElementById("income-error").classList.remove("hidden");
        showError("income-error");
        return;
    };
});

document.getElementById("software").addEventListener("input", function(){
    const inputValue = parseFloat(document.getElementById("software").value);

    if(inputValue <= 0 || isNaN(inputValue)){
        document.getElementById("software-error").classList.remove("hidden");
        return;
    };
});

document.getElementById("courses").addEventListener("input", function(){
    const inputValue = parseFloat(document.getElementById("courses").value);

    if(inputValue <= 0 || isNaN(inputValue)){
        document.getElementById("courses-error").classList.remove("hidden");
        return;
    };
});

document.getElementById("internet").addEventListener("input", function(){
    const inputValue = parseFloat(document.getElementById("internet").value);

    if(inputValue <= 0  ||  isNaN(inputValue)){
        document.getElementById("internet-error").classList.remove("hidden");
        return;
    };
});