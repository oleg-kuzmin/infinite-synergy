export interface IUser {
  id: number;
  name: string;
  department: string;
  company: string;
  jobTitle: string;
}

export type HandleOpenUserEdit = (obj: IUser) => void;

export type HandleChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => void;

export type HandleSubmitUserEdit = (evt: React.FormEvent<HTMLFormElement>) => void;

export type HandleResetUserEdit = (id: number) => void;
