import React from 'react';
import { useState } from 'react';
import CustomizeTeams1 from './CustomizeTeams1'
import CustomizeTeam2 from './CustomizeTeam2'
function CustomizeTeams()
{
    const [isPopupOpen, setIsPopupOpen] = useState(true);
    const open=isPopupOpen ? <CustomizeTeams1/>:<CustomizeTeam2/>;
    return(
        <div>
            {open}
        </div>
    );
}
export default CustomizeTeams;