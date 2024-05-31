import { FormControl, InputAdornment, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

export function SimpleInput({ required, control, name, label, icon, className }) {
  return (
    <FormControl variant="standard">
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <TextField
            className={className}
            required={required}
            label={label}
            id={name}
            value={field.value}
            onChange={field.onChange}
            error={!!fieldState.error}
            variant="standard"
            helperText={fieldState.error?.message}
            InputProps={{
              startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
            }}
          />
        )}
      />
    </FormControl>
  );
}
