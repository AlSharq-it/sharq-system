import React, { useState } from 'react';

// تنسيق الألوان الملكية لنظام الشرق
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
      {/* الهيدر الرئيسي */}
      <header style={{ backgroundColor: colors.royalGreen, color: colors.desertGold, padding: '20px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
        <h1 style={{ margin: 0, fontSize: '28px' }}>إمبراطورية الشرق الرقمية 🏆</h1>
        <p style={{ color: colors.white, margin: '5px 0 0' }}>نظام الخدمات اللوجستية السيادي</p>
      </header>

      <main style={{ padding: '30px', maxWidth: '800px', margin: '0 auto' }}>
        {role === 'landing' && (
          <div style={{ textAlign: 'center', background: colors.white, padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: colors.royalGreen }}>مرحباً بك يا مدير 👑</h2>
            <p>اختر لوحة التحكم التي ترغب في معاينتها الآن:</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '30px' }}>
              <button onClick={() => setRole('admin')} style={buttonStyle(colors.royalGreen)}>لوحة الإدارة (Admin)</button>
              <button onClick={() => setRole('driver')} style={buttonStyle(colors.desertGold)}>بطاقة السائق (Driver)</button>
              <button onClick={() => setRole('client')} style={buttonStyle(colors.skyBlue)}>طلب عميل (Client)</button>
              <button onClick={() => setRole('landing')} style={buttonStyle('#666')}>الرئيسية</button>
            </div>
          </div>
        )}

        {/* عرض المحتوى بناءً على الدور المختار */}
        {role === 'admin' && <Section title="لوحة الإدارة الذكية" color={colors.royalGreen} description="هنا يمكنك فرز الطلبات تلقائياً ومراقبة أسطولك بالذكاء الاصطناعي." />}
        {role === 'driver' && <Section title="البطاقة الرقمية للسائق" color={colors.desertGold} description="تصميم ثلاثي الأبعاد يحتوي على بياناتك، رتبتك، وزر واتساب مباشر." />}
        {role === 'client' && <Section title="نظام طلبات العملاء" color={colors.skyBlue} description="نموذج متقدم لتقديم الطلبات مع ميزة التوقيع الإلكتروني." />}
      </main>
    </div>
  );
}

// مكون فرعي لعرض الأقسام
const Section = ({ title, color, description }) => (
  <div style={{ background: '#fff', padding: '30px', borderRadius: '15px', borderTop: `10px solid ${color}`, textAlign: 'center', animation: 'fadeIn 0.5s' }}>
    <h2 style={{ color: color }}>{title}</h2>
    <p style={{ fontSize: '18px', color: '#444' }}>{description}</p>
    <button onClick={() => window.location.reload()} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>العودة للرئيسية</button>
  </div>
);

// ستايل الأزرار
const buttonStyle = (bgColor) => ({
  backgroundColor: bgColor,
  color: bgColor === '#d4af37' ? '#000' : '#fff',
  padding: '15px',
  border: 'none',
  borderRadius: '12px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
});

export default App;
