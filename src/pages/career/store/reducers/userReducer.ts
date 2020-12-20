export const Types = {
  SetUser: 'user/SetUser',
  FetchUser: 'user/FetchUser',
} as const;

export const setUser = (user:User) => ({
  type: Types.SetUser,
  payload: user,
});
export const fetchUser = (name:string) => ({
  type: Types.FetchUser,
  payload: name,
});

export const userActions = {
  setUser,
  fetchUser,
};

export type Action = ReturnType<typeof setUser>
export type User = {name:string, tag:string, department:string}
interface InitialState{
 user:null|User
}

const initialState:InitialState = {
  user: null,
};

const searchReducer = (state = initialState, action:Action):InitialState => {
  if (action.type === Types.SetUser) {
    return {
      ...state,
      user: action.payload,
    };
  }
  return state;
};

export default searchReducer;
