import React from 'react';
import NursingEntry from '../components/NursingEntry';
import NursingForm from '../components/NursingForm';
import EventsPage from './EventsPage';

function NursingPage() {
  return (
    <EventsPage
      EntryComponent={NursingEntry}
      FormComponent={NursingForm}
      socketPrefix="nursing"
    />
  );
}

NursingPage.propTypes = {};

export default NursingPage;
