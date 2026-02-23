// This file is the entry route for the app (`/`).
// We immediately redirect into the tab navigator so the user always lands
// on the Pokedex tab instead of seeing a separate landing screen.
import { Redirect } from "expo-router";

export default function Index() {
  // `href` must match the file-based route for the pokedex tab:
  // `src/app/(tabs)/pokedex.tsx` -> "/(tabs)/pokedex".
  return <Redirect href="/(tabs)/pokedex" />;
}
