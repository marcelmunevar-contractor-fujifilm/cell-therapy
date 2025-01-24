import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between gap-32 p-16">
      <h1 className="text-6xl font-semibold mb-4 max-w-2xl">
        A <span className="text-ffgreen">Partner for Life</span>. Moving Cell
        Therapy Forward.
      </h1>
      <p className="mb-4 text-3xl max-w-xl">
        From discovery to commercialization, we advance cell therapies and
        transform human health with our partners worldwide.
      </p>
    </div>
  );
}
