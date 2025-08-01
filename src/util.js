const fs = require("fs").promises;

const getContacts = async () => {
  try {
    const data = await fs.readFile("contacts.json", "utf8");
    const jsonObject = JSON.parse(data);
    return jsonObject;
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error("File not found:", err);
    } else if (err instanceof SyntaxError) {
      console.error("Error parsing JSON:", err.message);
    } else {
      console.error("Error reading file:", err.message);
    }
  }
};

const getMessageTemplate = (contact) => {
  return `Eid Mubarak, ${contact?.name} 🕌✨!

On this blessed and joyful day, I pray that Allah fills your life with peace, prosperity, and endless happiness. 🤲
May your heart be full of gratitude, your home be full of warmth, and your life be full of barakah. 🌸

Let’s take a moment to forgive, love, and connect with those who matter. 💬
As we enjoy delicious food 🍗🍛, wear new clothes 👗🧥, and share smiles 😊—let’s not forget those in need and continue spreading kindness. 🤍🌍

May all your prayers be answered, and may this Eid be just the beginning of many more beautiful days to come. 🌟

🎉 Stay happy, stay blessed, and enjoy every moment!

Eid Mubarak once again, ${contact?.name}! 🕋

— Sabbir Bin Abbas
 `;
};

const logger = (message) =>
  console.log(`[ ${new Date().toLocaleTimeString()} ] :: ${message}`);

const getRecipientNumber = (mobileNo = "") => {
  if (mobileNo.startsWith("+")) {
    mobileNo = mobileNo.slice(1);
  }

  if (!mobileNo.startsWith("88") || mobileNo.length > 10) {
    mobileNo = `88${mobileNo}`;
  }
  return `${mobileNo}@c.us`;
};

const sleep = (timeInSec, minTimeoutSec = 1) => {
  return new Promise((resolve) => {
    const randomDelay = Math.random() * timeInSec * 1000;
    const finalDelay = Math.max(randomDelay, minTimeoutSec * 1000);
    setTimeout(resolve, finalDelay);
  });
};

module.exports = {
  getContacts,
  getMessageTemplate,
  logger,
  getRecipientNumber,
  sleep,
};
