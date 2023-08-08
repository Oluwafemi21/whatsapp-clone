export default function () {
    let url =
        process.env.NUXT_ENV_VERCEL_ENV ?? // Set this to your site URL in production env.
        process.env.NUXT_ENV_VERCEL_URL ?? // Automatically set by Vercel.
        "http://localhost:3000/chat/";
    // Make sure to include `https://` when not localhost.
    url = url.includes("http") ? url : `https://${url}`;
    // Make sure to include a trailing `/`.
    url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
    return url;
}
