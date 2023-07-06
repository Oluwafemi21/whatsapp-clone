import { useUserStore } from "~~/store/user";

export default function () {
    const auth = useUserStore();
    return auth.user ? true : false;
}
