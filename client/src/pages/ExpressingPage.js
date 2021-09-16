import React from 'react';
import ExpressingEntry from '../components/ExpressingEntry';
import ExpressingForm from '../components/ExpressingForm';
import EventsPage from './EventsPage';

function ExpressingPage() {
  return (
    <EventsPage
      EntryComponent={ExpressingEntry}
      FormComponent={ExpressingForm}
      socketPrefix="expressing"
    />
  );
}

ExpressingPage.propTypes = {};

export default ExpressingPage;
