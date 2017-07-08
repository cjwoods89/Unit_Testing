function changeMachine(amount) {

    var new_amount = amount;
    var bills = [20, 10, 5, 1];
    var change_machine = [];

    for (var i = 0; i < bills.length; i++) {
        let dollars = Math.floor(new_amount / bills[i]);
        new_amount = new_amount - (dollars * bills[i]);
        change_machine.push(dollars);
    }

    return change_machine;

}

module.exports = changeMachine;