interface ProjectVisualProps {
  title: string;
  category: string;
  index: number;
  imageUrl?: string;
}

const getInitials = (title: string) => {
  const words = title
    .replace(/[^A-Za-z0-9\s-]/g, '')
    .split(/[\s-]+/)
    .filter(Boolean);

  return words
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('');
};

const ProjectVisual = ({
  title,
  category,
  index,
  imageUrl,
}: ProjectVisualProps) => {
  return (
    <div
      role="img"
      aria-label={`Portada del proyecto ${title}`}
      className="relative aspect-[16/10] overflow-hidden border border-rule bg-surface"
    >
      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-label uppercase tracking-[0.14em] text-muted">
            {category}
          </span>
          <span className="font-mono text-label tracking-[0.14em] text-muted">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <span className="font-display text-6xl leading-none tracking-tight text-muted/70">
          {getInitials(title)}
        </span>
      </div>

      {imageUrl && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )}
    </div>
  );
};

export default ProjectVisual;
