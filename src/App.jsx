import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoute from './components/AppRoute';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-body text-gray-800 bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <AppRoute />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
