import TripFilters from './view/trip-filters-view.js';
import TripPresenter from './presenter/trip-presenter.js';
import { render } from './render.js';

const tripFiltersContainerElement = document.querySelector('.trip-controls__filters');
const tripEventsContainerElement = document.querySelector('section.trip-events');

const tripPresenter = new TripPresenter();

render(new TripFilters(), tripFiltersContainerElement);
tripPresenter.init(tripEventsContainerElement);
