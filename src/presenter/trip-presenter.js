// Импорт view
import { render } from '../render.js';

export default class TripPresenter {
  init = (tripContainer = [], tripComponent = []) => {
    this.tripContainer = tripContainer;
    this.tripComponent = tripComponent;
    render(this.tripComponent, this.tripContainer);
  };
}
