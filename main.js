let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Apoyo con publicidad para redes sociales, ilustraciones, empaques para proyectos personalizados y mucho más.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
