Addeco Assessment - Aplicación Next.js


Requisitos Previos
Node.js (v15.16.1) y npm (v9.0.0) instalados en tu sistema.
Una base de datos MongoDB en la que se puedan almacenar las credenciales de inicio de sesión.
Instalación
Clona este repositorio en tu máquina local:
bash

git clone https://github.com/8rch/Next.git
Navega al directorio del proyecto:
bash

cd Next
Instala las dependencias necesarias:
bash

npm install
Configuración
Copia el archivo .env.template y renómbralo como .env:
bash

cp .env.template .env
Rellena las variables de entorno en el archivo .env con la configuración necesaria. Asegúrate de agregar la conexión a tu base de datos MongoDB.
Ejecución
Para iniciar la aplicación en modo de desarrollo, ejecuta el siguiente comando:

bash

npm run dev
La aplicación estará disponible en http://localhost:3000.

Autenticación
Al acceder a la aplicación, serás redirigido a la página de inicio de sesión. Puedes utilizar diferentes métodos de inicio de sesión, como cuentas de GitHub, Facebook o Google, dependiendo de cómo hayas configurado la autenticación.

Una vez iniciada la sesión, se realizará una validación de las credenciales proporcionadas, utilizando la base de datos MongoDB para verificar la autenticidad del usuario.

Drag and Drop
La funcionalidad de arrastrar y soltar está disponible en la página de tareas. Puedes crear tareas simples y moverlas utilizando el drag and drop. Las tareas se pueden editar directamente desde el escritorio.

Pruebas de Control de Variables
Se han implementado pruebas para verificar la funcionalidad de las variables y para asegurarse de que los passwords no sean retornados en la aplicación.

Contribución
Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

Crea un fork del repositorio y clónalo en tu máquina local.
Crea una nueva rama para tu funcionalidad o corrección de errores.
Realiza los cambios necesarios y haz commit de tus cambios.
Envía un pull request a la rama principal del repositorio.
Licencia
Explica la licencia del proyecto y los términos de uso.

Contacto
Si tienes preguntas o comentarios, por favor contáctame a través de bryanmoiseschamorro@gmail.com o puedes llamarme directamente a mi número de contacto en Canadá: +1 (581) 349-7014.

Espero que este README te ayude a tener una mejor comprensión de cómo correr y contribuir a tu proyecto de Next.js. No dudes en personalizarlo según las necesidades específicas de tu proyecto. ¡Buena suerte con tu aplicación y desarrollo!