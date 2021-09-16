import React from 'react';
import { I18n } from '@lingui/react';
import { Trans, t } from '@lingui/macro';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  FormElement,
  FormContent,
  Label,
  Toggle,
  Input,
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

function ExpressingForm({ onChange, values }) {
  const { date, end, breast, amount } = values;

  function handleDateChange(date) {
    onChange({ ...values, date });
  }

  function setBreast(breast) {
    onChange({ ...values, breast });
  }

  function handleAmountChange(e) {
    const amount = e.target.value;
    onChange({ ...values, amount });
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
          <Trans>Timestamp</Trans>
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
          <Trans>Amount in ml</Trans>
        </Label>
        <I18n>
          {({ i18n }) => (
            <Input
              type="number"
              value={amount}
              name="amount"
              placeholder={`${i18n._(t`Amount in ml`)}...`}
              onChange={handleAmountChange}
            />
          )}
        </I18n>
        </FormElement>
    </FormContent>
  );
}

ExpressingForm.propTypes = {
  onChange: PropTypes.func,
  values: PropTypes.object,
};

ExpressingForm.defaultProps = {
  onChange: () => {},
  values: {
    date: new Date(),
    amount: null,
    breast: 'both',
  },
};

export default ExpressingForm;
