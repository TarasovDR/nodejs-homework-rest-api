const fs = require("fs").promises;
const path = require("path");
const Jimp = require("jimp");

const { User } = require("../../models");

const uploadDir = path.join(__dirname, "../../", "public");

const avatar = async (req, res) => {
  const { originalname, path: tmpDir } = req.file;
  const { _id } = req.user;

  try {
    const [extension] = originalname.split(".").reverse();
    const uniqueAvatarName = `user_avatar_${_id}.${extension}`;
    const newDir = path.join(uploadDir, "avatars", uniqueAvatarName);

    const originalAvatar = await Jimp.read(tmpDir);
    const resizeAvatar = await originalAvatar.resize(250, 250);
    await resizeAvatar.write(newDir);
    // await fs.rename(tmpDir, newDir);

    fs.unlink(tmpDir);

    const avatar = path.join("/avatars", uniqueAvatarName);
    await User.findByIdAndUpdate(_id, { avatarURL: avatar }, { new: true });
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        avatarURL: avatar,
      },
    });
  } catch (error) {
    await fs.unlink(tmpDir);
    throw error;
  }
};

module.exports = avatar;
