import cn from 'classnames';
import styles from './ElementButton.module.scss';

interface ElementButtonProps {
  text: string;
  type: 'submit' | 'reset' | 'button';
  onClick?: VoidFunction;
  className?: string;
}

export function ElementButton({ text, type, onClick, className }: Readonly<ElementButtonProps>) {
  return (
    <button className={cn(styles.ElementButton, className)} type={type} onClick={onClick}>
      {text}
    </button>
  );
}
