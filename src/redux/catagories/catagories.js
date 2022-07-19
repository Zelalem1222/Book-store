const CHECK_STATUS = 'CHECK_STATUS';

const catagoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'UNDER CONSTRUCTION';

    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default catagoriesReducer;
