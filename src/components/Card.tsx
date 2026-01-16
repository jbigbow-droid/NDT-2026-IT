interface CardProps {
  title: string;
  children: React.ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <div className="glass-card rounded-lg p-6">
      <h3 className="text-lg font-semibold text-[#00d4ff] mb-4">{title}</h3>
      {children}
    </div>
  );
}
