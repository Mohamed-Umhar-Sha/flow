import profilImage from '../assests/ProfilCard.png'
import Card from './CumstomizeCard';
function CustomizeTeams()
{
  const data=[{name:'wasim',password:12345,image:profilImage},{name:'wasim',password:12345,image:profilImage},{name:'wasim',password:12345,image:profilImage}
 ,{name:'wasim',password:12345,image:profilImage} ];
return(
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
     {data.map((user,index)=> <Card key={index}
        title={user.name}
        description={user.password}
        imageUrl={user.image}
      />) }
    </div>
);
}
export default CustomizeTeams;