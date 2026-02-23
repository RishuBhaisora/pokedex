// Layout for the `(tabs)` group.
// Every file inside `src/app/(tabs)/` becomes a bottom-tab screen.
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function TabsLayout() {
  return (
    <>
      {/* Make the status bar blend into the red header so it looks
         like a single solid bar at the top, with light icons. */}
      <StatusBar style="light" backgroundColor="#FF1744" />

      {/* Bottom tab navigator that switches between `pokedex.tsx`
         and `favorites.tsx`. Shared styling for header + tab bar
         lives in `screenOptions`. */}
      <Tabs
        initialRouteName="pokedex"
        screenOptions={{
          // Tab bar icon/text colors
          tabBarActiveTintColor: "#FF1744",
          tabBarInactiveTintColor: "#8E8E93",
          // Red iOS-style header bar
          headerStyle: {
            backgroundColor: "#FF1744",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        {/* `name` must match the file name without extension: `pokedex.tsx`. */}
        <Tabs.Screen
          name="pokedex"
          options={{
            title: "Pokedex",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list" size={size} color={color} />
            ),
          }}
        />

        {/* `favorites.tsx` tab, with a heart icon and its own title. */}
        <Tabs.Screen
          name="favorites"
          options={{
            title: "Favorites",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
