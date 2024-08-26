import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["script.js", 'images/images1.jpg'],
  allowOverwrite: true,
 // inject: ['images/images1.jpg', 'images/images2.jpg', 'images/images3.jpg', 'images/images4.jpg'],
  loader: {
    ".png": "file",
    ".jpg": "file",
    ".jpeg": "file",
  },
  bundle: true,
  minify: true,
  keepNames: true,
  sourcemap: true,
  target: ["chrome58", "firefox57", "safari11", "edge16"],
  outdir: "dist",
});
