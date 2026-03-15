import React, { useState } from 'react';

const colors = {
  royalGreen: '#004d40',
  desertGold: '#d4af37',
  skyBlue: '#87CEEB',
  white: '#ffffff'
};

function App() {
  const [role, setRole] = useState('landing');

  return (
    <div style={{ backgroundColor: '#f4f4f9', minHeight: '100vh', fontFamily: 'Cairo, sans-serif' }}>
      <header style={{ backgroundColor: colors.royalGreen, color: colors.desertGold, padding: '20px', textAlign: 'center' }}>
        <h1>إمبراطورية الشرق الرقمية 🏆</h1>
      </header>

      <main style={{ padding: '30px', textAlign: 'center' }}>
        {role === 'landing' && (
          <div>
            <h2 style={{ color: colors.royalGreen }}>مرحباً بك يا مدير 👑</h2>
            <button onClick={() => setRole('admin')} style={btnStyle(colors.royalGreen)}>لوحة الإدارة</button>
            <button onClick={() => setRole('driver')} style={btnStyle(colors.desertGold)}>بطاقة السائق</button>
          </div>
        )}
        {role !== 'landing' && (
          <button onClick={() => setRole('landing')} style={{marginTop: '20px'}}>العودة للرئيسية</button>
        )}
      </main>
    </div>
  );
}

const btnStyle = (bg) => ({ backgroundColor: bg, color: '#fff', padding: '15px', margin: '10px', border: 'none', borderRadius: '10px', cursor: 'pointer' });

export default App;
