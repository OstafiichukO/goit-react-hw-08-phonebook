import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;
const getContacts = state => state.contacts.items;

const getTotalContactsCount = state => {
  const contacts = getContacts(state);
  return contacts.length;
};

const getCompletedContactsCount = createSelector([getContacts], contacts => {
  return contacts.reduce(
    (total, contact) => (contact.completed ? total + 1 : total),
    0
  );
});

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ description }) =>
      description.toLowerCase().includes(normalizedFilter)
    );
  }
);

const contactsSelectors = {
  getLoading,
  getFilter,
  getVisibleContacts,
  getCompletedContactsCount,
  getTotalContactsCount,
};

export default contactsSelectors;
