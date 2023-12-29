// import "./ExpenseItem.css";

// function ExpenseItem(){
//     const expenseData = new Date(2023, 12, 29);
//     const expenseTitle  = "Car Insurance";
//     const expenseAmount = 300;
//     const locationOfExpenditure = "India";



//     return (
//         <div className="expense-item">
//             <div>{expenseData.toISOString()}</div>
//             <div className="expense-item__description">
//                 <h2>{expenseTitle}</h2>
//                 <h3>{locationOfExpenditure}</h3>
//                 <div className="expense-item__price">${expenseAmount}</div>

//             </div>
//         </div>
//     );
// }


// export default ExpenseItem;



import "./ExpenseItem.css";

function ExpenseItem(props){

    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <h3>{props.location}</h3>
                <div className="expense-item__price">{props.amount}</div>

            </div>
        </div>
    );
}


export default ExpenseItem;