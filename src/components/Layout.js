import { Header } from "./Header";

export function Layout({ navigation, settings, children }) {
  return (
    <div className="text-slate-800">
      <Header navigation={navigation} settings={settings} />
      <main className="py-8">{children}</main>
    </div>
  );
}
