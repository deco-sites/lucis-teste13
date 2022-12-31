import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 435,
  site: "lucis-teste13",
  domains: ["https://deco-sites-lucis-teste13.deno.dev/"],
});