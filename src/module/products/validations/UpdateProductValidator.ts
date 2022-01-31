import { validationResult, check } from "express-validator";
import { Request } from "express";

const validate = {
  check() {
    return [
      check("description")
        .isLength({ min: 5 })
        .withMessage("Description should have at least 5 characters")
        .optional(),
      check("price")
        .isNumeric()
        .withMessage("Price should be numeric")
        .optional(),
      check("stock")
        .isNumeric()
        .withMessage("Stock should be numeric")
        .optional(),
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
