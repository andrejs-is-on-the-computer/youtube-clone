import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo_sm from "../assets/metoobe_small.png"
import logo_lg from "../assets/metoobe_large.png"
import { Button } from "../components/Button";
import { useState } from "react";
import { useSidebarContext } from "../contexts/SidebarContext";

export function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-3 sm:mb-6 mx-1 sm:mx-4">
      {/* Logo and Hamburger Button */}
      <PageHeaderFirstSection hidden={showFullWidthSearch} />
      {/* Searchbar and Microphone */}
      <form
        className={`gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        
        {showFullWidthSearch && (<Button onClick={() => setShowFullWidthSearch(false)} type="button" size="icon" variant="ghost" className="flex-shrink-0">
          <ArrowLeft />
        </Button>)}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary 
                        py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border border-secondary-border border-l-0 flex-shrink-0">
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>
      {/* Notifications and Profile */}
      <div
        className={`flex flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Button>
        {/* <Button size="icon" variant="ghost" className="hidden xs:block"> */}
        <Button size="icon" variant="ghost" className="sm:flex hidden">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
}

type PageHeaderFirstSectionProps = {
  hidden?: boolean
}

export function PageHeaderFirstSection({ hidden = false }: PageHeaderFirstSectionProps) {
  const { toggle } = useSidebarContext();
  return (      <div
    className={`flex gap-4 items-center flex-shrink-0 xs:flex-shrink ${
      hidden ? "hidden" : "flex"
    }`}
  >
    {/* px-2 sm:px-4 */}
    <Button onClick={toggle} variant="ghost" size="icon" className="sm:p-2.5 px-1">
      <Menu />
    </Button>
    <a className="flex-shrink-0" href="/">
      {/* Large Icon */}
      <div className="lg:flex hidden">
        <img src={logo_lg} className="h-8" alt="metoobe logo large" />
      </div>

      {/* Small Icon */}
      <div className="flex lg:hidden">
        <img src={logo_sm} className="h-8" alt="metoobe logo small" />
      </div>
      
    </a>
  </div>);
}