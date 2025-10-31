#!/bin/bash

echo "🚀 Configurando herramientas de linting y CI/CD..."

# Verificar que git esté instalado
if ! command -v git &> /dev/null; then
    echo "❌ Git no está instalado. Instalando..."
    apt update && apt install -y git
fi

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Inicializar git si no existe
if [ ! -d ".git" ]; then
    echo "🔧 Inicializando repositorio git..."
    git init
    git config user.email "dev@example.com"
    git config user.name "Developer"
fi

# Configurar Husky
echo "🪝 Configurando Git hooks..."
npx husky init
echo "npx lint-staged" > .husky/pre-commit
echo "npm run build" >> .husky/pre-commit
echo "npx commitlint --edit \$1" > .husky/commit-msg
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg

# Ejecutar validación inicial
echo "✅ Ejecutando validación inicial..."
npm run validate

echo "🎉 ¡Configuración completada!"
echo ""
echo "📋 Scripts disponibles:"
echo "  npm run lint          - Ejecutar ESLint"
echo "  npm run lint:fix      - Ejecutar ESLint con auto-fix"
echo "  npm run format        - Formatear código con Prettier"
echo "  npm run format:check  - Verificar formato sin cambios"
echo "  npm run validate      - Ejecutar todas las validaciones"
echo ""
echo "⚠️  Nota: El comando 'npm run check' requiere instalar manualmente:"
echo "   npm install @astrojs/check typescript --save-dev"
echo ""
echo "🔧 Para configurar la protección de ramas:"
echo "  1. Ve a Settings > Branches en GitHub"
echo "  2. Añade reglas basadas en .github/branch-protection.yml"
echo ""
echo "📝 Formato de commits recomendado:"
echo "  feat: añadir nueva funcionalidad"
echo "  fix: corregir error en componente"
echo "  docs: actualizar documentación"
echo "  style: formatear código"