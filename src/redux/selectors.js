import { createSelector } from 'reselect';

export const getElementsInContainer = (store) => store.elements;

export const getElementById = (id) => (store) =>
  store.elements.find((element) => element.id === id);

export const getSelectedElement = createSelector(
  (store) => store.elements,
  (store) => store.selected,
  (elements, selected) => elements.find((element) => element.id === selected.id)
);
