import { useRouter } from "next/router";
import { Header } from "./Header";
import { HeaderMobile } from "./HeaderMobile";

export function Layout({ navigation, settings, children }) {
  const router = useRouter()
  const slug = router.query.uid;
  let headerProps = {}

  if (router.asPath === "/") {
    headerProps = {
      navigation: navigation,
      settings: settings,
      bgwhite: "bgwhite",
      textwhite: "textwhite",
      bgblack: "bgblack",
      textblack: "textblack",
      position: "absolute",
      slug,
      path: router.asPath,
    };
  } else {
    headerProps = {
      navigation: navigation,
      settings: settings,
      bgwhite: "bgblack",
      textwhite: "textblack",
      bgblack: "bgwhite",
      textblack: "textwhite",
      position: "relative",
      slug,
      path: router.asPath,
    };
  }

  return (
    <div className="text-slate-800">
      <div className="max-md:hidden">
        <Header {...headerProps} />
      </div>
      <div className="md:hidden">
        <HeaderMobile {...headerProps} />
      </div>
      <main>{children}</main>
    </div>
  );
}
