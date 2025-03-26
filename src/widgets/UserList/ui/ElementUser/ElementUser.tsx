import cn from 'classnames';
import { HandleOpenUserEdit, IUser } from '@/shared/lib/types';
import styles from './ElementUser.module.scss';

interface ElementUserProps {
  user: IUser;
  onClick: HandleOpenUserEdit;
  className?: string;
}

export function ElementUser({ user, onClick, className }: Readonly<ElementUserProps>) {
  return (
    <li className={cn(styles.ElementUser, className)}>
      <button className={styles.ElementUser__Button} onClick={() => onClick(user)}>
        <span className={styles.ElementUser__Icon}></span>
        <span className={styles.ElementUser__Text}>{user.name}</span>
        <span className={styles.ElementUser__EditPen}></span>
      </button>
    </li>
  );
}
