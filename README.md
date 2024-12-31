# TiRKiO Frugal

**TiRKiO Frugal** is a Progressive Web Application (PWA) designed for personal finance management. The app provides a seamless and native-like experience for users, combining the power of Framework7, Firebase, Jekyll, and GitHub Pages. Hosted on [app.tirkio.com](https://app.tirkio.com), this application enables users to track and manage their finances effectively.

---

## **Features**

- **PWA Functionality**:
  - Installable on mobile and desktop devices.
  - Works offline with cached resources.
- **Native-Like UI**:
  - Built with Framework7 for a polished iOS/Android experience.
- **Firebase Integration**:
  - Authentication for secure access.
  - Cloud Firestore for storing and retrieving financial data.
- **Responsive Design**:
  - Fully functional on mobile, tablet, and desktop devices.

---

## **Technology Stack**

1. **Frontend**:
   - [Framework7](https://framework7.io/): Native-like UI components.
   - [Jekyll](https://jekyllrb.com/): Static site generator.
2. **Backend**:
   - [Firebase](https://firebase.google.com/): Authentication and Firestore database.
3. **Hosting**:
   - [GitHub Pages](https://pages.github.com/): Free and easy static site hosting.

---

## **Project Structure**

tirkio-finance/
├── _layouts/               # Jekyll layouts
│   └── default.html        # Main layout file
├── assets/
│   ├── css/
│   │   └── style.css       # Custom styles
│   ├── js/
│   │   ├── firebase.js     # Firebase configuration and logic
│   │   └── service-worker.js # Service worker for offline support
├── index.html              # Main entry point
├── manifest.json           # PWA manifest
├── ...


---

## **Setup and Installation**

### **1. Clone the Repository**
bash
git clone https://github.com/tirkio/app.tirkio.com.git
cd app.tirkio.com


### **2. Firebase Setup**
1. Go to [Firebase Console](https://console.firebase.google.com/) and create a project.
2. Set up Authentication (e.g., Email/Password or Google Sign-In).
3. Enable Cloud Firestore.
4. Replace firebase.js configuration with your Firebase project credentials.

javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};


### **3. Deploy to GitHub Pages**
1. Push the project to a GitHub repository.
2. Go to the repository’s **Settings > Pages** and enable GitHub Pages.
3. Set the branch to main and folder to /root.
4. Your app will be live at https://github.com/tirkio/app.tirkio.com.git.

---

## **Offline Support**
- The app uses a service worker (service-worker.js) to cache essential resources and enable offline functionality.

---

## **Contributing**

We welcome contributions to enhance the app. To contribute:
1. Fork the repository.
2. Create a feature branch: git checkout -b feature-name.
3. Commit your changes: git commit -m 'Add feature'.
4. Push to the branch: git push origin feature-name.
5. Open a Pull Request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Contact**

For any questions or feedback, feel free to reach out on GitHub.
