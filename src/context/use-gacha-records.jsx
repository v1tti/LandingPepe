import createGlobalState from "react-create-global-state";

const USER_KEY = 'user_records';

const initialRecords = JSON.parse(localStorage.getItem(USER_KEY)) || {
  records: [],
};

const [_useGlobalUser, Provider] = createGlobalState(initialRecords);

export function useGlobalUser() {
  const [state, _setRecords] = _useGlobalUser();

  function setRecords(records) {
    const newState = { records };
    _setRecords(newState);
    localStorage.setItem(USER_KEY, JSON.stringify(newState));
  }

  return [state.records, setRecords];
}

export const GlobalUserProvider = Provider;