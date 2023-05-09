import { BlueColor, Container, Header, MenuButton, NavBar, SideBar } from './styles';
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'

export default function Navbar(){
    const [sidebar, setSidebar] = useState(false);
    const showSideBar = () => setSidebar(!sidebar)

    return(
        <Header>
            <Container>
                <Link href='/'>
                    <div>
                        <h1>
                        <BlueColor>M</BlueColor>
                        <span>atheus </span> 
                        <BlueColor>M</BlueColor>
                        <span>elo</span>
                        </h1>
                    </div>
                </Link>

                <NavBar>
                    <Link href='#home' scroll={false}>Home</Link>
                    <Link href='#about' scroll={false}>About</Link>
                    <Link href='#projects' scroll={false}>Projects</Link>
                    <Link href='#footer' scroll={false}>Contact</Link>
                </NavBar>

                <MenuButton>
                    <FaBars onClick={showSideBar}/>
                </MenuButton>
                
                {sidebar ?
                <SideBar>
                    <Link href="#home" scroll={false} onClick={showSideBar}><h1>Home</h1></Link>
                    <Link href="#about" scroll={false} onClick={showSideBar}><h1>About</h1></Link>
                    <Link href="#projects" scroll={false} onClick={showSideBar}><h1>Projects</h1></Link>
                    <Link href="#footer" scroll={false} onClick={showSideBar}><h1>Contact</h1></Link>                    
                </SideBar> : null}
            </Container>               
        </Header>       
    )
}