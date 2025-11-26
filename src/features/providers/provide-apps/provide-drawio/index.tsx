import { openerService } from "@/services/opener.service";
import { AppDrawio } from "./app";
import { createPlugin } from "xbook/common/createPlugin";
import { t } from "@/i18n/utils";

export const provideDrawio = createPlugin({
  initilize(xbook) {
    xbook.componentService.register("drawio", AppDrawio);

    openerService.register({
      id: "drawio",
      label: t("apps.drawio"),
      showInTreeMenu: true,
      icon: "AiOutlineFileAdd",
      match: [".drawio"],
      priority: 100,
      templates: [
        {
          id: "new-drawio",
          label: t("drawio.newFile"),
          defaultFileName: "Untitled.drawio",
          initialContent: '<mxfile><diagram></diagram></mxfile>',
          icon: "AiOutlineFileAdd",
        },
      ],
      init: (uri) => {
        const getFileName = (value: string) => {
          return value.split("/").pop() ?? "unknown";
        };

        xbook.layoutService.pageBox.addPage({
          id: `drawio:${uri}`,
          title: `${t("apps.drawio")}:${getFileName(uri)}`,
          viewData: {
            type: "drawio",
            props: { uri },
          },
        });
      },
    });
  },
});

