import React from 'react';
import './DriverCard.css';

const DriverCard = ({ driverData }) => {
  return (
    <div className="card-container">
      <div className="card-inner">
        {/* الوجه الأمامي للبطاقة */}
        <div className="card-front">
          <h2 style={{ color: '#d4af37' }}>كابتن شرق 🏆</h2>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#fff', marginBottom: '15px' }}>
             {/* صورة السائق */}
          </div>
          <h3 style={{ color: '#fff' }}>{driverData?.name || "اسم الكابتن"}</h3>
          <p style={{ color: '#d4af37' }}>{driverData?.carType || "نوع السيارة"}</p>
        </div>

        {/* الوجه الخلفي للبطاقة (بيانات إضافية و QR) */}
        <div className="card-back">
          <h3 style={{ color: '#004d40' }}>بيانات الوثيقة</h3>
          <p>رقم الجوال: {driverData?.phone}</p>
          <div style={{ background: '#fff', padding: '10px', borderRadius: '10px' }}>
            <p style={{ color: '#000', fontSize: '12px' }}>QR CODE للتحقق</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
