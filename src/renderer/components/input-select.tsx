import React from 'react';
import Select, { StylesConfig, Props as ReactSelectProps } from 'react-select';
import { useTheme } from 'styled-components';
import { Label } from 'renderer/components/label';

type Props<Option, IsMulti extends boolean = false> = ReactSelectProps<Option, IsMulti> & {
  id: string;
  label: string;
};

export function InputSelect<Option, IsMulti extends boolean = false>({
  onChange,
  id,
  label,
  options,
  value,
  ...props
}: Props<Option, IsMulti>) {
  const theme = useTheme();

  const styles: StylesConfig<Option, IsMulti> = {
    control: (provided) => ({
      ...provided,
      backgroundColor: theme.light,
      color: theme.lightInversed,
      borderColor: 'transparent',
      '&:hover': {
        borderColor: theme.lightInversed,
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: theme.lightInversed,
    }),
    menuList: (provided) => ({
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
    dropdownIndicator: (provided) => {
      return {
        ...provided,
        color: theme.lightInversed,
        '&:hover': {
          color: theme.primary,
        },
      };
    },
    indicatorSeparator: (provided) => {
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
}
