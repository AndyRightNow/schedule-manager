export class MenuService {
  private _isSelectionModeOn: boolean = false;

  public toggleSelectionMode() {
    this._isSelectionModeOn = !this._isSelectionModeOn;
  }

  get isSelectionModeOn() {
    return this._isSelectionModeOn;
  }
}