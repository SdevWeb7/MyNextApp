import Link from "next/link";
import {LoginLink, LogoutLink, RegisterLink} from "@kinde-oss/kinde-auth-nextjs/components";

export const Header = () => {


    return <header className={'header'}>

            <nav className="navbar">

                <Link href={'/'}>Home</Link>

                <Link href={'/admin'}>Admin</Link>

            </nav>


            <nav className="profil">
                <LoginLink>Sign in</LoginLink>
                <RegisterLink>Sign up</RegisterLink>
                <LogoutLink>sign out</LogoutLink>

            </nav>
        </header>;
}