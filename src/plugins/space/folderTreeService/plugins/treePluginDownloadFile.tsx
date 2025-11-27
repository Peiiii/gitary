import { spaceHelper } from "@/helpers/space.helper";
import { createFolderTreePlugin } from "@/plugins/space/folderTreeService/plugins/base";
import {
  TreeEventKeys,
  TreeServicePoints,
} from "@/plugins/space/folderTreeService/tokens";
import { t } from "@/i18n/utils";
import { Download } from "lucide-react";
import xbook from "xbook/index";

// eslint-disable-next-line react-refresh/only-export-components
export default createFolderTreePlugin({
  activate({ viewSystem, eventBus, serviceBus }) {
    const treeService = serviceBus.createProxy(TreeServicePoints.TreeService);
    const space = treeService.getSpace();

    // Register download icon for use in the tree context menu
    viewSystem.renderer.register("AiOutlineDownload", Download);

    viewSystem.addNodeMenuItems([
      {
        id: "downloadFile",
        key: "downloadFile",
        name: t("tree.download"),
        label: t("tree.download"),
        icon: "AiOutlineDownload",
        group: "more",
        when: "type === 'file'",
        event: TreeEventKeys.DownloadFile.name,
      },
    ]);

    eventBus.on(TreeEventKeys.DownloadFile, async ({ node }) => {
      try {
        const uri = spaceHelper.getUri(
          space.id,
          node.id === "root" ? "" : node.id
        );

        xbook.notificationService.info(t("tree.downloadStarted"));

        const uint8 = await xbook.fs.readFile(uri);
        // Convert Uint8Array<ArrayBufferLike> to ArrayBuffer to satisfy DOM Blob typing
        const arrayBuffer = uint8.buffer as ArrayBuffer;
        const blob = new Blob([arrayBuffer]);
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = node.name || "download";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Failed to download file", error);
        xbook.notificationService.error(t("tree.downloadFailed"));
      }
    });
  },
});
