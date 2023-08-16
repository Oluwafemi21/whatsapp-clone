import type { Config } from "tailwindcss";
export default <Partial<Config>>{
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("@tailwindcss/forms")({
      strategy: "base",
    }),
  ],
};
