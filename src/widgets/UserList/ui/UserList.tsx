import cn from 'classnames';
import { HandleOpenUserEdit, IUser } from '@/shared/lib/types';
import { ElementPreloader } from '@/shared/ui';
import { ElementUser } from './ElementUser';
import styles from './UserList.module.scss';

interface UserListProps {
  list: IUser[];
  onLoadUsersUp: VoidFunction;
  onLoadUsersDown: VoidFunction;
  onLoadUsersStart: VoidFunction;
  onOpenUserEdit: HandleOpenUserEdit;
  className?: string;
}

export function UserList({
  list,
  onLoadUsersUp,
  onLoadUsersDown,
  onLoadUsersStart,
  onOpenUserEdit,
  className,
}: Readonly<UserListProps>) {
  const handleScroll = (evt: React.UIEvent<HTMLUListElement>) => {
    const element = evt.target as HTMLElement;
    const scrollP = (element.scrollTop / (element.scrollHeight - element.clientHeight)) * 100;

    if (scrollP > 90) {
      onLoadUsersDown();
      return;
    }
    if (scrollP < 10) {
      onLoadUsersUp();
    }
    if (element.scrollTop === 0) {
      onLoadUsersStart();
    }
  };

  const userElements = list.map(user => {
    return <ElementUser key={user.id} user={user} onClick={onOpenUserEdit} />;
  });

  return (
    <ul className={cn(styles.UserList, className)} onScroll={handleScroll}>
      {list.length === 0 && <ElementPreloader className={styles.UserList__Preloader} />}
      {userElements}
    </ul>
  );
}
