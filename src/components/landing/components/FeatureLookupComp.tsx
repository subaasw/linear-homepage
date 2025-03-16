export interface FeatureLookUpItemProps {
  Icon: React.ElementType;
  title: string;
  desc: string;
}

function FeatureLookupItem({ Icon, title, desc }: FeatureLookUpItemProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-lightgray mb-2">
        <Icon className="h-4 w-4" />
        <h4 className="text-sm font-medium">{title}</h4>
      </div>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}

export default function FeatureLookupSection({
  listItems,
}: {
  listItems: FeatureLookUpItemProps[];
}) {
  return (
    <div className="border-t py-12 text-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {listItems.map((item) => (
          <FeatureLookupItem
            key={item.title}
            title={item.title}
            Icon={item.Icon}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
}
