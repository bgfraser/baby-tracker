import React from 'react';
import { Trans } from '@lingui/macro';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  FormElement,
  FormContent,
  Label,
  Toggle,
  DatePicker,
} from './Form';
import Flex from './Flex';

const PositionName = styled.span`
  margin: 8px;
  color: grey;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
`;

function NursingForm({ onChange, values }) {
  const { date, end, breast, nextBreast } = values;

  function handleDateChange(date) {
    onChange({ ...values, date });
  }

  function handleEndChange(end) {
    onChange({ ...values, end });
  }

  function setBreast(breast) {
    onChange({ ...values, breast });
  }

  function setNextBreast(nextBreast) {
    onChange({ ...values, nextBreast });
  }

  return (
    <FormContent>
      <FormElement>
        <Label>
          <Trans>Side</Trans>
        </Label>
        <Flex wrap="wrap" justifyContent="flex-end" spacing={5}>
          <Toggle
            onClick={() => setBreast('left')}
            active={breast === 'left'}
            type="button"
          >
            <Trans>Left</Trans>
          </Toggle>
          <Toggle
            onClick={() => setBreast('right')}
            active={breast === 'right'}
            type="button"
          >
            <Trans>Right</Trans>
          </Toggle>
          <Toggle
            onClick={() => setBreast('both')}
            active={breast === 'both'}
            type="button"
          >
            <Trans>Both</Trans>
          </Toggle>
        </Flex>
      </FormElement>
      <FormElement>
        <Label>
          <Trans>Next Breast</Trans>
        </Label>
        <Flex wrap="wrap" justifyContent="flex-end" spacing={5}>
          <Toggle
            onClick={() => setNextBreast('left')}
            active={nextBreast === 'left'}
            type="button"
          >
            <Trans>Left</Trans>
          </Toggle>
          <Toggle
            onClick={() => setNextBreast('right')}
            active={nextBreast === 'right'}
            type="button"
          >
            <Trans>Right</Trans>
          </Toggle>
        </Flex>
      </FormElement>
      <FormElement>
        <Label>
          <Trans>Start</Trans>
        </Label>
        <DatePicker
          showTimeSelect
          timeIntervals={5}
          timeFormat="HH:mm"
          timeCaption={<Trans>Time</Trans>}
          name="date"
          withPortal
          selected={date}
          onChange={handleDateChange}
          dateFormat="dd.MM.yyyy HH:mm"
        />
      </FormElement>
      <FormElement>
        <Label>
          <Trans>End</Trans>
        </Label>
        <DatePicker
          showTimeSelect
          timeIntervals={5}
          timeFormat="HH:mm"
          timeCaption={<Trans>Time</Trans>}
          name="end"
          withPortal
          selected={end}
          onChange={handleEndChange}
          dateFormat="dd.MM.yyyy HH:mm"
        />
      </FormElement>
    </FormContent>
  );
}

NursingForm.propTypes = {
  onChange: PropTypes.func,
  values: PropTypes.object,
};

NursingForm.defaultProps = {
  onChange: () => {},
  values: {
    date: new Date(),
    end: new Date(),
    breast: `both`,
    nextBreast: null,
  },
};

export default NursingForm;
