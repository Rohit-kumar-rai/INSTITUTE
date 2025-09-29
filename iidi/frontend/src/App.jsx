import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import DataScience from './components/DataSciencePage/DataScience';         // Added

import Payment from './components/Payment/Payment';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import Qrcode from './components/Payment/Qrcode.jsx';
import UploadProof from './components/Payment/UploadProof.jsx';
import WhatsApp from './components/WhatsappIcon/Whatsapp.jsx';
import About from './components/About/About';
import emailjs from 'emailjs-com';
import Contact from './components/Contact/Contact.jsx';
import CourseHome from './components/CourseHome/CourseHome.jsx';
import InfluencerMarketing from './components/InfluencerMarketing/InfluencerMarketing.jsx';
import Marketing from './components/Marketing/Marketing.jsx';

function App() {

  const sendEmail = () => {
    emailjs.send(
      'service_a8udutf',
      'template_00qh1b1',
      { name: 'Diksha Tiwari', message: 'This is a test email!' },
      'V8UdzlCNIr0JaZWfs'
    )
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
      });
  };

  return (
    <Router>
      <AuthProvider>
        <Header />
        <WhatsApp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/datascience" element={<DataScience />} />
          
          <Route path="/payment" element={<Payment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/qrcode" element={<Qrcode />} />
          <Route path="/upload-proof" element={<UploadProof />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
           <Route path ="/marketing" element={<Marketing />}/>
           <Route path ="/influencer-marketing" element={<InfluencerMarketing />}/>
           <Route path ="/course" element={<CourseHome />}/>
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
