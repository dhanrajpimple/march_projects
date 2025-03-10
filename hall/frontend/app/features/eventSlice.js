import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // ✅ Fixed `axois` typo

const API = "http://localhost:8000/events";
const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : '',  // Handle missing token
    },
};

// Fetch all events
export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
    const response = await axios.get(API, config);
    return response.data;
});

// Add a new event
export const addEvent = createAsyncThunk('events/addEvent', async (event) => {
    const response = await axios.post(API, event, config);
    return response.data;
});

// Update an existing event
export const updateEvent = createAsyncThunk('events/updateEvent', async (event) => {
    const response = await axios.put(`${API}/${event.id}`, event, config);
    return response.data;
});

// Delete an event
export const deleteEvent = createAsyncThunk('events/deleteEvent', async (id) => {
    await axios.delete(`${API}/${id}`, config);
    return id; // ✅ Return `id` instead of full response
});

const eventSlice = createSlice({   
    name: "events",
    initialState: {
        events: [],
        loading: false, // ✅ Added `loading`
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvents.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.events = action.payload;
                state.loading = false;
            })
            .addCase(fetchEvents.rejected, (state) => {
                state.loading = false;
            })
            .addCase(addEvent.fulfilled, (state, action) => { // ✅ Fixed duplicate case
                state.events.push(action.payload);
            })
            .addCase(updateEvent.fulfilled, (state, action) => {
                const index = state.events.findIndex((event) => event.id === action.payload.id);
                if (index !== -1) {
                    state.events[index] = action.payload; // ✅ Corrected update logic
                }
            })
            .addCase(deleteEvent.fulfilled, (state, action) => {
                state.events = state.events.filter((event) => event.id !== action.payload); // ✅ Corrected delete logic
            });
    }
});

export default eventSlice.reducer;
