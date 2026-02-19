# Guía de Contribución - DsDeviceDetection

¡Gracias por querer mejorar este microservicio! Al ser una arquitectura **Data-Driven**, puedes añadir soporte para nuevos navegadores, sistemas operativos o dispositivos sin necesidad de modificar el código fuente de la aplicación. Solo necesitas editar el archivo de firmas.

## Estructura del archivo de firmas

Todas las firmas se encuentran en el archivo:
`data/signatures.json`

El archivo está dividido en cuatro categorías principales:

### 1. Navegadores (`browsers`)
Para añadir un nuevo navegador, añade un objeto a la lista con:
- `name`: Nombre descriptivo.
- `regex`: Expresión regular que capture la versión en el primer grupo (usando paréntesis `()`).
- `priority`: Orden de evaluación (menor número = mayor prioridad).
    
**Ejemplo:**
```json
{
  "name": "Brave",
  "regex": "Brave/([\\d\\.]+)",
  "priority": 1
}
```

### 2. Sistemas Operativos (`os`)
Similar a los navegadores, debe capturar la versión mediante regex.
- `name`: Nombre del S.O.
- `regex`: Expresión regular para detectar el S.O. y su versión.
- `priority`: Orden de evaluación.

**Ejemplo:**
```json
{
  "name": "Ubuntu",
  "regex": "Ubuntu/([\\d\\.]+)",
  "priority": 1
}
```

### 3. Dispositivos (`devices`)
Define la categoría del hardware.
- `type`: Categoría (`desktop`, `mobile`, `tablet`, `tv`, `console`).
- `regex`: Patrón para identificar el tipo.
- `priority`: Orden de evaluación.

**Ejemplo:**
```json
{
  "type": "console",
  "regex": "Nintendo Switch",
  "priority": 1
}
```

### 4. Bots (`bots`)
Identifica rastreadores o agentes automatizados.
- `name`: Nombre del bot.
- `regex`: Patrón de detección.
- `category`: Categoría descriptiva (`Search`, `AI`, `Monitor`).

**Ejemplo:**
```json
{
  "name": "Slackbot",
  "regex": "Slackbot",
  "category": "Messaging"
}
```

## Flujo de Trabajo para Colaboradores

1.  **Localiza el User-Agent**: Obtén el string exacto que quieres detectar.
2.  **Prueba tu Regex**: Asegúrate de que tu expresión regular es válida y captura correctamente la versión si es necesario.
3.  **Actualiza `data/signatures.json`**: Añade tu entrada respetando el formato JSON.
4.  **Verifica**:
    - Si usas Docker, los cambios se aplicarán al reiniciar el contenedor (ya que se cargan en memoria al arrancar).
    - Si corres en local, ejecuta `npm start` y comprueba el resultado en la UI web (`/`) o en Swagger (`/docs`).
6.  **Firma tus Commits (DCO)**: Para asegurar la autoría legal de tu contribución, requerimos que todos los commits incluyan un "Signed-off-by".

## Developer Certificate of Origin (DCO)

Para proteger este proyecto y a sus usuarios de futuras disputas legales sobre la autoría del código o de las firmas de detección, utilizamos el **Developer Certificate of Origin (DCO)**. Al incluir la línea `Signed-off-by` en el mensaje de tu commit, certificas que tienes el derecho legal de enviar tu contribución.

El texto del DCO es el siguiente:

> Al hacer una contribución a este proyecto, certifico que:
> (a) La contribución fue creada en su totalidad por mí y tengo el derecho de presentarla bajo la licencia de código abierto indicada en el archivo; o
> (b) La contribución se basa en trabajos anteriores que, según mi leal saber y entender, están cubiertos por licencias de código abierto apropiadas y tengo el derecho de presentar ese material bajo la misma licencia de código abierto; o
> (c) La contribución me fue proporcionada directamente por alguna otra persona que certificó (a), (b) o (c) y no la he modificado.

### Cómo firmar tus commits
Simplemente añade la opción `-s` a tu comando git:
```bash
git commit -s -m "Añadida firma de detección para Brave Browser"
```
Esto añadirá automáticamente una línea al final de tu mensaje de commit similar a esta:
`Signed-off-by: Tu Nombre <tu.email@ejemplo.com>`

---

*Nota: Mantenemos el código bajo los principios **KISS (Keep It Simple, Stupid)**. Si tu detección requiere lógica compleja que no puede resolverse con Regex en el JSON, por favor abre un Issue para discutir una nueva estrategia en el `DetectionCoordinator`.*
