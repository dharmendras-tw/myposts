import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async (_, { getState }) => {
    const allNotifications = selectAllNotifications(getState());
    const [latestNotification] = allNotifications;
    const latestTimestamp = latestNotification ? latestNotification.date : "";
    const response = await fetch(
      `http://localhost:8080/api/notifications?since=${latestTimestamp}`
    );
    return response.json();
  }
);

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: [],
  reducers: {
    allNotificationsRead(state, action) {
      state.forEach((notification) => {
        notification.read = true;
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.push(...action.payload);
      state.forEach((notification) => {
        // Any notifications we've read are no longer new
        notification.isNew = !notification.read;
      });
      // Sort with newest first
      state.sort((a, b) => b.date.localeCompare(a.date));
    });
  },
});

export const { allNotificationsRead } = notificationsSlice.actions;

export default notificationsSlice.reducer;

export const selectAllNotifications = (state) => state.notifications;
