import { BaseActivityItem } from "xbook/ui/activiti-bar/components/base-activity-item";
import { IActivityItem } from "xbook/ui/activiti-bar/types";
import { getCurrentDomain } from "@/core/utils/domain-config";

interface GitaryBrandActivityItemProps {
  activity: IActivityItem;
  isExpanded: boolean;
}

export function GitaryBrandActivityItem({
  activity,
  isExpanded,
}: GitaryBrandActivityItemProps) {
  const handleClick = () => {
    const currentDomain = getCurrentDomain();
    if (currentDomain !== 'gitary.app' && currentDomain !== 'www.gitary.app') {
      window.open('https://gitary.app', '_blank');
    }
  };

  return (
    <BaseActivityItem
      activity={activity}
      isExpanded={isExpanded}
      onClick={handleClick}
      icon={
        <img
          src="/logo.svg"
          alt="Gitary"
          className="w-full h-full object-contain"
        />
      }
      textClassName="font-semibold tracking-tight"
    />
  );
}

