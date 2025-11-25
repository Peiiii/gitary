interface SplitChunkStrategyItem {
  match: string | RegExp | (string | RegExp)[];
  name: string | ((s: string) => string);
}
type SplitChunkStrategy = SplitChunkStrategyItem[];
export const strategy: SplitChunkStrategy = [
  // Split Monaco into its own chunk to keep app chunk smaller
  {
    match: [/^monaco-editor$/],
    name: "monaco",
  },
  {
    match: [
      /^react$/,
      /^react-dom$/,
      /^react-router-dom$/,
      /^react-redux$/,
      /^@reduxjs/,
    ],
    name: "vendor",
  },
  {
    match: [/^@chakra-ui/, /^@emotion/, /^framer-motion/],
    name: "chakra-ui",
  },
  {
    match: [/react-icons/, /usehooks-ts/],
    name: "react-utils",
  },
  {
    match: [/fuse.js/, /history/, /nanoid/],
    name: "common-utils",
  },
  {
    match: [
      /remark-gfm/,
      /remark-math/,
      /remark/,
      /react-syntax-highlighter/,
      /rehype-katex/,
      /rehype/,
      /react-markdown/,
      /device-detector-js/,
      /crisp-sdk-web/,
      /@cloudbase\/js-sdk/,
      /recharts/,
    ],
    name: (file) => {
      return file;
    },
  },
];

/**
 * Generate a Rollup/Vite `manualChunks` function from the current strategy.
 * Rolldown (rolldown-vite) only accepts a function here, not an object,
 * so we build a dep -> chunk name map and return a resolver function.
 */
export const renderChunksWithStrategy = (deps: Record<string, string>) => {
  const depNames = Object.keys(deps).filter(
    (dep) => !dep.startsWith("@types"),
  );
  const chunks: Record<string, string[]> = {};
  const depToChunk: Record<string, string> = {};

  const match = (ptns: string | RegExp | (string | RegExp)[], s: string) => {
    const matchOne = (ptn: string | RegExp, s: string) => {
      if (typeof ptn === "string") ptn = new RegExp("^" + ptn + "$");
      return ptn.test(s);
    };
    if (!Array.isArray(ptns)) ptns = [ptns];
    for (let i = 0; i < ptns.length; i++) {
      if (matchOne(ptns[i], s)) return true;
    }
    return false;
  };

  for (let i = 0; i < depNames.length; i++) {
    const dep = depNames[i];
    for (let j = 0; j < strategy.length; j++) {
      const rule = strategy[j];
      if (match(rule.match, dep)) {
        const name =
          typeof rule.name === "function" ? rule.name(dep) : rule.name;
        if (!(name in chunks)) {
          chunks[name] = [];
        }
        chunks[name].push(dep);
        depToChunk[dep] = name;
        break; //stop matching
      }
    }
  }
  console.log("chunks:", chunks);

  // manualChunks resolver for Rollup / Rolldown
  return (id: string) => {
    if (!id.includes("node_modules")) return;

    let pkgName: string | undefined;

    // pnpm layout: node_modules/.pnpm/<name>@<ver>/node_modules/<name>/...
    const pnpmMatch = id.match(/node_modules\/\.pnpm\/([^@/]+)@/);
    if (pnpmMatch) {
      // Scoped packages are encoded as @scope+name
      pkgName = pnpmMatch[1].replace(/\+/g, "/");
    } else {
      // Fallback: classic node_modules layout
      const scopedMatch = id.match(/node_modules\/(@[^/]+\/[^/]+)/);
      if (scopedMatch) {
        pkgName = scopedMatch[1];
      } else {
        const plainMatch = id.match(/node_modules\/([^/]+)/);
        if (plainMatch) {
          pkgName = plainMatch[1];
        }
      }
    }

    if (!pkgName) return;
    return depToChunk[pkgName];
  };
};
