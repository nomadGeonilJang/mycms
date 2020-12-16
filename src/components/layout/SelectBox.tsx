import React from 'react';
import {
  FormControl, InputLabel, MenuItem, Select,
} from '@material-ui/core';

interface Props {
  className?: string;
  label?: string;
  name: string;
  value: any;
  options: {
    name: string;
    value: any;
  }[];
  fullWidth?: boolean;
  onChange({ name, value }: { name: string; value: any }): void;
}

export default function Selectbox({
  className, name, options, value,
  label, fullWidth = false,
  onChange,
}: Props) {
  const handleChange = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
  ) => {
    onChange({
      name: event.target.name!,
      value: event.target.value,
    });
  };

  return (
    <FormControl className={className}>
      { label && <InputLabel>{label}</InputLabel> }
      <Select
        name={name}
        value={value}
        fullWidth={fullWidth}
        onChange={handleChange}
      >
        {options.map((it) => (
          <MenuItem key={it.value} value={it.value}>
            {it.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
