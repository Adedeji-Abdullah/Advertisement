const Message = require("../models/Message");
const Advertisement = require("../models/Advertisement");

// Send message to seller
const sendMessage = async (req, res) => {
  try {
    const advertisement = await Advertisement.findById(req.params.id);

    if (!advertisement) {
      return res.status(404).json({
        message: "Advertisement not found",
      });
    }

    const message = await Message.create({
      sender: req.user.id,
      receiver: advertisement.owner,
      advertisement: advertisement._id,
      message: req.body.message,
    });

    res.status(201).json({
      message: "Message sent successfully",
      data: message,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get my inbox
const getInbox = async (req, res) => {
  try {
    const messages = await Message.find({
      receiver: req.user.id,
    })
      .populate("sender", "name email phone")
      .populate("advertisement", "title");

    res.json(messages);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  sendMessage,
  getInbox,
};
