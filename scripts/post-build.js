const fs = require('fs');
const path = require('path');

// Crear directorio si no existe
const distDir = path.join(__dirname, '..', 'dist', 'nodes', 'Vuela');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Copiar el archivo SVG
const source = path.join(__dirname, '..', 'nodes', 'Vuela', 'vuela.svg');
const dest = path.join(distDir, 'vuela.svg');

if (fs.existsSync(source)) {
    fs.copyFileSync(source, dest);
    console.log('✅ Logo copiado exitosamente');
} else {
    console.warn('⚠️  No se encontró el archivo vuela.svg');
}