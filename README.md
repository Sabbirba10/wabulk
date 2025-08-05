# WABULK

WABULK is a Node.js application that allows you to send personalized WhatsApp messages to multiple recipients at once using [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js). This tool helps automate the process of sending dynamic messages to a list of contacts, saving you time and effort.

## Features

- **Bulk Messaging**: Send messages to multiple contacts automatically.
- **Dynamic Templates**: Personalize each message using contact details.
- **Easy Setup**: Simple configuration and usage.
- **QR Authentication**: Secure WhatsApp Web login via QR code.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sabbirba/wabulk.git
cd wabulk
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Your Contacts

- Create a `contacts.json` file in the project root (see `src/ex.contacts.json` for an example).
- Format:
  ```json
  [
    {
      "name": "Sabbir",
      "number": "01865******"
    }
  ]
  ```

### 4. Customize the Message Template

- Edit the template in [`src/util.js`](src/util.js) inside the `getMessageTemplate` function to personalize your message.

### 5. Run the Application

```bash
npm start
```

- Scan the QR code with WhatsApp on your phone to authenticate.

### 6. Messages Sent Automatically

- The app will send your customized message to each contact in your list.

## Notes

- **Delay Between Messages**: The app waits a random interval between messages to avoid rate-limiting.
- **Privacy**: Your WhatsApp credentials are stored locally and are not shared.
- **Contacts File**: `contacts.json` is ignored by git for privacy.

## License

[ISC](LICENSE)

---

**Author:** Sabbir Bin Abbas
