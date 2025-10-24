import React from 'react';
import "./index.css";

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#030014', 
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        textAlign: 'center', 
        marginBottom: '2rem',
        background: 'linear-gradient(45deg, #6366f1, #a855f7)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        ZoukhDev Portfolio
      </h1>
      
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        textAlign: 'center',
        lineHeight: '1.6'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Frontend Developer
        </h2>
        
        <p style={{ 
          fontSize: '1.2rem', 
          marginBottom: '2rem',
          color: '#ccc'
        }}>
          I'm a passionate web developer with expertise in modern technologies and a keen eye for design.
        </p>
        
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button style={{
            padding: '12px 24px',
            background: 'linear-gradient(45deg, #6366f1, #a855f7)',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            fontSize: '1rem',
            cursor: 'pointer'
          }}>
            Get In Touch
          </button>
          
          <button style={{
            padding: '12px 24px',
            background: 'transparent',
            border: '2px solid #6366f1',
            borderRadius: '8px',
            color: '#6366f1',
            fontSize: '1rem',
            cursor: 'pointer'
          }}>
            View My Work
          </button>
        </div>
        
        <div style={{ 
          marginTop: '3rem',
          padding: '2rem',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            About Me
          </h3>
          <p style={{ color: '#ccc' }}>
            I specialize in creating immersive, interactive experiences using modern web technologies. 
            My passion lies in building user-friendly applications that combine functionality with beautiful design.
          </p>
        </div>
        
        <div style={{ 
          marginTop: '2rem',
          padding: '1rem',
          color: '#999',
          fontSize: '0.9rem'
        }}>
          © 2025 ZoukhDev™. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default App;