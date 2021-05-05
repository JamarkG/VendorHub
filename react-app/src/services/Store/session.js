const CREATE = 'session/create';
const DESTROY = 'session/destroy';

const createSession = user => ({
    type: CREATE,
    user
})

const destroySession = user => ({
    type: DESTROY
})

export const authenticate = () => async dispatch => {
    const response = await fetch('/api/auth/',{
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const user = await response.json();
    dispatch(createSession(user));
}

export const login = (email, password) => async dispatch  => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const user = await response.json();
    dispatch(createSession(user));
}

export const signUp = (username, email, password) => async dispatch  => {
    const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            email,
            password,
        }),
    });
    const user = await response.json();
    dispatch(createSession(user));
}

export const logout = () => async dispatch  => {
    const response = await fetch("/api/auth/logout", {
      headers: {
        "Content-Type": "application/json",
      }
    });
    dispatch(destroySession());
};

export default function reducer (
        state = { user: null },
        action
    ){
        switch (action.type){
        case CREATE:
            return { ...state, user: action.user};
        case DESTROY:
            return { ...state, user: null }
        default:
            return state;
        }

}
