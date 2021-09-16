import React, { useState } from 'react';
import styled from 'styled-components';
import { Trans } from '@lingui/macro';
import {
  EventEntry,
  EventIcon,
  EventDate,
  EventContent,
  EventEdit,
  EventDelete,
  EventDetails,
} from './EventEntry';
import ExpressingForm from './ExpressingForm';
import EventInlineForm from './EventInlineForm';
import expressingIcon from '../icons/food.svg';
import useLocale from '../hooks/useLocale';

const Type = styled.span`
  font-weight: bold;
  margin-right: 4px;
`;

function ExpressingEntry({
  breast,
  date,
  amount,
  onDelete,
  onUpdate,
}) {
  const [edit, setEdit] = useState(false);
  const { dateLocale } = useLocale();

  function handleEdit() {
    setEdit(!edit);
  }

  function handleUpdate(values) {
    setEdit(false);
    onUpdate(values);
  }

  return (
    <>
      <EventEntry>
        <EventIcon src={expressingIcon} />
        <EventContent>
          <EventDetails>
            <Type>
              {amount}ml <Trans>expressed from </Trans> 
              {breast === 'left' ? 
                <Trans> Left</Trans>
               : breast === 'right' ? 
                <Trans> Right</Trans>
               : 
                <Trans> Both</Trans>
              }
              
            </Type>
          </EventDetails>
          <EventDate date={date} />
        </EventContent>
        {onUpdate && <EventEdit onClick={handleEdit} />}
        {onDelete && <EventDelete onClick={onDelete} />}
      </EventEntry>
      {edit && (
        <EventInlineForm
          onSubmit={handleUpdate}
          FormContent={ExpressingForm}
          initalValues={{
            date: new Date(date),
            amount,
            breast,
          }}
        />
      )}
    </>
  );
}
 
ExpressingEntry.propTypes = {};

export default ExpressingEntry;
