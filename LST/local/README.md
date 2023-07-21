Addeco Assessment - Aplicación Next.js

Requisitos Previos Node.js (v15.16.1) y npm (v9.0.0) instalados en tu sistema. Una base de datos MongoDB en la que se puedan almacenar las credenciales de inicio de sesión. Instalación Clone este repositorio en su máquina local: bash

git clone https://github.com/8rch/Next.git Navegue al directorio del proyecto: bash

cd Next Instale las dependencias necesarias: bash

npm install Configuración copie el archivo .env.template y renómbrelo como .env: bash

cp .env.template .env Rellene las variables de entorno en el archivo .env con la configuración necesaria. Asegúrese de agregar la conexión a su base de datos MongoDB. 
Ejecución: para iniciar la aplicación en modo de desarrollo, ejecute el siguiente comando:

bash

npm run dev La aplicación estará disponible en http://localhost:3000.

Autenticación: Al acceder a la aplicación, será redirigido a la página de inicio de sesión. Puede utilizar diferentes métodos de inicio de sesión, como cuentas de GitHub, Facebook o Google, dependiendo de cómo haya configurado la autenticación.

Una vez iniciada la sesión, se realizará una validación de las credenciales proporcionadas, utilizando la base de datos MongoDB para verificar la autenticidad del usuario.

Drag and Drop: La funcionalidad de arrastrar y soltar está disponible en la página de tareas. Puede crear tareas simples y moverlas utilizando el drag and drop. Las tareas se pueden editar directamente desde el escritorio.

Pruebas de Control de Variables: Se han implementado pruebas para verificar la funcionalidad de las variables y para asegurarse de que los passwords no sean retornados en la aplicación.

Contribución: Si desea contribuir a este proyecto, por favor siga los siguientes pasos:

Cree un fork del repositorio y clónelo en su máquina local. Cree una nueva rama para su funcionalidad. Realice los cambios necesarios y haga commit de sus cambios. Envíe un pull request a la rama principal del repositorio. Licencia Explica la licencia del proyecto y los términos de uso.

Contacto: Si tiene preguntas o comentarios, por favor contácteme a través de bryanmoiseschamorro@gmail.com o puede llamarme directamente a mi número de contacto en Canadá: +1 (581) 349-7014.