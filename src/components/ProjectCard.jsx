export default function ProjectCard({ project, onSelectProject }) {
  return (
    <div className="group relative rounded-xl border border-neutral-800/80 bg-neutral-950/50 p-6 flex flex-col justify-between hover:border-neutral-700 hover:bg-neutral-900/30 transition-all duration-300">
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-white group-hover:text-neutral-200 transition-colors">
            {project.title}
          </h3>
          <span className="font-mono text-xs text-neutral-600">0{project.id}</span>
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-normal">
          {project.description}
        </p>
      </div>

      <div>
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800/80 font-mono text-[10px] text-neutral-400 uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={() => onSelectProject(project)}
          className="w-full py-2.5 rounded-lg border border-neutral-800 bg-neutral-900/50 hover:bg-white hover:text-black hover:border-white text-neutral-300 font-mono text-xs tracking-wider uppercase transition-all duration-200"
        >
          Lihat Detail →
        </button>
      </div>
    </div>
  );
}