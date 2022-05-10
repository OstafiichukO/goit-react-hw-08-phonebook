const getLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getCurrentRefresh = state => state.auth.isRefresh;

export { getLoggedIn, getUserName, getCurrentRefresh };
