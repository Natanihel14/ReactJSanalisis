import React, { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [genero, setGenero] = useState('');
  const [paisResidencia, setPaisResidencia] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes implementar la lógica para enviar el formulario
    console.log('Datos del formulario:', { nombre, email, fechaNacimiento, genero, paisResidencia });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Contraseña:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <label>
        Confirmar Contraseña:
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>

      <label>
        Fecha de Nacimiento:
        <input
          type="date"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
          required
        />
      </label>

      <label>
        Género:
        <select value={genero} onChange={(e) => setGenero(e.target.value)} required>
          <option value="">Seleccionar Género</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select>
      </label>

      <label>
        País de Residencia:
        <select value={paisResidencia} onChange={(e) => setPaisResidencia(e.target.value)} required>
          <option value="">Seleccionar País</option>
          <option value="Argentina">Argentina</option>
          <option value="Chile">Chile</option>
          <option value="España">España</option>
          <option value="España">Guatemala</option>
          {/* Agrega más países según sea necesario */}
        </select>
      </label>

      <label className="checkboxContainer">
  <input
    type="checkbox"
    checked={aceptaTerminos}
    onChange={(e) => setAceptaTerminos(e.target.checked)}
    required
    className="checkboxInput"
  />
  <span className="checkboxLabel">Acepto los términos y condiciones</span>
</label>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;