function calculateMoney(ticketSale) {
    const ticketPrice = 120 ;
    const janitor = 500 ;
    const staf = 8 ;
    const lunchMoney= 50 ;
    const stapExpenditure = staf * lunchMoney;
    const expenditure = janitor + stapExpenditure;
    let savingMoney = 0 ;
    if(ticketSale >= 0){
        savingMoney = (ticketPrice * ticketSale) - expenditure;
        return savingMoney;
    }
    return 'Invalid Number...!'
}