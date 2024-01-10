import { Menu } from 'lucide-react';
import logo from '../assets/metoobe.png'
import { Button } from '../components/Button';

export function PageHeader() {
    return <div className="flex gap-10 lg:gap-20 justify-between">
        {/* Logo and Hamburger Button */}
        <div className="flex gap-4 items-center flex-shrink-0">
            <Button variant="ghost" size="icon" className='m-10'>
                <Menu />
            </Button>
            <a href="/">
                <img src={logo} className='h-8' alt="metoob logo" />
            </a>
        </div>
        {/* Searchbar and Microphone */}
        <div></div>
        {/* Notifications and Profile */}
        <div></div>
    </div>;
}