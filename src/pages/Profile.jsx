import React from 'react';

const Profile = () => {
  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h2>Perfil de Usuario</h2>
        <p className="mt-3">Email: usuario@example.com</p>
        <button 
          className="btn btn-danger mt-3"
          onClick={() => console.log('Cerrar sesión')}
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Profile; 