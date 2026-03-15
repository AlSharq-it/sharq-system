
import React from 'react';

const DriverCard = ({ driverData }) => {
  if (!driverData) return null;

  return (
    <div style={{ 
      background: '#004d40', 
      color: '#d4af37', 
      padding: '20px', 
      borderRadius: '15px', 
      textAlign: 'center', 
      maxWidth: '300px', 
      margin: '20px auto', 
      border: '2px solid #d4af37',
      fontFamily: 'Cairo, sans-serif'
    }}>
      <h3 style={{ color: '#fff', marginBottom: '15px' }}>بطاقة كابتن شرق الرقمية</h3>
      
      <div style={{ background: '#fff', width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 10px auto', overflow: 'hidden' }}>
        <img src={driverData.licenseImageUrl} alt="الكابتن" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      
      <h4 style={{ margin: '5px 0', fontSize: '18px' }}>{driverData.name}</h4>
      <p style={{ margin: '5px 0', fontSize: '14px', color: '#fff' }}>السيارة: {driverData.carType}</p>
      <p style={{ margin: '5px 0', fontSize: '14px', color: '#fff' }}>رقم الجوال: {driverData.phone}</p>
      
      <div style={{ background: 'white', padding: '10px', marginTop: '15px', borderRadius: '5px', color: '#000', fontWeight: 'bold' }}>
        مسح للتأكد من الهوية (QR Code)
      </div>
    </div>
  );
};

export default DriverCard;
