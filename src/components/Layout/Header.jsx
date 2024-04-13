import './style.css'
export default function Header() {
    const token = sessionStorage.getItem("access_token");
    const logout = () => {
        sessionStorage.removeItem("access_token")
    }
    return (
        <>
        </>
    );
}