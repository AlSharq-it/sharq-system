.card-container {
  perspective: 1000px; /* يعطي عمق للحركة الثلاثية الأبعاد */
  width: 320px;
  height: 480px;
  margin: 20px auto;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.card-container:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
  border: 2px solid #d4af37;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* تأثير الزجاج الشفاف */
  background: rgba(0, 77, 64, 0.9);
  backdrop-filter: blur(10px);
}

.card-back {
  transform: rotateY(180deg);
  background: rgba(212, 175, 55, 0.1);
}
