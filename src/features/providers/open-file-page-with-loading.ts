import type xbook from "xbook";
import { EventKeys } from "@/constants/eventKeys";
import type { PageDescriptor } from "xbook/ui/page-box/controller";

type OpenFilePageWithLoadingOptions = {
  xbook: typeof xbook;
  pageId: string;
  uri: string;
  viewType: string;
  title?: string;
  viewProps?: Record<string, unknown>;
};

/**
 * Generic helper for file-based pages that:
 * - show a "loading" status in the tab header
 * - emit FileLoading so other listeners can clear the status on FileLoaded
 * - reuse an existing tab if the same pageId already exists
 */
export const openFilePageWithLoading = ({
  xbook,
  pageId,
  uri,
  viewType,
  title,
  viewProps,
}: OpenFilePageWithLoadingOptions) => {
  const pageBox = xbook.layoutService.pageBox;

  // If this file is already open in a tab, just activate that tab
  // instead of resetting its status back to "loading".
  const existingPages = (pageBox.getPageList?.() || []) as PageDescriptor[];
  const existingPage = existingPages.find((page) => page.id === pageId);
  if (existingPage) {
    pageBox.showPage(pageId);
    return;
  }

  pageBox.addPage({
    id: pageId,
    title: title ?? uri,
    status: "loading",
    viewData: {
      type: viewType,
      props: viewProps ?? { uri },
    },
  });

  xbook.eventBus.emit(EventKeys.FileLoading, { uri });
};
