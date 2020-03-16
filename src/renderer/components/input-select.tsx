import * as React from 'react';
import { Props as ReactSelectProps } from 'react-select/src/Select';
import { StylesConfig } from 'react-select/src/styles';
import Select from 'react-select';
import { withTheme } from 'styled-components';
import { Label } from 'renderer/components/label';
import { Theme } from 'renderer/contexts/theme-context';

type Props = ReactSelectProps & {
  id: string;
  label: string;
  theme: Theme;
};

const ThemedInputSelect = ({ onChange, id, label, options, value, theme, ...props }: Props) => {
  const styles: StylesConfig = {
    control: provided => ({
      ...provided,
      backgroundColor: theme.light,
      color: theme.lightInversed,
      borderColor: 'transparent',
      '&:hover': {
        borderColor: theme.lightInversed,
      },
    }),
    singleValue: provided => ({
      ...provided,
      color: theme.lightInversed,
    }),
    menuList: provided => ({
      ...provided,
      backgroundColor: theme.light,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? theme.darkInversed : state.isFocused ? theme.lightInversed : theme.light,
      color: state.isSelected ? theme.dark : state.isFocused ? theme.light : theme.darkInversed,
      '&:hover': {
        backgroundColor: theme.darkInversed,
        color: theme.light,
      },
    }),
    dropdownIndicator: provided => {
      return {
        ...provided,
        color: theme.lightInversed,
        '&:hover': {
          color: theme.primary,
        },
      };
    },
    indicatorSeparator: provided => {
      return {
        ...provided,
        backgroundColor: theme.lightInversed,
      };
    },
  };

  return (
    <div>
      <Label id={id} label={label} />
      <Select inputId={id} onChange={onChange} options={options} value={value} styles={styles} {...props} />
    </div>
  );
};

const InputSelect = withTheme(ThemedInputSelect);

export { InputSelect };
