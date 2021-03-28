import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import encodeURIHelper from '../common/helpers/encodeURIHelper';

const initialState = {
  username: '',
  fullname: '',
  email: '',
  avatar: '',
  token: null,
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

export const signupUser = createAsyncThunk(
  'users/signupUser',
  async (payload, thunkAPI) => {

    try {
      const response = await fetch(
        '/auth/register',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: encodeURIHelper(payload)
        }
      );
      let data = await response.json();
      console.log('data', data);

      if (response.status === 201) {
        localStorage.setItem('token', data.token);
        return { ...data };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  'users/login',
  async ({ email, password }, thunkAPI) => {

    var formBody = [];
    formBody.push(encodeURIComponent('email') + "=" + encodeURIComponent(email));
    formBody.push(encodeURIComponent('password') + "=" + encodeURIComponent(password));

    try {
      const response = await fetch(
        '/auth/login',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: formBody.join("&"),
        }
      );
      let data = await response.json();
      // console.log('response', data);
      if (response.status === 200) {
        localStorage.setItem('token', data.token);
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const fetchUserBytoken = createAsyncThunk(
  'users/fetchUserByToken',
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const response = await fetch(
        '/auth/token',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            // Authorization: payload.token,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: encodeURIHelper(payload)
        }
      );
      let data = await response.json();
      console.log('data', data, response.status);

      if (response.status === 200) {
        return { ...data };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);



export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
    logout: (state) => {
      state = {...initialState};
      localStorage.clear();

      return state;
    }
  },
  extraReducers: {
    [signupUser.fulfilled]: (state, { payload }) => {
      console.log('fulfilled', payload);
      state.isFetching = false;
      state.isSuccess = true;
      state.email = payload.email;
      console.log('username',payload.username);
      state.username = payload.username;  
      state.fullname = payload.fullname;
      state.avatar = payload.avatar || 'default'
    },
    [signupUser.pending]: (state) => {
      console.log('pending')
      state.isFetching = true;
    },
    [signupUser.rejected]: (state, { payload }) => {
      console.log('rejected', payload)
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message || payload[0].msg;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      console.log('fulfilled', payload);
      state.token = payload.token;
      state.avatar = payload.avatar;
      state.email = payload.email;
      state.username = payload.username;
      state.isFetching = false;
      state.isSuccess = true;
      state.isError = false;

      return state;
    },
    [loginUser.rejected]: (state, { payload }) => {
      console.log('payload', payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [loginUser.pending]: (state) => {
      console.log('pending');
      state.isFetching = true;
    },
    [fetchUserBytoken.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchUserBytoken.fulfilled]: (state, { payload }) => {
      console.log('fulfilled',payload);

      state.isFetching = false;
      state.isSuccess = true;
      state.email = payload.email;
      state.username = payload.username;
      state.fullname = payload.fullname;
      state.avatar = payload.avatar;
    },
    [fetchUserBytoken.rejected]: (state, {payload}) => {
      console.log('fetchUserBytoken', payload);
      state.token = null;
      state.isFetching = false;
      state.isError = true;
    },
  },
});

export const { clearState, logout } = userSlice.actions;

export const userSelector = (state) => state.user;

export default userSlice.reducer