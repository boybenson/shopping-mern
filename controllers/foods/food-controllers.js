import foodModel from "../../models/foods/foodModel.js";

export const POST_CREATE_A_FOOD = async (req, res, next) => {
  const { name, category, price, cookingDuration, description } = req.body;
  const imageUrl = req.file.path;
  try {
    const newFood = await foodModel.create({
      name,
      category: category.toLowerCase(),
      price,
      cookingDuration,
      description,
      image: imageUrl,
    });

    res.json({
      message: "food created successfully",
      newFood,
      status: 201,
    });
  } catch (error) {
    const err = new Error(error.message);
    err.message = error.message;
    err.status = 500;
    next(err);
  }
};

export const GET_FETCH_A_SPECIFIC_CATEGORY_FOOD = async (req, res, next) => {
  const category = req.params.categoryName;
  try {
    const foods = await foodModel.find({ category });
    res.status(200).json({
      message: "success",
      foods,
    });
  } catch (error) {
    let err = new Error(error.message);
    err.message = error.message;
    err.status = 500;
    next(err);
  }
};
