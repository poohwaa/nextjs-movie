"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {

    const path = usePathname();
    console.log(`navigation ${path}`)
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href={"/"}>Home</Link>{path === "/" ? "☜(ﾟヮﾟ☜)" : ""}
                </li>
                <li>
                    <Link href={"/about-us"}>About us</Link>{path === "/about-us" ? "☜(ﾟヮﾟ☜)" : ""}
                </li>
            </ul>
        </nav>
    )
}