import React, { useState, useEffect } from 'react';
// هنا سنقوم باستيراد الصفحات لاحقاً
// import AdminDashboard from './pages/admin/Dashboard';
// import DriverCard from './pages/driver/DriverCard';

function App() {
  const [userRole, setUserRole] = useState('guest'); // roles: admin, driver, client, supervisor

  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', fontFamily: 'Cairo, sans-serif' }}>
      {/* شريط علوي بسيط للهوية */}
      <header style={{ backgroundColor: '#004d40', color: '#d4af37', padding: '15px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
        <h1>إمبراطورية الشرق الرقمية 🏆</h1>
      </header>

      <main style={{ padding: '20px' }}>
        {userRole === 'guest' && (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2 style={{ color: '#004d40' }}>مرحباً بك في منصة شرق اللوجستية</h2>
            <p>يرجى اختيار نوع الدخول للمعاينة (مؤقتاً):</p>
            <button onClick={() => setUserRole('admin')} style={btnStyle}>لوحة الإدارة</button>
            <button onClick={() => setUserRole('driver')} style={btnStyle}>بطاقة السائق</button>
            <button onClick={() => setUserRole('client')} style={btnStyle}>طلب عميل</button>
          </div>
        )}

        {userRole === 'admin' && <div>{/* كود لوحة الإدارة سيتم وضعه هنا */} <h2>لوحة التحكم الملكية 👑</h2> </div>}
        {userRole === 'driver' && <div>{/* كود البطاقة الرقمية سيتم وضعه هنا */} <h2>بطاقتك الرقمية 🪪</h2> </div>}
      </main>
    </div>
  );
}

const btnStyle = {
  padding: '12px 25px',
  margin: '10px',
  backgroundColor: '#d4af37',
  color: '#004d40',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

export default App;
