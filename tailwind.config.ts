import type { Config } from "tailwindcss";
export default <Partial<Config>>{
    darkMode: "class",
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/forms")({
            strategy: "base",
        }),
    ],
};
