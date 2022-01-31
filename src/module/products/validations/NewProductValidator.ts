import { validationResult, check } from "express-validator";
import { Request } from "express";

const validate = {
  check() {
    return [
      check("name").notEmpty().withMessage("Name required"),
      check("description")
        .notEmpty()
        .withMessage("Description required")
        .isLength({ min: 5 })
        .withMessage("Description should have at least 5 characters"),
      check("price")
        .notEmpty()
        .withMessage("Price required")
        .isNumeric()
        .withMessage("Price should be numeric"),
      check("stock")
        .notEmpty()
        .withMessage("Stock required")
        .isNumeric()
        .withMessage("Stock should be numeric"),
    ];
  },

  resultsValidator(req: Request) {
    const messages = [];
    if (!validationResult(req).isEmpty()) {
      const errors = validationResult(req).array();
      for (const i of errors) {
        messages.push(i);
      }
    }
    return messages;
  },
};

export default validate;
