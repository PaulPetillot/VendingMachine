import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InputCard from '../InputCard';
const styles = {
  card: {
    width : '600px',
    margin : '0 auto',
    marginTop : '200px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};
function CardMachine(props) {
  const { classes } = props;
  const ranges = [{value : 'cocaCola', price: 1.80, quantity : 10, label: 'Coke'}];
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          The Vending Machine
        </Typography>
        <InputCard ranges={ranges} />
      </CardContent>
    </Card>
  );
}

CardMachine.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardMachine);