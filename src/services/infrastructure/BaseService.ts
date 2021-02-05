import { BaseStore } from "./BaseStore";

export class BaseService<T> extends BaseStore<T> {
    constructor(initialState: T) {
        super(initialState)        
    }
}