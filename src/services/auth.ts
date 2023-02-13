import * as SecureStore from "expo-secure-store"

export const setAuthToken = (token: string) =>
  SecureStore.setItemAsync("token", token)

export const getAuthToken = () => SecureStore.getItemAsync("token")

export const removeAuthToken = () => SecureStore.deleteItemAsync("token")
