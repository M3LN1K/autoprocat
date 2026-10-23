import { cn } from "@/lib/utils";

type PhotoPlaceholderProps = {
  label: string;
  className?: string;
};

export function PhotoPlaceholder({ label, className }: PhotoPlaceholderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl bg-muted text-center text-sm text-muted-foreground",
        className
      )}
    >
      <span className="px-4">Место для фото {label}</span>
    </div>
  );
}
