import TripPresenter from './presenter/trip-presenter.js';
import TripFilter from './view/trip-filter-view.js';
import SortPoint from './view/sort-point-view.js';
// import NewPoint from './view/new-point-view.js';
// import TripPoint from './view/trip-point-view.js';
// import EditPoint from './view/edit-point-view.js';

// const newEventBtnElement = document.querySelector('button.trip-main__event-add-btn');
const tripFiltersContainerElement = document.querySelector('.trip-controls__filters');
const tripEventsContainerElement = document.querySelector('section.trip-events');

const Presenter = new TripPresenter();

Presenter.init(tripFiltersContainerElement, new TripFilter());
Presenter.init(tripEventsContainerElement, new SortPoint());
Presenter.init();
