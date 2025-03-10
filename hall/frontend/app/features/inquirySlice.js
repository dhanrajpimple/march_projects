import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = "http://localhost:8000/inquiry";
const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : '',  // Handle missing token
    },
};

// Fetch all inquiries
export const fetchInquiries = createAsyncThunk('inquiries/fetchInquiries', async () => {
    const response = await axios.get(API, config);
    return response.data;
});

// Add a new inquiry
export const addInquiry = createAsyncThunk('inquiries/addInquiry', async (inquiry) => {
    const response = await axios.post(API, inquiry, config); // ✅ Added `config`
    return response.data;
});

// Update an existing inquiry
export const updateInquiry = createAsyncThunk('inquiries/updateInquiry', async (inquiry) => {
    const response = await axios.put(`${API}/${inquiry.id}`, inquiry, config);
    return response.data;
});

// Delete an inquiry
export const deleteInquiry = createAsyncThunk('inquiries/deleteInquiry', async (id) => {
    await axios.delete(`${API}/${id}`, config);
    return id; // ✅ Return `id` instead of full response
});

const inquirySlice = createSlice({
    name: "inquiries",
    initialState: {
        inquiries: [],
        loading: false, // ✅ Added `loading`
    },
    reducers: {},
    extraReducers: (builder) => { // ✅ Fixed `builde` typo
        builder
            .addCase(fetchInquiries.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchInquiries.fulfilled, (state, action) => {
                state.inquiries = action.payload;
                state.loading = false;
            })
            .addCase(fetchInquiries.rejected, (state) => {
                state.loading = false;
            })
            .addCase(addInquiry.fulfilled, (state, action) => {
                state.inquiries.push(action.payload);
            })
            .addCase(updateInquiry.fulfilled, (state, action) => {
                const index = state.inquiries.findIndex((inq) => inq.id === action.payload.id);
                if (index !== -1) {
                    state.inquiries[index] = action.payload; // ✅ Corrected update logic
                }
            })
            .addCase(deleteInquiry.fulfilled, (state, action) => {
                state.inquiries = state.inquiries.filter((inq) => inq.id !== action.payload); // ✅ Corrected delete logic
            });
    }
});

export default inquirySlice.reducer;
