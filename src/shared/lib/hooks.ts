import { useEffect, useState } from 'react';
import { getAllData } from '@/shared/api/getData';
import {
  HandleChangeInput,
  HandleOpenUserEdit,
  HandleResetUserEdit,
  HandleSubmitUserEdit,
  IUser,
} from '@/shared/lib/types';
import { initialObject } from '@/shared/lib/vars';

type ReturnUseApp = [
  IUser[],
  VoidFunction,
  VoidFunction,
  VoidFunction,
  IUser,
  boolean,
  HandleOpenUserEdit,
  HandleChangeInput,
  HandleSubmitUserEdit,
  VoidFunction,
  HandleResetUserEdit,
];

export function useApp(): ReturnUseApp {
  const [dataBase, setDataBase] = useState<IUser[]>([]);
  const [isOpenUserEdit, setIsOpenUserEdit] = useState(false);
  const [editedUser, setEditedUser] = useState<IUser>(initialObject);
  const [visibleList, setVisibleList] = useState<IUser[]>([]);
  const [lastIndex, setLastIndex] = useState(0);

  const handleOpenUserEdit: HandleOpenUserEdit = user => {
    setIsOpenUserEdit(false);
    setTimeout(() => {
      setIsOpenUserEdit(true);
      setEditedUser(user);
    }, 0);
  };

  const handleCloseUserEdit = () => {
    setIsOpenUserEdit(false);
  };

  const handleChangeInput: HandleChangeInput = evt => {
    setEditedUser({
      ...editedUser,
      [evt.target.name]: evt.target.value,
    });
  };

  const getArrayUsers = (users: IUser[], userObject: IUser) => {
    const newArrayUsers = users.map(user => {
      if (userObject.id === user.id) {
        return userObject;
      }
      return user;
    });
    return newArrayUsers;
  };

  const updateUser = (userObject: IUser) => {
    const newDataBase = getArrayUsers(dataBase, userObject);
    const newVisibleList = getArrayUsers(visibleList, userObject);
    setDataBase(newDataBase);
    setVisibleList(newVisibleList);
  };

  const handleSubmitUserEdit: HandleSubmitUserEdit = evt => {
    evt.preventDefault();
    updateUser(editedUser);
    setEditedUser(initialObject);
    setIsOpenUserEdit(false);
  };

  const handleResetUserEdit: HandleResetUserEdit = id => {
    const user = dataBase.find(user => {
      return user.id === id;
    });
    if (user) {
      setEditedUser(user);
    }
  };

  const handleLoadUsersStart = () => {
    const newArrayData = dataBase.slice(0, 150);
    setVisibleList(newArrayData);
    setLastIndex(150);
  };

  const handleLoadUsersDown = () => {
    if (dataBase.length > 0) {
      if (lastIndex === 0) {
        handleLoadUsersStart();
      } else {
        const newArrayData = dataBase.slice(lastIndex - 100, lastIndex + 50);
        setVisibleList(newArrayData);
        setLastIndex(lastIndex + 50);
      }
    }
  };

  const handleLoadUsersUp = () => {
    if (dataBase.length > 0) {
      if (lastIndex > 150) {
        const newArrayData = dataBase.slice(lastIndex - 200, lastIndex - 50);
        setVisibleList(newArrayData);
        setLastIndex(lastIndex - 50);
      }
    }
  };

  const loadInitialUsers = (res: IUser[]) => {
    if (res.length > 0) {
      const newArrayData = res.slice(lastIndex, lastIndex + 150);
      setVisibleList(newArrayData);
      setLastIndex(lastIndex + 150);
    }
  };

  useEffect(() => {
    getAllData()
      .then(res => {
        setDataBase(res);
        loadInitialUsers(res);
      })
      .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [
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
  ];
}
