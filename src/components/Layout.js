import { Header } from "./Header";
import { HeaderMobile } from "./HeaderMobile";

export function Layout({ navigation, settings, children }) {
  return (
    <div className="text-slate-800">
      <div className="max-md:hidden">
        <Header navigation={navigation} settings={settings} />
      </div>
      <div className="md:hidden">
        <HeaderMobile navigation={navigation} settings={settings} />
      </div>
      <main>{children}</main>
    </div>
  );
}
