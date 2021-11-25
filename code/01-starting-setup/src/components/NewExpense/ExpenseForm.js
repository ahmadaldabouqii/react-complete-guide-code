import React, { useState } from 'react';
import './ExpenseFrom.css';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   });

  const titleChangeHandler = e => {
    // this is valid approach and u will see them a lot
    setEnteredTitle(e.target.value);

    //But We Need to see others senarios & approaches..

    // approach #1
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });

    /*
     whenever you update your state
     and you depend on the previous state, like(counter)
     you should not do it like this(approach #1)
     but you should use an alternative form
     of this state updating function.
     Instead of calling it like this, ⩛⩛⩛⩛
    */

    // approach #2
    // setUserInput(prevState => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });

    /*
     Now why should we do it like this(approch #2)
     instead of (approach #1)?

     In many cases, both will work fine,
     but keep in mind that I mentioned that
     Reacts schedules state updates,
     it doesn't perform them instantly.
     And therefore, theoretically,
     if you schedule a lot of state updates at
     the same time, you could be depending on an outdated
     or incorrect state snapshot if you use approach #1.

     If you use approach #2, React will guarantee
     that the state snapshot it gives you here
     in this anonymous inner function,
     will always be the latest state snapshot,
     keeping all scheduled state updates in mind.
     So this is the safer way to ensure that you always operate
     on the latest state snapshot.

     So,we use this function syntax (approach #2)
     whenever your state update depends on 
     the previous state.
    */
  };

  const amountChangeHandler = e => {
    setEnteredAmount(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // });

    // setUserInput(prevState => {
    //   return { ...prevState, enteredAmount: e.target.value };
    // });
  };

  const dateChangeHandler = e => {
    setEnteredDate(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // });

    // setUserInput(prevState => {
    //   return { ...prevState, enteredDate: e.target.value };
    // });
  };

  const submitHandler = e => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    /* 
      clear user input after submitusing (Two-Way Binding):
      which simply means that for inputs we don't just
      listen to changes, but we can also pass a new value
      back into the input using value attribute (value={newValue})
      which is default attribute to input element.
      So that we can reset or change the input programmatically.
     
      So now it is this two-way binding; because now we don't
      just listen to changes(onChange) in the input to update
      our stat, but we also feed the state back into the input
      so that when we change the state, we also change input.
    */

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
