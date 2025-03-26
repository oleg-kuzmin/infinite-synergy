import cn from 'classnames';
import styles from './ElementPreloader.module.scss';

interface ElementPreloaderProps {
  className?: string;
}

export function ElementPreloader({ className }: Readonly<ElementPreloaderProps>) {
  return <span className={cn(styles.ElementPreloader, className)}></span>;
}
