'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
    {
        label: "Home",
        path: "/"
    },
    {
        label: "Dashboard",
        path: "/dashboard/settings"
    },
    {
        label: "About",
        path: "/about"
    },
    {
        label: "Contact",
        path: "/contact"
    },
    {
        label: "Profile",
        path: "/profile"
    },
]

const navStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '50px',
    width: '100vw',
    borderBottom: '0.5px solid gray'
}

export default function Navbar() {
    const pathName = usePathname();
    return (
        <nav>
            <ul style={navStyles}>
                {
                    navLinks.map(({ label, path }) => (
                        <Link key={label} href={path} style={{ color: path === pathName ? 'green' : null }}>
                            {label}
                        </Link>
                    ))
                }
            </ul>
        </nav>
    )
}
