export interface IStore<S> {
    /**
     * It returns the store state
     */
    getState(): S

    /**
     * It updates the store state
     * @param partialState The partial state update
     */
    updateState(partialState: Partial<S>): void
}

export class BaseStore<S> implements IStore<S> {
    private _state: S;

    constructor(initialState: S) {
        this._state = initialState
    }

    public getState(): S {
        return this._state
    }

    public updateState(partialState: Partial<S>): void {
        this._state = Object.assign({}, this._state, partialState)
    }

}