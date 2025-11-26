import {
  DrawioSaveStatus,
  type DrawioXmlValue,
} from "./drawio-shared";
import { DrawioEditor } from "./drawio-editor";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { AlertCircle, CheckCircle2, CircleDot, Loader2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface DrawioCanvasProps {
  xml: DrawioXmlValue | null;
  onChange: (xml: DrawioXmlValue) => void;
  onSave?: (xml: DrawioXmlValue) => void;
  saveStatus: DrawioSaveStatus;
}

export const DrawioCanvas: FC<DrawioCanvasProps> = ({
  xml,
  onChange,
  onSave,
  saveStatus,
}) => {
  const { t } = useTranslation();

  const renderSaveStatusIcon = () => {
    if (saveStatus === DrawioSaveStatus.SAVING) {
      return <Loader2 className="h-4 w-4 animate-spin" />;
    }
    if (saveStatus === DrawioSaveStatus.DIRTY) {
      return <CircleDot className="h-4 w-4" />;
    }
    if (saveStatus === DrawioSaveStatus.ERROR) {
      return <AlertCircle className="h-4 w-4 text-destructive" />;
    }
    return <CheckCircle2 className="h-4 w-4 text-green-600" />;
  };

  const renderSaveStatusTooltip = () => {
    if (saveStatus === DrawioSaveStatus.SAVING) {
      return t("drawio.saving");
    }
    if (saveStatus === DrawioSaveStatus.DIRTY) {
      return t("drawio.edited");
    }
    if (saveStatus === DrawioSaveStatus.ERROR) {
      return t("drawio.saveError");
    }
    return t("drawio.saved");
  };

  return (
    <div className="h-full w-full relative">
      <div className="absolute top-4 right-4 z-10">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center justify-center">
                {renderSaveStatusIcon()}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              {renderSaveStatusTooltip()}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <DrawioEditor initialXml={xml} onChange={onChange} onSave={onSave} />
    </div>
  );
};

