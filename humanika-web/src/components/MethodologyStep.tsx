interface MethodologyStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function MethodologyStep({
  number,
  title,
  description,
  isLast = false,
}: MethodologyStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-[#1a5cb8] flex items-center justify-center mb-4 z-10">
        <span className="text-white font-bold text-lg">{number}</span>
      </div>
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-[#EBF2FF]" />
      )}
      <h3 className="text-xl font-bold text-[#0F1923] mb-2">{title}</h3>
      <p className="text-[#5A6478] text-sm leading-relaxed max-w-xs">{description}</p>
    </div>
  );
}
