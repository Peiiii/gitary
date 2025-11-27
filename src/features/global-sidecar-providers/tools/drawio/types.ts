export type DrawioOperation = {
  op: "add_node" | "connect" | "rename_node" | "delete_node";
  id?: string;
  label?: string;
  kind?: string;
  near?: string;
  from?: string;
  to?: string;
  target?: string;
  newLabel?: string;
};

export interface ApplyOperationsResult {
  applied: number;
  failed: { index: number; op: string; reason: string }[];
}

