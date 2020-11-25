const {HandleStatus} = require("../config/handeStatus");

const billService = require("../CRUD/bill.service");

const getAll = async (req, res) => {
    let take = req.query.take;
    let skip = req.query.skip;
    let key = req.query.key;
    let result = await billService.getAll(take, skip, key);
    return res.send(result);
};
const removeAll = async (req, res) => {
    let result = await billService.removeAll();
    return res.send(result);
};
const count = async (req, res) => {
    let result = await billService.getCount();
    return res.send(result);
};
const add = async (req, res) => {
};
const seed = async (req, res) => {
    let amount = req.query.amount || 0;
    let result = await billService.seed({amount: amount});
    res.send(result);
};
const remove = async (req, res) => {
    let id = req.query.id;
    let result = await billService.remove(id);
    return res.send(result);
};
const update = async (req, res) => {
    let input = req.body.input;
    //Todo: Cannot update, bug here
    let result = await billService.update(input);
    console.log(result);
    return res.send(HandleStatus(200));
};

const findByCategory = async (req, res) => {
};
module.exports = {getAll, add, removeAll, seed, findByCategory, count, remove, update};
