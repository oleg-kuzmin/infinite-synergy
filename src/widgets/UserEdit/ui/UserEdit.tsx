import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import cn from 'classnames';
import { HandleChangeInput, HandleResetUserEdit, HandleSubmitUserEdit, IUser } from '@/shared/lib/types';
import { ElementButton } from './ElementButton';
import { ElementInput } from './ElementInput';
import styles from './UserEdit.module.scss';

interface UserEditProps {
  isActive: boolean;
  user: IUser;
  onChange: HandleChangeInput;
  onSubmit: HandleSubmitUserEdit;
  onClose: VoidFunction;
  onReset: HandleResetUserEdit;
  className?: string;
}

export function UserEdit({ isActive, user, onChange, onSubmit, onClose, onReset, className }: Readonly<UserEditProps>) {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  return (
    <CSSTransition nodeRef={nodeRef} in={isActive} classNames={{ ...styles }} timeout={1000} unmountOnExit>
      <div className={cn(styles.UserEdit, className)} ref={nodeRef}>
        <form className={styles.UserEdit__Form} onSubmit={onSubmit}>
          <ElementInput name="name" value={user.name} label="Имя" onChange={onChange} />
          <ElementInput name="jobTitle" value={user.jobTitle} label="Должность" onChange={onChange} />
          <ElementInput name="department" value={user.department} label="Отдел" onChange={onChange} />
          <ElementInput name="company" value={user.company} label="Компания" onChange={onChange} />
          <div className={styles.UserEdit__Buttons}>
            <ElementButton type="submit" text="Сохранить" />
            <ElementButton type="button" text="Сбросить" onClick={() => onReset(user.id)} />
            <ElementButton type="button" text="Закрыть" onClick={onClose} />
          </div>
        </form>
      </div>
    </CSSTransition>
  );
}
