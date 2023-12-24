function login() {
    var usern = document.getElementById("username").value;
    var passw = document.getElementById("password").value;

    if ((usern === "a" || usern == "1") && passw === "2") {
        window.location.replace("ordering_page.html");
    } else {
        alert("Incorrect credentials");
    }
}

function calculateTotal() {
    const foodItem = document.getElementById('foodItem').value;
    const quantity = parseInt(document.getElementsByName('quantity')[0].value);

    const costs = {
        burger: 5,
        pizza: 8,
        pasta: 7,
        cake: 12,
        sandwich: 6
    };

    const totalCost = costs[foodItem] * quantity;

    document.getElementById('totalCost').textContent = 'Total Cost: $' + totalCost;
}

function redirectToPage() {
    window.location.replace("ordering_page.html");
}

function cnfrm() {
    alert("Your order has been confirmed");
}
