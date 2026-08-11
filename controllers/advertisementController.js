const Advertisement = require("../models/Advertisement");
const Review = require("../models/Review");

// Create advertisement
const createAdvertisement = async (req, res) => {
  try {
    const { title, description, price, category, phone } = req.body;

    const image = req.file ? req.file.filename : req.body.image;

    const advertisement = await Advertisement.create({
      title,
      description,
      price,
      category,
      image,
      phone,
      owner: req.user.id,
    });

    res.status(201).json({
      message: "Advertisement created successfully",
      advertisement,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get all advertisements with pagination and rating
const getAdvertisements = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const total = await Advertisement.countDocuments();

    const advertisements = await Advertisement.find()
      .populate("owner", "name email phone")
      .skip(skip)
      .limit(limit);

    const adsWithRating = await Promise.all(
      advertisements.map(async (ad) => {
        const reviews = await Review.find({
          advertisement: ad._id,
        });

        const totalReviews = reviews.length;

        const averageRating =
          totalReviews === 0
            ? 0
            : reviews.reduce((sum, review) => sum + review.rating, 0) /
              totalReviews;

        return {
          ...ad.toObject(),
          averageRating,
          totalReviews,
        };
      }),
    );

    res.json({
      page,
      totalPages: Math.ceil(total / limit),
      totalAdvertisements: total,
      advertisements: adsWithRating,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get single advertisement
const getAdvertisement = async (req, res) => {
  try {
    const advertisement = await Advertisement.findById(req.params.id).populate(
      "owner",
      "name email phone",
    );

    if (!advertisement) {
      return res.status(404).json({
        message: "Advertisement not found",
      });
    }

    res.json(advertisement);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update advertisement
const updateAdvertisement = async (req, res) => {
  try {
    const advertisement = await Advertisement.findById(req.params.id);

    if (!advertisement) {
      return res.status(404).json({
        message: "Advertisement not found",
      });
    }

    if (advertisement.owner.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    const updatedAdvertisement = await Advertisement.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );

    res.json({
      message: "Advertisement updated successfully",
      advertisement: updatedAdvertisement,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete advertisement
const deleteAdvertisement = async (req, res) => {
  try {
    const advertisement = await Advertisement.findById(req.params.id);

    if (!advertisement) {
      return res.status(404).json({
        message: "Advertisement not found",
      });
    }

    if (advertisement.owner.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    await advertisement.deleteOne();

    res.json({
      message: "Advertisement deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Search advertisements
const searchAdvertisements = async (req, res) => {
  try {
    const { keyword } = req.query;

    const advertisements = await Advertisement.find({
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
        { category: { $regex: keyword, $options: "i" } },
      ],
    }).populate("owner", "name email phone");

    res.json(advertisements);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get advertisements by category
const getByCategory = async (req, res) => {
  try {
    const advertisements = await Advertisement.find({
      category: req.params.category,
    }).populate("owner", "name email phone");

    res.json(advertisements);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createAdvertisement,
  getAdvertisements,
  getAdvertisement,
  updateAdvertisement,
  deleteAdvertisement,
  searchAdvertisements,
  getByCategory,
};
