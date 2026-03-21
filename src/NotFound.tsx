import { Link } from 'react-router';

function NotFound() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '100px 20px', 
      fontFamily: 'Archivo Black, sans-serif' 
    }}>
      <h1 style={{ fontSize: '72px', color: '#d20505' }}>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p style={{ color: '#666', marginTop: '20px' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        style={{ 
          display: 'inline-block', 
          marginTop: '30px', 
          padding: '10px 25px', 
          backgroundColor: '#080808', 
          color: '#fff', 
          textDecoration: 'none',
          borderRadius: '5px'
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;