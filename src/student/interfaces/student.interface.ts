import { Document } from 'mongoose';

export interface IStudent extends Document{

    readonly _id?: string;
    readonly code: number;
    readonly name: string;
    readonly photoURL: string;
    readonly createAt: Date;
    readonly __v?:number;

}