var customerName = 'bob';

function upperCaseCustomerName(){
    return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    window.bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    window.bestCustomer = 'maybe bob';
    return bestCustomer;
}

function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = "";
    leastFavoriteCustomer = 'Kev';
}