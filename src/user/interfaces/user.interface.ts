import { Document } from 'mongoose';

export interface IUser extends Document {
    readonly email: string;
    readonly username: string;
    // readonly avatarId: string;
    readonly name: string;
    readonly surname: string;
    // readonly avatar: string;
    status: string
    // readonly gender: string;
    // readonly address: IAddress;
    // readonly profession: string;
    // readonly searchField: string;
    // readonly phone: string;
    readonly roles: string;
    readonly password: string;
}