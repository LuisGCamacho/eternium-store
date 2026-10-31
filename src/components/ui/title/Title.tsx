import { titleFont } from "@/src/config/fonts";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div className={`mt-3 ${className ?? ""} border-red-600`}>
      {/* Title */}
      <h1 className={`${titleFont.className} text-4xl font-semibold my-2`}>
        {title}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <h3 className="text-xl mb-5">{subtitle}</h3>
      )}
    </div>
  );
};