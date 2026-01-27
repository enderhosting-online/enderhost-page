import FollowUs from "./FollowUs";
import FooterLinks from "./FooterLinks";
import GoogleInfo from "./GoogleInfo";

export default function Footer() {
  return (
    <footer className="z-50 flex w-full items-start justify-center">
      <div className="flex w-full max-w-6xl flex-col gap-6 px-6 py-6 text-foreground">
        <FollowUs />
        <hr className="border-muted-foreground" />
        <FooterLinks />
        <hr className="border-muted-foreground" />
        <GoogleInfo />
      </div>
    </footer>
  );
}
