import cn from 'classnames';
import { HandleChangeInput } from '@/shared/lib/types';
import styles from './ElementInput.module.scss';

interface ElementInputProps {
  name: string;
  value: string;
  label: string;
  onChange: HandleChangeInput;
  className?: string;
}

export function ElementInput({ name, value, label, onChange, className }: Readonly<ElementInputProps>) {
  return (
    <label className={cn(styles.ElementInput, className)}>
      <span className={styles.ElementInput__Label}>{label}</span>
      <input
        className={styles.ElementInput__Field}
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </label>
  );
}
