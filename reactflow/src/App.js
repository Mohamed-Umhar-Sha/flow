import './App.css';
import { useState } from 'react';
import Sidebar from './views/Sidebar';
import { FaCartShopping } from "react-icons/fa6";
//menu icons
import { RxDashboard } from "react-icons/rx";
import { TbShoppingCartHeart } from "react-icons/tb";
import { MdLeaderboard } from "react-icons/md";
import { MdGroups3 } from "react-icons/md";
import { CgTemplate } from "react-icons/cg";
import { MdOutlineCampaign } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";
import { MdAssignmentInd } from "react-icons/md";
import { SiFastapi } from "react-icons/si";
import { RiChatPollLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";
import { TbReportAnalytics } from "react-icons/tb";
import BreadCrumbs from './views/BreadCrumbs';
import { Routes, Route } from 'react-router-dom';
import RestAPI from './Components/RestAPI';
import Orders from './Components/Orders';
import Groups from './Components/Groups';
import Contacts from './Components/Contacts';
import Campaigns from './Components/Campaigns';
import AssignAgent from './Components/AssignAgent';
import ChatInbox from './Components/ChatInbox';
import CrmLeads from './Components/CrmLeads';
import Templates from './Components/Templates';
import KeywordAutomation from './Components/KeywordAutomation';
import DashBoard from './Components/DashBoard';
import Reports from './Components/Reports';
import GenerateLicense from './Components/GenerateLicense';
import { RiAiGenerate } from "react-icons/ri";
import { PiMicrosoftTeamsLogoBold } from "react-icons/pi";
import { MdConnectWithoutContact } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import ConnectAccount from './Components/Connect_account';
import CustomizeTeams from './Components/CustomizeTeams';

function App() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const shouldShowBreadcrumbs = !location.pathname.includes("team-inbox") && !location.pathname.includes("keyword-automation");

  const data = [
    // Your data array here...
  ];

  const menus = [
    { id: 1, title: "MENU", name: "Dashboard", link: '/dashboard', icon: RxDashboard, nav: "/dashboard", active: true },
    { id: 2, title: "MENU", name: 'Reports', link: '/reports', icon: TbReportAnalytics, nav: '/reports', margin: true },
    { id: 3, title: "ONBOARD CLIENTS", name: "REST API", link: '/rest-api', icon: SiFastapi, nav: "/rest-api" },
    { id: 4, title: "ONBOARD CLIENTS", name: "Generate License", link: '/generate-license', icon: RiAiGenerate, nav: "/generate-license", margin: true },
    { id: 7, title: "WHATS COMMERCE", name: "Commerce Settings", link: '/commerce-settings', icon: FaCartShopping, nav: "/commerce-settings" },
    { id: 9, title: "TEAM MANAGEMENT", name: "Customize Teams", link: '/customize-teams', icon: PiMicrosoftTeamsLogoBold, nav: "/customize-teams" },
    { id: 10, title: "TEAM MANAGEMENT", name: "Team Inbox", link: '/team-inbox', icon: RiChatPollLine, nav: "/team-inbox", margin: true },
    { id: 11, title: "CONTACT MANAGEMENT", name: "Contacts", link: '/contacts', icon: TiContacts, nav: "/contacts" },
    { id: 12, title: "CONTACT MANAGEMENT", name: "Groups", link: '/groups', icon: MdGroups3, nav: "/groups", margin: true },
    { id: 13, title: "TEMPLATES AND CAMPAIGNS", name: "Templates", link: '/templates', icon: CgTemplate, nav: "/templates" },
    { id: 14, title: "TEMPLATES AND CAMPAIGNS", name: "Campaigns", link: '/campaigns', icon: MdOutlineCampaign, nav: "/campaigns", margin: true },
    { id: 15, title: "CHATFLOW AUTOMATION", name: "Keyword Automation", link: '/keyword-automation', icon: RiRobot2Line, nav: "/keyword-automation", margin: true },
    { id: 16, title: "WECRM INTEGRATION", name: "CRM Leads", link: '/crm-leads', icon: MdLeaderboard, nav: "/crm-leads" },
    { id: 17, title: "WECRM INTEGRATION", name: "Assign Agent", link: '/assign-agent', icon: MdAssignmentInd, nav: "/assign-agent", margin: true },
  ];

  return (
    <div className={`${open ? 'bg-[--primary]' : 'bg-[--third]'}`}>
      <div className='App h-screen'>
        <Sidebar setOpen={setOpen} open={open} menus={menus} />
        <main className={`my-4 mr-4 bg-[#f0f1f2] rounded-[15px] content w-full overflow-y-auto custom-scrollbar`}>
         
          <div className=''>
            <Routes>
              <Route path='/dashboard' element={<DashBoard open={open} data={data} />} />
              <Route path='/reports' element={<Reports open={open} data={data} />} />
              <Route path='/rest-api' element={<RestAPI />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/connect-account' element={<ConnectAccount />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/groups' element={<Groups />} />
              <Route path='/crm-leads' element={<CrmLeads />} />
              <Route path='/generate-license' element={<GenerateLicense open={open} />} />
              <Route path='/templates' element={<Templates />} />
              <Route path='/campaigns' element={<Campaigns />} />
              <Route path='/keyword-automation' element={<KeywordAutomation />} />
              <Route path='/assign-agent' element={<AssignAgent open={open} />} />
              <Route path='/team-inbox' element={<ChatInbox />} />
              <Route path='/customize-teams' element={<CustomizeTeams />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
