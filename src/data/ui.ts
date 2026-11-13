// Textos de interfaz y datos del héroe. Los textos de contenido (proyectos, experiencia...) están en content.ts.

export const ui = {
  es: { cv: 'Descargar CV', mail: 'Escribirme', shot: 'Captura', plate: 'Esquema', open: 'Ampliar' },
  en: { cv: 'Download CV', mail: 'Email me', shot: 'Screenshot', plate: 'Diagram', open: 'Enlarge' },
};

// Bloque de capacidades: [etiqueta, clave de simple-icons ('' = solo texto, 'db' = icono de base de datos)]
type Cap = readonly [string, readonly (readonly [string, string])[]];
export const caps: Record<'es' | 'en', readonly Cap[]> = {
  es: [
    ['Lenguajes', [['TypeScript', 'Typescript'], ['JavaScript', 'Javascript'], ['Java', 'Openjdk'], ['Dart', 'Dart'], ['Python', 'Python']]],
    ['Backend', [['NestJS', 'Nestjs'], ['Node.js', 'Nodedotjs'], ['CQRS', ''], ['REST', ''], ['Microservicios', '']]],
    ['Web y móvil', [['React', 'React'], ['Next.js', 'Nextdotjs'], ['React Native', 'Expo'], ['Flutter', 'Flutter'], ['Angular', 'Angular']]],
    ['Datos', [['PostgreSQL', 'Postgresql'], ['Redis', 'Redis'], ['Oracle', 'db'], ['SQL Server', 'db'], ['Power BI', 'bars']]],
  ],
  en: [
    ['Languages', [['TypeScript', 'Typescript'], ['JavaScript', 'Javascript'], ['Java', 'Openjdk'], ['Dart', 'Dart'], ['Python', 'Python']]],
    ['Backend', [['NestJS', 'Nestjs'], ['Node.js', 'Nodedotjs'], ['CQRS', ''], ['REST', ''], ['Microservices', '']]],
    ['Web & mobile', [['React', 'React'], ['Next.js', 'Nextdotjs'], ['React Native', 'Expo'], ['Flutter', 'Flutter'], ['Angular', 'Angular']]],
    ['Data', [['PostgreSQL', 'Postgresql'], ['Redis', 'Redis'], ['Oracle', 'db'], ['SQL Server', 'db'], ['Power BI', 'bars']]],
  ],
};

// Terminal del héroe: cada comando imprime un resumen
export const term = {
  es: {
    cmds: ['whoami', 'stack', 'experiencia', 'contacto'],
    out: [
      'Jordi Cahuasqui\nIngeniero de Software · UTN\nBackend con NestJS y CQRS\nApps con React Native y Flutter\nOtavalo, Ecuador',
      'lenguajes  TypeScript JavaScript Java Dart Python\nbackend    NestJS Node.js CQRS REST\nmóvil      React Native Flutter\ndatos      PostgreSQL Redis Oracle SQL Server',
      '2026  ITS Utransfer · Full Stack\n      KYC (Trulioo), pagos VISA, CQRS\n2024  UTN Móvil · módulo Eventos\n2024  UTN · análisis de datos (Power BI)',
      'correo    jordi.cahuas20@gmail.com\ngithub    github.com/Jordi7-7\nlinkedin  linkedin.com/in/jordi-cahuasqui',
    ],
    hint: 'Pulsa un comando',
  },
  en: {
    cmds: ['whoami', 'stack', 'experience', 'contact'],
    out: [
      'Jordi Cahuasqui\nSoftware Engineer · UTN\nBackend with NestJS and CQRS\nApps with React Native and Flutter\nOtavalo, Ecuador',
      'languages  TypeScript JavaScript Java Dart Python\nbackend    NestJS Node.js CQRS REST\nmobile     React Native Flutter\ndata       PostgreSQL Redis Oracle SQL Server',
      '2026  ITS Utransfer · Full Stack\n      KYC (Trulioo), VISA payments, CQRS\n2024  UTN Móvil · Events module\n2024  UTN · data analysis (Power BI)',
      'email     jordi.cahuas20@gmail.com\ngithub    github.com/Jordi7-7\nlinkedin  linkedin.com/in/jordi-cahuasqui',
    ],
    hint: 'Press a command',
  },
};
