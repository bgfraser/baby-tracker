import React, { useState } from 'react';
import styled from 'styled-components';
import { Trans } from '@lingui/macro';
import { formatDistanceStrict } from 'date-fns';
import {
  EventEntry,
  EventIcon,
  EventDate,
  EventContent,
  EventEdit,
  EventDelete,
  EventDetails,
} from './EventEntry';
import NursingForm from './NursingForm';
import EventInlineForm from './EventInlineForm';
import nursingIcon from '../icons/nursing.svg';
import useLocale from '../hooks/useLocale';

const Type = styled.span`
  font-weight: bold;
  margin-right: 4px;
`;

function NursingEntry({
  nextBreast,
  breast,
  date,
  end,
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

  const name = 'Breastfeeding';

  let distance = null;

  try {
    const from = new Date(end);
    const to = new Date(date);
    distance = formatDistanceStrict(from, to, {
      unit: 'minute',
      locale: dateLocale,
    });
  } catch (err) {}

  return (
    <>
      <EventEntry>
        <EventIcon src={nursingIcon} />
        <EventContent>
          <EventDetails>
            <Type>
              {breast === 'left' ? 
                <Trans>Left</Trans>
               : breast === 'right' ? 
                <Trans>Right</Trans>
               : 
                <Trans>Both</Trans>
              }
              <span>&nbsp;</span><Trans>for</Trans> {distance}.<span>&nbsp;</span>
              <Trans>Next breast: </Trans> {nextBreast}
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
          FormContent={NursingForm}
          initalValues={{
            end: new Date(end),
            breast,
            nextBreast,
            date: new Date(date),
          }}
        />
      )}
    </>
  );
}

NursingEntry.propTypes = {};

export default NursingEntry;
