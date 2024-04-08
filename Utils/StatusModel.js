const StatusModel = {
  success: {
    code: 200,
    message: "Ok",
  },
  created: {
    code: 201,
    message: "Created",
  },
  bad_request: {
    code: 400,
    message: "Bad Request",
  },
  unathorized: {
    code: 401,
    message: "Unauthorized",
  },
  payment_required: {
    code: 402,
    message: "Payment Required",
  },
  forbidden: {
    code: 403,
    message: "Forbidden",
  },
  not_found: {
    code: 404,
    message: "Not Found",
  },
  not_acceptable: {
    code: 406,
    message: "Not Acceptable",
  },
  payload_to_large: {
    code: 413,
    message: "Payload Too Large",
  },
  internal_error: {
    code: 500,
    message: "Internal Server Error",
  },
};

module.exports = StatusModel;
