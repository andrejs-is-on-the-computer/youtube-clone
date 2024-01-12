import { useState } from "react";
import { CategoryPills } from "./components/CategoryPills";
import { categories, videos } from "./data/home";
import { PageHeader } from "./layouts/PageHeader";
import { Sidebar } from "./layouts/Sidebar";
import VideoGridItem from "./components/VideoGridItem";
import { SidebarProvider } from "./contexts/SidebarContext";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  return (
  <SidebarProvider>
    <div className="max-h-screen overflow-y-hidden min-height-full flex flex-col">

        {/* Navbar */}
        <PageHeader />
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">

          {/* Sidebar */}
          <Sidebar />

          {/* Video Item grid + Categories */}
          <div className="overflow-x-hidden pb-4">
            <div className="sticky top-0 bg-white px-2 sm:px-4 z-10 pb-4">
              <CategoryPills categories={categories} 
                selectedCategory={selectedCategory} 
                onSelect={setSelectedCategory} />
            </div>
            <div className="px-2 sm:px-4 grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {videos.map(video => (
                <VideoGridItem 
                  key={video.id}
                  {...video}
                />
              ))}
              
            </div>
          </div>
          

        </div>
    </div>
  </SidebarProvider>)
}