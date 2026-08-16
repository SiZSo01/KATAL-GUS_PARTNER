import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="scene-kicker">Ismeretlen tér</p>
      <h1>Ez a portál még nem létezik.</h1>
      <Link className="return-link" href="/">
        Vissza a virtuális előtérbe
      </Link>
    </main>
  );
}

