interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="border-b border-craft-espresso flex items-center justify-between px-6 sm:px-10 lg:px-20 py-8 bg-craft-cream">
      <h2 className="font-pinyon text-5xl text-craft-espresso">{title}</h2>
      <p className="font-georgia text-md text-craft-espresso">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
