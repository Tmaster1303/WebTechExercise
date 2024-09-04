/**
 * @openapi
 * /cart/{cartid}/items/{id}:
 *   delete:
 *     summary: Delete item
 *     description: Delete an item from a user's cart
 *     parameters:
 *       - in: path
 *         name: cartid
 *         description: ID of the cart
 *         required: true
 *         schema: 
 *           type: string
 *       - in: path
 *         name: id
 *         description: ID of the product
 *         required: true
 *         schema: 
 *           type: string
 *     responses:
 *       200:
 *         description: Details of the deletion operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   enum: [success, fail, error]
 *                 data:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       description: The message of the response
 */


//npx swagger-jsdoc -d openapi/swaggerDefinition.js -o openapi/swaggerSpec.json server2.js openapi/components.yaml