import {
  Alert,
  CardContent,
  Checkbox,
  InputAdornment,
  InputLabel,
  TextareaAutosize,
  TextField,
} from '@mui/material';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutline';
import PhoneIcon from '@mui/icons-material/PhoneOutlined';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutline';
import { useCallback, useEffect, useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { OrderCard, PrivacyModal } from '../../components';
import styles from './PersonalInfoForm.module.css';
import { SimpleInput } from './SimpleInput';

export function PersonalInfoForm({ onSend, sendingError, bookingError }) {
  const [valid, setValid] = useState(false);

  const { control, formState: fs } = useFormContext();

  const [form, setForm] = useState({
    accept: false,
  });

  useEffect(() => {
    if (form.accept) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [form.accept]);

  const handleInput = useCallback(
    (type, value = 'value') =>
      (e) => {
        setForm((prev) => {
          return { ...prev, [type]: e.target[value] };
        });
      },
    []
  );

  return (
    <OrderCard title="Информация о гостях">
      <CardContent className={styles.formContent}>
        <div className={styles.formTop}>
          <SimpleInput
            required
            control={control}
            name="firstName"
            className={styles.input}
            label="Имя"
            icon={<PersonOutlineTwoToneIcon />}
          />

          <SimpleInput
            required
            control={control}
            name="secondName"
            className={styles.input}
            label="Фамилия"
            icon={<PersonOutlineTwoToneIcon />}
          />
          <SimpleInput
            control={control}
            name="middleName"
            className={styles.input}
            label="Отчество"
            icon={<PersonOutlineTwoToneIcon />}
          />

          <Controller
            control={control}
            name="phone"
            render={({ field, fieldState }) => (
              <InputMask mask="+7 (999)-999-9999" value={field.phone} onChange={field.onChange}>
                {(inputProps) => (
                  <TextField
                    required
                    label="Телефон"
                    {...inputProps}
                    error={!!fieldState.error}
                    variant="standard"
                    helperText={fieldState.error?.message}
                    className={styles.input}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              </InputMask>
            )}
          />
        </div>
        <SimpleInput
          required
          control={control}
          name="email"
          className={styles.input}
          label="Электронная почта"
          icon={<MailOutlineTwoToneIcon />}
        />

        <div className={styles.formContent}>
          <Controller
            control={control}
            name="comment"
            render={({ field }) => (
              <>
                <InputLabel htmlFor={field.name}>Комментарий</InputLabel>
                <TextareaAutosize
                  id={field.name}
                  placeholder="Место для ваших пожеланий"
                  className={styles.commentInput}
                  style={{ width: '100%', height: '200px' }}
                  value={field.phone}
                  onChange={field.onChange}
                />
              </>
            )}
          />
        </div>

        <div className={styles.accept}>
          <Checkbox
            className={styles.checbox}
            onChange={handleInput('accept', 'checked')}
            id="accept"
          />

          <InputLabel sx={{ whiteSpace: 'normal' }} htmlFor="accept">
            Даю согласие на обработку <PrivacyModal>персональных данных</PrivacyModal>
          </InputLabel>
        </div>

        <button
          type="button"
          className="button"
          disabled={!valid || bookingError || Object.keys(fs.errors).length > 0}
          onClick={onSend}
        >
          Подтвердить бронирование
        </button>
        {bookingError ? (
          <Alert severity="warning">К сожалению на выбранную дату этот номер не доступен</Alert>
        ) : null}
        {sendingError ? (
          <Alert severity="error">
            Ошибка при бронировании, повторите попытку, или забронируйте по телефону
          </Alert>
        ) : null}
      </CardContent>
    </OrderCard>
  );
}
