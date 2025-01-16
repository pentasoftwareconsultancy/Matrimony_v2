import { Routes, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Members from '../components/Members';
import UploadMember from '../components/UploadMember';
import CountryList from '../components/CountryList'
import StatesManagement from '../components/StatesManagement';
import CitiesManagement from '../components/CitiesManagement';
import UnapprovedPictures from '../components/UnapprovedPictures';
import ReligionForm from '../components/ReligionForm';
import CasteForm from '../components/CasteForm';
import SubCasteForm from '../components/SubCasteForm';
import OnBehalves from '../components/OnBehalves';
import FamilyValues from '../components/FamilyValues';
import MaritalStatus from '../components/MaritalStatus';
import ProfileSectionsConfig from '../components/ProfileSectionsConfig';
import Testimonial from '../components/Testimonial';
import RegistrationForm from '../components/RegistrationForm';
import Step from '../components/step/step';
import Blog from '../components/Blog';
import AddNewblog from '../components/AddNewblog';
import Brides from '../components/Brides';
import Grooms from '../components/Grooms';
import Notification from '../components/Notifications/Notifications'



const DashboardRoutes = () => {
  
  return (
    
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/membars" element={<Members />} />
      <Route path="/upload" element={<UploadMember />} />
      <Route path="/county" element={<CountryList/>} />
      <Route path="/start" element={<StatesManagement/>} />
      <Route path="/cities" element={<CitiesManagement/>} />
      <Route path="/unapproved" element={<UnapprovedPictures/>} />
      <Route path="/religion" element={<ReligionForm/>} />
      <Route path="/subcaste" element={<SubCasteForm/>} />
      <Route path="/onbehalves" element={<OnBehalves/>} />
      <Route path="/caste" element={<CasteForm/>} />
      <Route path="/family" element={<FamilyValues/>} />
      <Route path="/marital" element={<MaritalStatus/>} />
      <Route path="/profil" element={<ProfileSectionsConfig/>} />
      <Route path="/testimonal" element={<Testimonial/>} />
      <Route path='/RegistrationForm' element={<RegistrationForm/>}/>
      <Route path='/step' element={<Step/>}/>
      <Route path='/aadblog' element={<AddNewblog/>}/>
      <Route path='/birde' element={<Brides/>}/>
      <Route path='/groom' element={<Grooms/>}/>
      <Route path='/blog' element={<Blog/>}/>
      
      <Route path='/Notification' element={<Notification/>}/>
      
      






      {/* <Route path="/transactions" element={<Transactions />} /> */}
    </Routes>
  );
};

export default DashboardRoutes;
