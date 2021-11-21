import '../UI/Card.css';

function Card(props) {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;

/* Sometimes you wanna have a component where
you don't configure everything through props
but where instead you're able to pass content
between the opening and closing tags of that component. */
