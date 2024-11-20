import { useState } from 'react'
import './App.css'
import { Landing } from './pages/landing'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateProfile2 from './pages/CreateProfile2';
import CreateProfile1 from './pages/CreateProfile1';
import Tour1 from './pages/Tour1';
import Tour2 from './pages/Tour2';
import Tour3 from './pages/Tour3';
import Tour4 from './pages/Tour4';
import OrderCreated from './pages/OrderCreated';
import PaymentSuccess from './pages/PaymentSuccess';
import Accept from './pages/Accept';
import OnDelivery from './pages/OnDelivery';
import OrderDelivered from './pages/OrderDelivered';
import Inbox from './pages/Inbox';
import EmailDetails from './components/EmailDetails';
import Sent from './pages/Sent';
import Draft from './pages/Draft';
import ProfileSettings from './pages/ProfileSettings';
import ProfilePassword from './pages/ProfilePassword';
import ProfileNotification from './pages/ProfileNotification';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/createProfile1' element={<CreateProfile1/>} />
          <Route path='/createProfile2' element={<CreateProfile2/>} />
          <Route path='/tour1' element={<Tour1/>} />
          <Route path='/tour2' element={<Tour2/>} />
          <Route path='/tour3' element={<Tour3/>} />
          <Route path='/tour4' element={<Tour4/>} />
          <Route path='/accept' element={<Accept/>} />
          <Route path='/order-created' element={<OrderCreated/>} />
          <Route path='/payment-success' element={<PaymentSuccess/>} />
          <Route path='/on-delivery' element={<OnDelivery/>} />
          <Route path='/order-delivered' element={<OrderDelivered/>} />
          <Route path='/inbox' element={<Inbox/>} />
          <Route path='/sent' element={<Sent/>} />
          <Route path='/draft' element={<Draft/>} />
          <Route path="/email/:id" element={<EmailDetails />} />
          <Route path="/settings/profile" element={<ProfileSettings />} />
          <Route path="/settings/password" element={<ProfilePassword />} />
          <Route path="/settings/notification" element={<ProfileNotification />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
