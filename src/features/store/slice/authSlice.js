export const authSlice = (set) => ({
  user: {
    email:"amirmahdi@gmail.com",
    password:"mahdi123"
  },
  isAuthenticated: true,
  login: (userData) => set({ user: userData, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
});
