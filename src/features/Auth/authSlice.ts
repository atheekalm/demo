import { history } from './../../index';
import { FieldValues } from 'react-hook-form';
import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { User } from './../../app/models/user';
import APIendpoints from '../../app/api/APIendpoint';



interface authState {
    user: User | null
}

const initialState: authState = {
    user: null
}


export const loginUser = createAsyncThunk<User, FieldValues>(
    'Auth/loginUser',
    async (data, ThunkAPI) => {
        try {
            const user = await APIendpoints.Auth.login(data);
            localStorage.setItem('user', JSON.stringify(user));
            return user
        } catch (error:any) {
            return ThunkAPI.rejectWithValue({ error: error.data })
        }
    }
)


export const Currentuser = createAsyncThunk<User>(
    'Auth/currentuser',
    async (_, ThunkAPI) => {
        ThunkAPI.dispatch(setUser(JSON.parse(localStorage.getItem('user')!)))
        try {
            const user = await APIendpoints.Auth.currentUser();
            localStorage.setItem('user', JSON.stringify(user));
            return user
        } catch (error) {
            return ThunkAPI.rejectWithValue({ error: error })
        }
    },
    {
        condition: () => {
            if (!localStorage.getItem('user')) return false;
        }
    }
)


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        LogOut: (state) => {
            state.user = null;
            localStorage.removeItem('user');
            history.push('/Login')
        },
        setUser: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: (builder => {
        builder.addMatcher(isAnyOf(loginUser.fulfilled, Currentuser.fulfilled), (state, action) => {
            state.user = action.payload
        });
        builder.addMatcher(isAnyOf(loginUser.rejected), (state, action) => {
            throw action.payload;
        })
    })
})


export const { LogOut, setUser } = authSlice.actions;