import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const projectsDir = path.join(process.cwd(), 'public', 'projects');
  let projects = [];

  try {
    projects = fs.readdirSync(projectsDir);
  } catch (error) {
    console.warn('No projects directory found at build time:', error.message);
  }

  return {
    props: {
      projects,
    },
  };
}

export default function Projects({ projects }) {
  return (
    <main className="bg-black text-neon-green min-h-screen p-10">
      <h1 className="text-4xl text-after-red mb-6 font-orbitron">Aftercode Projects</h1>
      {projects.length === 0 ? (
        <p className="text-neon-green/70">No exports synced yet.</p>
      ) : (
        <ul className="space-y-2">
          {projects.map((project) => (
            <li key={project}>{project}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
