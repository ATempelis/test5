import * as esbuild from "esbuild";

let ctx = await esbuild.context({
  entryPoints: ["script.js"],
  outdir: "dist",
  allowOverwrite: true,
  bundle: true,
});

await ctx.watch();
console.log("watching...");