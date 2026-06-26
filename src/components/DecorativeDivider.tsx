export function DecorativeDivider() {
  return (
    <div className="flex items-center gap-4 py-6 text-sand/80" aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-sand/35 to-sand/15" />
      <span className="font-display text-lg">✦</span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-sand/35 to-sand/15" />
    </div>
  );
}
