module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // Nueva funcionalidad
        'fix', // Corrección de errores
        'docs', // Documentación
        'style', // Formateo, punto y coma faltante, etc.
        'refactor', // Refactorización de código
        'perf', // Mejoras de rendimiento
        'test', // Añadir pruebas
        'chore', // Tareas de mantenimiento
        'ci', // Cambios en CI/CD
        'build', // Cambios en build system
        'revert', // Revertir commits
      ],
    ],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
  },
};
