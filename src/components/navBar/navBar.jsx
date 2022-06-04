import axios from "axios";
import { useRouter } from "next/router";
import { StyleLogo, StyleLogout, WrapperStyle } from "./navBar.styles";

export default function NavBar() {
    const router = useRouter()
   const handleLogout = async () => {
await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/logout`)
router.push("/")
   }
    return (
        <WrapperStyle>
            <StyleLogo># Social Dev</StyleLogo>
            <StyleLogout onClick={handleLogout}>Desconectar</StyleLogout>
        </WrapperStyle>
    )
}