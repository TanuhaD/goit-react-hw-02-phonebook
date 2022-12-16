// import PropTypes from 'prop-types';
import React, { Component } from 'react';

const INITIAL_FORM_STATE = {
  name: '',
  number: '',
};

export class FormAddContact extends Component {
  static propTypes = {};

  state = { ...INITIAL_FORM_STATE };

  handleInputChange = ({ target }) => {
    const { name } = target;
    this.setState({ [name]: target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const isOperationSuccessful = this.props.addContact({ ...this.state });
    if (isOperationSuccessful) {
      this.setState({ ...INITIAL_FORM_STATE });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <label htmlFor="">
          name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default FormAddContact;
