const express = require('express')
const todoRouter = express.Router();
const itemManager = require('../services/item_manager.js')

todoRouter.delete("/id", async (req, res) => {
    await itemManager.deleteItem(req.body.id);
    res.end();
});

todoRouter.delete('/', async (_, res) => {
    await itemManager.deleteAllItems();
    res.end();
});

todoRouter.get('/getAll', async (_, res) => {
    res.send(await itemManager.getItems());
});

todoRouter.post('/', async (req, res) => {
    await itemManager.handleItem(req.body.todo);
    res.end();
});

todoRouter.put("/status", async (req, res) => {
    await itemManager.changeStatusItem(req.body.id,req.body.status);
    res.end();
});

todoRouter.put("/item", async (req, res) => {
    await itemManager.changeNameItem(req.body.id,req.body.todo);
    res.end();
});

module.exports = todoRouter;


