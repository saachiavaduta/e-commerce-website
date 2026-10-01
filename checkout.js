document.getElementById('checkout-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Grab input values
    const fullName = document.getElementById('fullName').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const zip = document.getElementById('zip').value.trim();
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const expDate = document.getElementById('expDate').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    const errorDiv = document.getElementById('error-message');

    // Basic validation: Check if any field is empty
    if (!fullName || !address || !city || !zip || !cardNumber || !expDate || !cvv) {
        errorDiv.textContent = 'Please fill in all required fields before placing your order.';
        errorDiv.className = 'error-visible';
        return;
    }

    // Clear error message if validation passes
    errorDiv.textContent = '';
    errorDiv.className = 'error-hidden';

    // Proceed with successful order submission mock
    alert('Order placed successfully! Thank you for your purchase.');
    
    // Optionally reset the form
    this.reset();
});