import React from 'react';
import DriverRegister from './pages/driver/DriverRegister';

function App() {
  return (
    <div style={{ backgroundColor: '#f4f4f9', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: '500px' }}>
        <DriverRegister />
      </div>
    </div>
  );
}

export default App;
