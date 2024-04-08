# Order Management API Documentation

## Overview

This documentation outlines the usage of the Order Management API. It provides endpoints for creating, retrieving, updating, and deleting orders.

## Prerequisites

Before running the code, ensure that the required dependencies are installed by executing `npm install` in the terminal.

## Starting the Program

To start the program, use the command `npm start` in the terminal.

## Endpoints

### 1. Create Order

- **Endpoint**: `POST /api/order/registerOrder`
- **Description**: Creates a new order with provided details.
- **Request Body**:
  ```json
  {
      "userId": "string",
      "productId": "string",
      "transactionId": "string",
      "quantitySold": number,
      "salePrice": number
  }
  ```

### 2. Get All Orders

- **Endpoint**: `GET /api/order/gtall`
- **Description**: Retrieves all orders. Supports pagination.
- **Query Parameters**:
  - `page`: Page number
  - `limit`: Orders per page

### 3. Get One Order

- **Endpoint**: `POST /api/order/gtOne`
- **Description**: Retrieves a single order based on provided user ID.
- **Request Body**:
  ```json
  {
      "objectFieldName": anytype
  }
  ```

### 4. Update Order

- **Endpoint**: `PATCH /api/order/updt/:orderId`
- **Description**: Updates the specified order.
- **Path Parameters**:
  - `orderId`: ID of the order to update.
- **Request Body**:
  ```json
  {
      "objectFieldName": anytype
  }
  ```

### 5. Delete Order

- **Endpoint**: `DELETE /api/order/dlt/:orderId`
- **Description**: Deletes the specified order.
- **Path Parameters**:
  - `orderId`: ID of the order to delete.

## Example Usage

- **Creating an Order**:

  ```http
  POST /api/order/registerOrder
  Content-Type: application/json

  {
      "userId": "325345bwefwf8ft4b",
      "productId": "552vcsdvsdsef44b4",
      "transactionId": "efsdvqwdqwer54br54b",
      "quantitySold": 20,
      "salePrice": 2200
  }
  ```

- **Updating an Order**:

  ```http
  PATCH /api/order/updt/6613a6df3d71661f69348e3b
  Content-Type: application/json

  {
      "quantitySold": 100
  }
  ```

- **Deleting an Order**:
  ```http
  DELETE /api/order/dlt/6613a6df3d71661f69348e3b
  ```
