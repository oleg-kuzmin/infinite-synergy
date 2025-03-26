import { UserEdit } from '@/widgets/UserEdit';
import { UserList } from '@/widgets/UserList';
import { useApp } from '@/shared/lib/hooks';
import { Content } from '@/shared/ui';
import styles from './HomePage.module.scss';

export function HomePage() {
  const [
    visibleList,
    handleLoadUsersDown,
    handleLoadUsersUp,
    handleLoadUsersStart,
    editedUser,
    isOpenUserEdit,
    handleOpenUserEdit,
    handleChangeInput,
    handleSubmitUserEdit,
    handleCloseUserEdit,
    handleResetUserEdit,
  ] = useApp();

  return (
    <Content className={styles.HomePage__Content}>
      <UserList
        list={visibleList}
        onOpenUserEdit={handleOpenUserEdit}
        onLoadUsersDown={handleLoadUsersDown}
        onLoadUsersUp={handleLoadUsersUp}
        onLoadUsersStart={handleLoadUsersStart}
      />
      <UserEdit
        isActive={isOpenUserEdit}
        user={editedUser}
        onChange={handleChangeInput}
        onSubmit={handleSubmitUserEdit}
        onClose={handleCloseUserEdit}
        onReset={handleResetUserEdit}
      />
    </Content>
  );
}
