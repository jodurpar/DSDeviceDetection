/**
 * @swagger
 * /DeviceDetect:
 *   get:
 *     summary: Dectecting device from user agent.
 *     description: Parse user agent and return a json properties.
 *     parameters:
 *      - name: useragent
 *        description : the useragent.
 *        in : query
 *        required : true       
 *        type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Device from user agent.
 *       500: 
 *          description: Internal server error.
 */

/**
 * @swagger
 * /DeviceDetectAsync:
 *   get:
 *     summary: Dectecting device from user agent (Async).
 *     description: Parse user agent and return a json properties.
 *     parameters:
 *      - name: useragent
 *        description : the useragent.
 *        in : query
 *        required : true       
 *        type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Device from user agent.
 *       500: 
 *          description: Internal server error.
 */
