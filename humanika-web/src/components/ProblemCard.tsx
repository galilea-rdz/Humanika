import { LucideIcon } from "lucide-react";

interface ProblemCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ProblemCard({ icon: Icon, title, description }: ProblemCardProps) {
  return (
    <div className="flex gap-4 p-5 bg-white rounded-[8px] shadow-sm border-l-4 border-[#1a5cb8] hover:shadow-md transition-shadow duration-200">
      <div className="flex-shrink-0 mt-0.5">
        <div className="w-10 h-10 rounded-full bg-[#EBF2FF] flex items-center justify-center">
          <Icon className="w-5 h-5 text-[#1a5cb8]" />
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-[#0F1923] mb-1">{title}</h3>
        <p className="text-sm text-[#5A6478] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
