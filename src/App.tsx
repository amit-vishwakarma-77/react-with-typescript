import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserForm from './forms/form';
import SignUpForm from './forms/signUpForm';
import LoginForm from './forms/loginForm';
import Dashboard from './dashboard/dashboard';
import Contacts from './dashboard/contacts';
import CampaignsList from './dashboard/campaigns/campaignsList';
import Templates from './templates/template';
import SendEmail from './dashboard/send-emails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserForm />}>
            <Route path='signup' element={<SignUpForm />} />
            <Route path='login' element={<LoginForm />} />
          </Route>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='campaigns' element={<CampaignsList />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='templates' element={<Templates />} />
            <Route path='send-email' element={<SendEmail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
