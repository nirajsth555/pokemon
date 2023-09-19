import { Action } from "redux";

export interface ActionWithPayload<T> extends Action {
    payload?: T
}

export interface ActionModel {
    payload: { [key: string]: string }
    type: { [key: string]: string }
}

export interface IGeneration {
    name: string;
    url: string;
}