import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
    useEffect(() => {
        // Inisialisasi Typed.js
        const options = {
          strings: ['Designer', 'Front Ent Developer', 'Freelancer', 'Videographer'],
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
          loop: true,
        };
    
        const typed = new Typed('#typed-output', options);
    
        // Membersihkan instance Typed.js pada unmount komponen
        return () => {
          typed.destroy();
        };
      }, []);
    
      return <span id="typed-output"></span>;
}

export default TypedText