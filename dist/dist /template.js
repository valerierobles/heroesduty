const managerCard = (data) => {
};

    const cards = data => {
        var cardInput = '';
        for (i=0; i < data.length; i ++) {
            console.log(data[i])
            if (data[i].getRole() === 'Manager') {
                cardInput += managerCard(data[i]);
            }
            else if (data[i].getRole() === 'Intern'){
                cardInput += internCard(data[i]);
            }
            else if (data[i].getRole() === 'Engineer') {
                cardInput += engineerCard(data[i]);
            }
        }
        console.log(cardInput);
        return cardInput;
    } 
    module.exports = template; 