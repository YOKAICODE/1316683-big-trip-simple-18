// Импорт view
import SortPoint from '../view/sort-point-view.js';
import TripContentList from '../view/trip-content-list-view.js';
import NewPoint from '../view/new-point-view.js';
import EditPoint from '../view/edit-point-view.js';
import TripPoint from '../view/trip-point-view.js';
// Импорт Утилиты
import { render } from '../render.js';

export default class TripPresenter {
  tripContentList = new TripContentList();

  init = (tripContainer) => {
    this.tripContainer = tripContainer;
    render(new SortPoint(), this.tripContainer);
    render(this.tripContentList, this.tripContainer);
    render(new NewPoint(), this.tripContentList.getElement());
    render(new TripPoint(), this.tripContentList.getElement());
    render(new EditPoint(), this.tripContentList.getElement());

    for (let i = 0; i < 2; i++) {
      render(new TripPoint(), this.tripContentList.getElement());
    }
  };
}
