import Link from "next/link"
import { GitHub, Instagram, LinkedIn } from "../../assets/svgs"

export default function SocialIcons () {
    return (
        <>
            <Link href="https://github.com/matthmello" target='_blank'>
                <GitHub/> 
            </Link>
            <Link href="https://www.linkedin.com/in/matheus-carneiro-melo-784b4b240/" target='_blank'>
                <LinkedIn/>
            </Link>
            <Link href="https://www.instagram.com/matt_mello_/" target='_blank'>
                <Instagram/>
            </Link>
        </>
    )
}