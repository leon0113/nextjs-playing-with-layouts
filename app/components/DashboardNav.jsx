'use client'
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

const navLinks = [
    {
        label: "Settings",
        path: "/dashboard/settings"
    },
    {
        label: "Log In",
        path: "/dashboard/login"
    },
    {
        label: "Log Out",
        path: "/dashboard/logout"
    }
]

const navStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '50px',
    width: '100vw',
    borderBottom: '0.5px solid gray'
}

export default function DashboardNav() {
    const pathName = usePathname();
    const router = useRouter();
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
                <button onClick={() => router.push('/')}>Go to Home</button>
            </ul>
        </nav>
    )
}
