import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950/80 px-6 py-8 text-center backdrop-blur-xl">
      <p className="text-sm text-neutral-400">
        © {new Date().getFullYear()} All rights reserved. {profile.name}.
      </p>
    </footer>
  );
}
