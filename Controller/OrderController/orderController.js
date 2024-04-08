const StatusModel = require("../../Utils/StatusModel");
const {
  registerOrder,
  getAllOrder,
  getOneOrder,
  updateOrder,
  deleteOrder,
} = require("../../lib/Services/Order");

module.exports = {
  async registerOrder(req, res) {
    let response = null;
    try {
      let data = req.body;
      response = await registerOrder(data);
    } catch (err) {
      console.log(err);
      response = {
        data: null,
        error: true,
        message: StatusModel.internal_error.message,
        status: StatusModel.internal_error.code,
      };
    }
    return res.status(response.status).send(response);
  },

  async getAllOrder(req, res) {
    let response = null;
    try {
      const { page, limit } = req.query;
      response = await getAllOrder(page, limit);
    } catch (err) {
      console.log(err);
      response = {
        data: null,
        error: true,
        message: StatusModel.internal_error.message,
        status: StatusModel.internal_error.code,
      };
    }
    return res.status(response.status).send(response);
  },

  async getOneOrder(req, res) {
    let response = null;
    try {
      const query = req.body;
      response = await getOneOrder(query);
    } catch (err) {
      console.log(err);
      response = {
        data: null,
        error: true,
        message: StatusModel.internal_error.message,
        status: StatusModel.internal_error.code,
      };
    }
    return res.status(response.status).send(response);
  },

  async updateOrder(req, res) {
    let response = null;
    try {
      const data = req.body;
      const id = req.params.id;
      response = await updateOrder(data, id);
    } catch (err) {
      console.log(err);
      response = {
        data: null,
        error: true,
        message: StatusModel.internal_error.message,
        status: StatusModel.internal_error.code,
      };
    }
    return res.status(response.status).send(response);
  },

  async deleteOrder(req, res) {
    let response = null;
    try {
      const id = req.params.id;
      response = await deleteOrder(id);
    } catch (err) {
      console.log(err);
      response = {
        data: null,
        error: true,
        message: StatusModel.internal_error.message,
        status: StatusModel.internal_error.code,
      };
    }
    return res.status(response.status).send(response);
  },
};
