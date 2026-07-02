import { Tabs } from "expo-router";
import { NotesProvider } from "../context/NotesContext";

export default function TabsLayout() {
  return (
    <NotesProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            display: "none",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Notlar",
            headerShown: false,
          }}
        />

        <Tabs.Screen
          name="deleted"
          options={{
            title: "Çöp Kutusu",
            headerShown: false,
          }}
        />

        <Tabs.Screen
          name="archived"
          options={{
            title: "Arşiv",
            headerShown: false,
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            title: "Ayarlar",
            headerShown: false,
          }}
        />
      </Tabs>
    </NotesProvider>
  );
}