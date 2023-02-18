import type { Config } from "tailwindcss";
export default <Partial<Config>>{
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/forms")({
            strategy: "base",
        }),
    ],
};
