import React from 'react';
import PropTypes from 'prop-types';

function Contacts({ contacts, deleteContact, children }) {
  const handleDeleteClick = ({ target }) => {
    deleteContact(target.dataset.id);
  };
  return (
    <div>
      <h2>Contacts</h2>
      {children}
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name} {number}
              <button type="button" data-id={id} onClick={handleDeleteClick}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Contacts;
