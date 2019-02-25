import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import EuroSymbol from '@material-ui/icons/EuroSymbol';
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft : '70px',
    marginTop : '30px'
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});



class InputFields extends React.Component {
  state = {
    amount: '',
    weightRange : ''
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TextField
          select
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Select a Product"
          value={this.state.weightRange}
          onChange={e => this.setState({weightRange : e.target.value})}
          InputProps={{
            startAdornment: <InputAdornment position="start">Product</InputAdornment>,
          }}
        >
          {this.props.ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
             {option.label} {option.price}€
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-adornment-amount"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Amount"
          value={this.state.amount}
          onChange={e => this.setState({amount : e.target.value})}
          InputProps={{
            startAdornment: <InputAdornment position="start">€</InputAdornment>,
          }}
        />
        <Fab
          variant="extended"
          size="small"
          color="primary"
          aria-label="Add"
          className={classes.margin}
        >
          <EuroSymbol className={classes.extendedIcon} />
            Pay 
        </Fab>
      </div>
    );
  }
}

InputFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputFields);