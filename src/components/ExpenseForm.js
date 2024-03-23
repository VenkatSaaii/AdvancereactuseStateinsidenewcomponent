import "./ExpenseForm.css"
import React, {useState} from "react"

 const ExpenseForm=()=>{

    const [enteredTitle,setEnteredTitle]= useState('')
    const [enteredAmount,setEnteredAmount]= useState('');
    const [enteredDate, setEnteredDate]= useState('')
    

    const titleHandler=(event)=>{
       setEnteredTitle(event.target.value)
    }
    const amountHandler=(event)=>{
        setEnteredAmount(event.target.value)
    }
    const dateHandler=(event)=>{
       setEnteredDate(event.target.value)
    }
    const submitHandler=(event)=>{
        event.preventDefault()
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__constrols" >
                <div className="new-expense__control" > Expense Title</div>
                <input type="text" value={enteredTitle} onChange={titleHandler}/>

                <div className="new-expense__control"> Expense Amount</div>
                <input type="number" min={0.01} max={0.01} value={enteredAmount} onChange={amountHandler}></input>
                <div className="new-expense__control"> Date</div>
                <input type="date" value={enteredDate}   onChange={dateHandler}></input>
            </div>
            <div className="new-expense__actions">
            <button type="submit" >Add Expense</button>
            </div>
        </form>
    )

}

export default ExpenseForm

