export default function Logo({ className = '', variant = 'dark', style = {} }) {
  // Configuración de colores según la variante
  // dark: verde bosque para texto y líneas, dorado para las estrellas
  // light: crema/blanco para texto y líneas, dorado para las estrellas
  const textColor = variant === 'light' ? 'var(--cream)' : 'var(--forest)'
  const starColor = 'var(--gold)'
  const pineFrontColor = '#2E5A44' // Verde medio/oscuro realista de la foto
  const pineBackColor = '#8EAF9D'  // Verde claro desaturado de la foto

  return (
    <svg 
      viewBox="0 0 250 82" 
      className={className} 
      style={{ display: 'block', width: '100%', height: 'auto', ...style }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 3 Estrellas sobre "Golf" */}
      <g fill={starColor}>
        {/* Estrella 1 */}
        <polygon points="144.5,12 146,15.5 149.5,15.5 146.5,17.5 147.5,21 144.5,19 141.5,21 142.5,17.5 139.5,15.5 143,15.5" />
        {/* Estrella 2 */}
        <polygon points="156.5,10 158,13.5 161.5,13.5 158.5,15.5 159.5,19 156.5,17 153.5,19 154.5,15.5 151.5,13.5 155,13.5" />
        {/* Estrella 3 */}
        <polygon points="168.5,12 170,15.5 173.5,15.5 170.5,17.5 171.5,21 168.5,19 165.5,21 166.5,17.5 163.5,15.5 167,15.5" />
      </g>

      {/* Texto Principal "Pinar Golf" */}
      <text 
        x="10" 
        y="46" 
        fontFamily="var(--heading)" 
        fontSize="35" 
        fontWeight="600" 
        fill={textColor}
        letterSpacing="-0.01em"
      >
        Pinar Golf
      </text>

      {/* Pino de atrás (verde claro) */}
      <g transform="translate(216, 17) scale(0.9)" opacity="0.85">
        {/* Tronco */}
        <rect x="-1.5" y="16" width="3" height="5" fill="#4A3B32" />
        {/* Hojas */}
        <path 
          d="M0,-14 C2,-14 4.5,-10.5 5.5,-8 C6.5,-5.5 5.5,-5.5 4,-5.5 C6,-2 8.5,1.5 9.5,4 C10,6.5 8,6.5 6,6.5 C8.5,10 11,14 11.5,16 C11.5,18.5 7,18.5 0,18.5 C-7,18.5 -11.5,18.5 -11.5,16 C-11,14 -8.5,10 -6,6.5 C-8,6.5 -10,6.5 -9.5,4 C-8.5,1.5 -6,-2 -4,-5.5 C-5.5,-5.5 -6.5,-5.5 -5.5,-8 C-4.5,-10.5 -2,-14 0,-14 Z" 
          fill={pineBackColor} 
        />
      </g>

      {/* Pino de adelante (verde oscuro) */}
      <g transform="translate(202, 23) scale(1.1)">
        {/* Tronco */}
        <rect x="-1.5" y="16" width="3" height="5" fill="#3D3028" />
        {/* Hojas */}
        <path 
          d="M0,-14 C2,-14 4.5,-10.5 5.5,-8 C6.5,-5.5 5.5,-5.5 4,-5.5 C6,-2 8.5,1.5 9.5,4 C10,6.5 8,6.5 6,6.5 C8.5,10 11,14 11.5,16 C11.5,18.5 7,18.5 0,18.5 C-7,18.5 -11.5,18.5 -11.5,16 C-11,14 -8.5,10 -6,6.5 C-8,6.5 -10,6.5 -9.5,4 C-8.5,1.5 -6,-2 -4,-5.5 C-5.5,-5.5 -6.5,-5.5 -5.5,-8 C-4.5,-10.5 -2,-14 0,-14 Z" 
          fill={pineFrontColor} 
          stroke={textColor}
          strokeWidth="0.6"
        />
      </g>

      {/* Línea curva (loma de base) */}
      <path 
        d="M 10,54 Q 105,58 226,49" 
        fill="none" 
        stroke={textColor} 
        strokeWidth="1.2" 
        strokeLinecap="round"
      />

      {/* Texto "sierra" */}
      <text 
        x="184" 
        y="62" 
        fontFamily="var(--body)" 
        fontSize="11" 
        letterSpacing="0.16em" 
        fontWeight="500"
        fill={textColor}
      >
        sierra
      </text>
    </svg>
  )
}
