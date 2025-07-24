<input type="number" id="amount" placeholder="Enter Amount">
<button onclick="addExpense()">Add</button>
<ul id="list"></ul>
<script>
  const list = document.getElementById("list");
  function addExpense() {
    let amt = document.getElementById("amount").value;
    if (!amt) return;
    let li = document.createElement("li");
    li.innerText = `₹${amt}`;
    list.appendChild(li);
  }
</script>
