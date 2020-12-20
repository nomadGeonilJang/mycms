export const Types = {
  SetValue: 'search/SetValue',
  SetAutoComplete: 'search/SetAutoComplete',
  FetchAutoComplete: 'search/FetchAutoComplete',
} as const;

export const setValue = (keyword:string) => ({
  type: Types.SetValue,
  payload: keyword,
});
export const fetchAutoComplete = (keyword:string) => ({
  type: Types.FetchAutoComplete,
  payload: keyword,
});
export const setAutoComplete = (data:User[]) => ({
  type: Types.SetAutoComplete,
  payload: data,
});

export const actions = {
  setValue,
  fetchAutoComplete,
  setAutoComplete,
};

export type Action = ReturnType<typeof setValue> | ReturnType<typeof fetchAutoComplete> | ReturnType<typeof setAutoComplete>
export type User = {name:string, tag:string, department:string}
interface InitialState{
  keyword:string;
  autoCompletes:User[]
}

const initialState:InitialState = {
  keyword: '',
  autoCompletes: [],
};

const searchReducer = (state = initialState, action:Action):InitialState => {
  if (action.type === Types.SetValue) {
    return {
      ...state,
      keyword: action.payload,
    };
  }
  if (action.type === Types.SetAutoComplete) {
    return {
      ...state,
      autoCompletes: action.payload,
    };
  }
  return state;
};

export default searchReducer;
