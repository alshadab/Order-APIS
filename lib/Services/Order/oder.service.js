const StatusModel = require("../../../Utils/StatusModel");
const Order = require("../../../Module/orderSchema");

module.exports = {
  async registerOrder(data) {
    try {
      const { userId, productId, transactionId, quantitySold, salePrice } =
        data;

      if (userId && productId && transactionId && quantitySold && salePrice) {
        const orderData = new Order({
          userId: userId,
          productId: productId,
          quantitySold: quantitySold,
          transactionId: transactionId,
          salePrice: salePrice,
        });
        await orderData.save();

        return {
          error: false,
          data: orderData,
          message: "Order has been created successfully",
          status: StatusModel.created.code,
        };
      } else {
        return {
          error: true,
          message: "Give proper information for creating order",
          status: StatusModel.bad_request.code,
        };
      }
    } catch (err) {
      console.log(err);
      return {
        error: true,
        message: StatusModel.internal_error.message,
        status: StatusModel.internal_error.code,
      };
    }
  },

  async getAllOrder(page, limit) {
    try {
      const count = await Order.countDocuments({ isDeleted: false }).exec();

      const totalPages = Math.ceil(count / limit);

      const data = await Order.find({
        isDeleted: false,
      })
        .limit(limit)
        .skip((page - 1) * limit)
        .exec();

      return {
        error: false,
        data: data,
        totalDataCount: count,
        totalPages: totalPages,
        page: parseInt(page),
        limit: parseInt(limit),
        message: "Orders found successfully",
        status: StatusModel.success.code,
      };
    } catch (err) {
      console.log(err);
      return {
        error: true,
        message: StatusModel.internal_error.message,
        status: StatusModel.internal_error.code,
      };
    }
  },

  async getOneOrder(query) {
    try {
      function isEmpty(obj) {
        return Object.keys(obj).length === 0;
      }
      let check = isEmpty(query);

      if (!check) {
        query = { ...query, isDeleted: false };
        const data = await Order.findOne(query);
        if (data) {
          return {
            error: false,
            data: data,
            message: "Order found successfully",
            status: StatusModel.success.code,
          };
        } else {
          return {
            error: false,
            data: {},
            message: "No Data Found",
            status: StatusModel.success.code,
          };
        }
      } else {
        return {
          error: false,
          data: {},
          message: "Give valid query string",
          status: StatusModel.success.code,
        };
      }
    } catch (err) {
      console.log(err);
      return {
        error: true,
        message: StatusModel.internal_error.message,
        status: StatusModel.internal_error.code,
      };
    }
  },

  async updateOrder(data, id) {
    function isEmpty(obj) {
      return Object.keys(obj).length === 0;
    }

    try {
      let check = isEmpty(data);

      if (!check && id) {
        const updatedOrderData = await Order.findByIdAndUpdate(id, data, {
          new: true,
        });

        if (!updatedOrderData) {
          return {
            error: true,
            message: "Order not found",
            status: StatusModel.not_found.code,
          };
        }

        return {
          error: false,
          data: updatedOrderData,
          message: "Order has been updated successfully",
          status: StatusModel.created.code,
        };
      } else {
        return {
          error: true,
          message: "Provide proper information for updating the order",
          status: StatusModel.bad_request.code,
        };
      }
    } catch (err) {
      console.log(err);
      return {
        error: true,
        message: StatusModel.internal_error.message,
        status: StatusModel.internal_error.code,
      };
    }
  },

  async deleteOrder(id) {
    try {
      if (id) {
        await Order.findByIdAndRemove(id);

        return {
          error: false,
          message: "Order has been deleted successfully",
          status: StatusModel.created.code,
        };
      } else {
        return {
          error: true,
          message: "Provide proper information for delete the order",
          status: StatusModel.bad_request.code,
        };
      }
    } catch (err) {
      console.log(err);
      return {
        error: true,
        message: StatusModel.internal_error.message,
        status: StatusModel.internal_error.code,
      };
    }
  },
};
