// src/util.js - cleaned and minimal implementation
const fs = require("fs").promises;

// Read contacts.json safely. Returns [] when file is missing or invalid.
const getContacts = async () => {
  try {
    const data = await fs.readFile("contacts.json", "utf8");
    return JSON.parse(data);
  } catch (err) {
    if (err && err.code === "ENOENT") return [];
    if (err instanceof SyntaxError) return [];
    throw err;
  }
};

const getMessageTemplate = (contact) => {
  const name = contact && contact.name ? contact.name : "friend";
  return `Eid Mubarak, ${name}!\n\nWishing you peace, happiness, and blessings on this special day.\n\nBest regards,\nSabbir`;
};

const logger = (message) =>
  console.log(`[ ${new Date().toLocaleTimeString()} ] :: ${message}`);

const getRecipientNumber = (mobileNo = "") => {
  if (!mobileNo) return "";
  if (mobileNo.startsWith("+")) mobileNo = mobileNo.slice(1);

  if (/^1\d{9}$/.test(mobileNo)) {
    mobileNo = `880${mobileNo}`;
  } else if (!mobileNo.startsWith("88") || mobileNo.length > 11) {
    mobileNo = `88${mobileNo}`;
  }
  return `${mobileNo}@c.us`;
};

const sleep = (timeInSec, minTimeoutSec = 1) =>
  new Promise((resolve) => {
    const randomDelay = Math.random() * timeInSec * 1000;
    const finalDelay = Math.max(randomDelay, minTimeoutSec * 1000);
    setTimeout(resolve, finalDelay);
  });

module.exports = {
  getContacts,
  getMessageTemplate,
  logger,
  getRecipientNumber,
  sleep,
};
