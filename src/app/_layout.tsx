// Root layout for the whole app.
// Expo Router wraps everything in a Stack navigator by default; here we
// keep that Stack (for future non-tab screens like details, modals, etc.)
// but hide its header because each tab screen already provides its own.
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
