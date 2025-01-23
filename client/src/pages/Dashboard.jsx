import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
export default function Dashboard() {
  const location = useLocation();
  // console.log(location)
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");

    if (tabFromUrl) {
      setTab(tabFromUrl);
    }

  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <DashSidebar />

      {/* Profile */}
      { tab === 'profile' && <DashProfile />}


     {/* Posts */}
     { tab === 'posts' && <DashPosts />}

     { /* users */ }
      {tab === 'users' && <DashUsers />}

    </div>
  )
}
