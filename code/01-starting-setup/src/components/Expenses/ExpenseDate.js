import '../Expenses/ExpenseDate.css';
import Card from '../UI/Card';

/* This component is about outputting a date,
in exactly that format and in exactly that look. */

function ExpenseDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });

  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </Card>
  );
}

export default ExpenseDate;
