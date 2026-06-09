// ── Grab DOM Elements ──────────────────────────────────────
const form        = document.getElementById('expense-form');
const descInput   = document.getElementById('description');
const amountInput = document.getElementById('amount');
const dateInput   = document.getElementById('date');
const categoryEl  = document.getElementById('category');
const toast       = document.getElementById('toast');
const expenseLists = document.getElementById('expense-list');
const emptyState  = document.getElementById('empty-state');
let totalEl = document.getElementById('total-amount');

// ── Expenses Array (let so we can reassign with .filter) ───
let expenses = [
  
];

// ── Set Today's Date as Default ────────────────────────────
dateInput.value = new Date().toISOString().split('T')[0];

// ── Validation ─────────────────────────────────────────────
function setError(groupId, hasError) {
  document.getElementById(groupId).classList.toggle('error', hasError);
}

function validate() {
  const desc     = descInput.value.trim();
  const amount   = parseFloat(amountInput.value);
  const date     = dateInput.value;
  const category = categoryEl.value;

  setError('group-description', !desc);
  setError('group-amount',      !amountInput.value || amount <= 0);
  setError('group-date',        !date);
  setError('group-category',    !category);

  return desc && amountInput.value && amount > 0 && date && category;
}

// ── Clear Error on Input ───────────────────────────────────
const fieldGroupMap = {
  description: 'group-description',
  amount:      'group-amount',
  date:        'group-date',
  category:    'group-category',
};

[descInput, amountInput, dateInput, categoryEl].forEach(el => {
  el.addEventListener('input', () => {
    setError(fieldGroupMap[el.id], false);
  });
});

// ── Toast ──────────────────────────────────────────────────
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ── Render Expenses ────────────────────────────────────────
function renderExpenses() {
  // Clear list before re-rendering to avoid duplicates
  expenseLists.innerHTML = '';

  // Show/hide empty state
  emptyState.classList.toggle('hidden', expenses.length > 0);

  // Loop through every expense and build a row
  expenses.forEach(function(expense, index) {

    const idGroup = document.createElement('span');
    idGroup.classList.add('col-id');
    idGroup.textContent = '#' + (index + 1);

    const categoryGroup = document.createElement('span');
    categoryGroup.classList.add('col-category');
    categoryGroup.textContent = expense.category;

    const descGroup = document.createElement('span');
    descGroup.classList.add('col-description');
    descGroup.textContent = expense.description;

    const amountGroup = document.createElement('span');
    amountGroup.classList.add('col-amount');
    amountGroup.textContent = '$' + expense.amount;

      const dateGroup = document.createElement('span');
    dateGroup.classList.add('col-date');
    dateGroup.textContent = new Date(expense.date).toLocaleDateString();
 
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn-delete');
    deleteBtn.textContent = '✕';
    deleteBtn.onclick = function() {
      deleteExpense(expense.id);
    };

    const expenseRow = document.createElement('div');
    expenseRow.classList.add('expense-row');

    expenseRow.appendChild(idGroup);
    expenseRow.appendChild(categoryGroup);
    expenseRow.appendChild(descGroup);
    expenseRow.appendChild(amountGroup);
    expenseRow.appendChild(dateGroup);
    expenseRow.appendChild(deleteBtn);
    expenseLists.appendChild(expenseRow);
  });
  
  // Update summary section
  renderSummary();
}

// ── Delete Expense ─────────────────────────────────────────
function deleteExpense(id) {
  // Filter out the expense with the matching id
  expenses = expenses.filter(function(e) {
    return e.id !== id;
  });
  renderExpenses();
}

// ── Form Submit ────────────────────────────────────────────
form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (!validate()) return;

  const expense = {
    id:          Date.now(),
    description: descInput.value.trim(),
    amount:      parseFloat(amountInput.value).toFixed(2),
    date:        dateInput.value,
    category:    categoryEl.value,
  };

  // Add to array then re-render
  expenses.push(expense);
  renderExpenses();

  showToast('☕ Expense logged!');

  form.reset();
  dateInput.value = new Date().toISOString().split('T')[0];
});
function renderSummary() {
  // ── Step 1: Calculate Total ──────────────────────────────
  const total = expenses.reduce(function(sum, expense) {
    return sum + parseFloat(expense.amount);
  }, 0);

  // Update the total in the DOM
  document.getElementById('total-amount').textContent = '$' + total.toFixed(2);


  // ── Step 2: Group by Category ────────────────────────────
  const categoryTotals = {};  // empty object to store results

  expenses.forEach(function(expense) {
    if (categoryTotals[expense.category]) {
      // category already exists — add to it
      categoryTotals[expense.category] += parseFloat(expense.amount);
    } else {
      // first time seeing this category — create it
      categoryTotals[expense.category] = parseFloat(expense.amount);
    }
  });

  // categoryTotals now looks like: { Food: 4.50, Transport: 2.00 }
  console.log(categoryTotals);


  // ── Step 3: Render Category Rows ─────────────────────────
  const breakdown = document.getElementById('category-breakdown');
  breakdown.innerHTML = ''; // clear before re-rendering

  if (expenses.length === 0) {
    breakdown.innerHTML = '<p class="category-empty">No expenses yet.</p>';
    return;
  }

  Object.keys(categoryTotals).forEach(function(category) {
    const row = document.createElement('div');
    row.classList.add('category-row');

    const name = document.createElement('span');
    name.classList.add('category-name');
    name.textContent = category;

    const amount = document.createElement('span');
    amount.classList.add('category-total');
    amount.textContent = '$' + categoryTotals[category].toFixed(2);

    row.appendChild(name);
    row.appendChild(amount);
    breakdown.appendChild(row);
  });
}
// ── Initial Render ─────────────────────────────────────────
renderExpenses();
