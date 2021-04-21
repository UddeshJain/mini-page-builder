import {
  ADD_ELEMENT,
  SELECT_ELEMENT,
  UNSELECT_ELEMENT,
  SET_ELEMENT_PROPERTIES,
  REMOVE_ELEMENT,
  ADD_INITIAL_DATA,
} from './actionTypes';

const initialState = {
  elements: [],
  children: [],
  selected: {
    id: null,
    fromContainerId: null,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ELEMENT: {
      const { element } = action.payload;
      let newState = {
        ...state,
        elements: [...state.elements, element],
        children: [...state.children, element.id],
      };
      localStorage.setItem('elements', JSON.stringify(newState));
      return newState;
    }

    case SET_ELEMENT_PROPERTIES: {
      const { elementId, properties } = action.payload;
      let newState = {
        ...state,
        elements: state.elements.map((element) =>
          element.id === elementId
            ? {
                ...element,
                properties: {
                  ...element.properties,
                  ...properties,
                },
              }
            : element
        ),
      };

      localStorage.setItem('elements', JSON.stringify(newState));
      return newState;
    }

    case REMOVE_ELEMENT: {
      const { elementId } = action.payload;
      let newState = {
        ...state,
        elements: state.elements.filter((element) => element.id !== elementId),
      };

      localStorage.setItem('elements', JSON.stringify(newState));
      return newState;
    }

    case SELECT_ELEMENT: {
      const { elementId } = action.payload;
      let newState = {
        ...state,
        elements: state.elements.map((element) => {
          if (element.id === elementId) {
            return {
              ...element,
              selected: true,
            };
          }

          if (state.selected.id === element.id) {
            return {
              ...element,
              selected: false,
            };
          }

          return element;
        }),
        selected: {
          id: elementId,
        },
      };

      localStorage.setItem('elements', JSON.stringify(newState));
      return newState;
    }

    case UNSELECT_ELEMENT: {
      let newState = {
        ...state,
        elements: state.elements.map((element) =>
          element.id === state.selected.id
            ? {
                ...element,
                selected: false,
              }
            : element
        ),
        selected: {
          id: null,
        },
      };

      localStorage.setItem('elements', JSON.stringify(newState));
      return newState;
    }

    case ADD_INITIAL_DATA: {
      const { data } = action.payload;
      console.log(data);
      return {
        ...state,
        ...data,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
