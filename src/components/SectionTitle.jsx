export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold tracking-tight text-white font-mono uppercase">
        {title}
      </h2>
      <p className="text-neutral-500 text-sm mt-1">
        {subtitle}
      </p>
    </div>
  );
}