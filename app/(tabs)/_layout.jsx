import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: 'none',
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
        options={{ title: "Çöp Kutusu", headerShown: false }}
      />
      <Tabs.Screen
        name="archived"
        options={{ title: "Arşiv", headerShown: false }}
      />
      <Tabs.Screen
        name="settings"
        options={{ title: "Ayarlar", headerShown: false }}
      />
    </Tabs>
  );
}

