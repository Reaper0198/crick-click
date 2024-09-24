# CrickClick - Cricket Organization Web Application

**CrickClick** is a dynamic, cricket-themed web application designed to enhance the fan experience by providing live scores, tournament schedules, ticket booking, and user registration. Built with modern web development technologies, CrickClick offers a fully responsive interface, interactive animations, and a sleek dark theme that reflects the excitement of cricket.

## **Table of Contents**
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

---

## **Demo**

You can access the live demo of the CrickClick web application here:

- **Live Demo URL**: [CrickClick Demo](https://your-live-demo-link.netlify.app)

### **Demo Credentials**

You can log in to the application using the following demo credentials:
- **For User** -
- **Email**: user@gmail.com
- **Password**: user

- **For Admin** -
- **Email**: admin@gmail.com
- **Password**: admin
---
- **For Team** -
- **Email**: team@gmail.com
- **Password**: team

## **Features**

### **1. Admin  Panel**
The organization can add a match, a tournament, a stadium and news using the admin panel. It is fully responsive that can be accessed on the web and the mobile.

### **1. Fully Responsive Design**
The CrickClick website adapts seamlessly to any device, ensuring a great user experience on mobile phones, tablets, and desktops.

### **2. Multi-Stage Registration Form**
Users can register for tournaments using a multi-stage form that collects personal information, contact details, and preferences. This ensures a smooth user registration flow.

### **3. Cricket-Themed UI**
The interface is designed with a cricket-centric theme, including custom backgrounds, player images, and vibrant color schemes that evoke the spirit of the sport.

### **4. Live Score Updates**
Get real-time updates of ongoing cricket matches, displayed in a dedicated section on the homepage.

### **5. Book Ticket Section**
Users can book tickets for upcoming cricket matches directly through the site. This feature includes an interactive banner, smooth animations, and a seamless booking flow.

### **6. Interactive Animations**
Using **Framer Motion**, the site includes interactive animations like button hover effects, transition animations, and image scaling to create an engaging experience.

### **7. Sign In/Sign Up**
Users can create an account or sign in with their credentials to manage bookings and stay updated with the latest tournaments.

### **8. Schedule & News**
The app includes links to view cricket schedules and news updates, keeping users informed of upcoming matches and events.

---

## **Tech Stack**

CrickClick is built using the following technologies:

- **React.js**: The front-end framework used to create a dynamic, component-based UI.
- **Tailwind CSS**: A utility-first CSS framework used for custom styling and responsive design.
- **Framer Motion**: A popular library for adding smooth animations and transitions.
- **React Router**: For seamless page routing and navigation within the app.
- **React Icons**: Icons used to enhance the user interface.
- **Netlify/Vercel**: The platform used to deploy the live application.

---

## **Installation**

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sdhanraj300/crick-click.git
   cd crick-click
Install the dependencies: Run the following command to install all required packages:

bash
Copy code
npm install
Run the development server: Start the local development server using the command:

bash
Copy code
npm run dev
Access the app: Open your browser and navigate to http://localhost:5173 to view the website.

Usage

Home Page

The Home Page features a dynamic Hero Banner showcasing the platform's purpose and main features.
The Book Ticket section allows users to easily book tickets for upcoming matches.
The Live Score section keeps users up to date with the latest match scores.
It also showcases the features, testimonies and succes stories of the organization.

Registration

Team can register using a multi-step form, entering their personal details, email, and password, number of players, captain name, team details along with their roles. After registering, Team can sign in to manage their profiles and bookings.

User can register using email and password and then can book tickets and see the history of booked tickets.

Ticket Booking

The Book Ticket Banner is designed to drive users to the ticket booking page, featuring a cricket-themed promotional banner with interactive elements.

Sign In / Sign Up

Users can sign up to create a new account or sign in to access their existing profiles using email and password authentication.

Background Images
The background image used across the site can be changed by replacing the image located in the assets/ directory or by modifying the bgStyles object in the App.js file.


Animations
The project uses Framer Motion for animations. You can customize or add new animations by modifying the existing motion components. Example from the "Book Ticket" button:


Contributing
Contributions are always welcome! If you’d like to contribute, please follow these steps:

Fork the repository.
Create your feature branch (git checkout -b feature/my-feature).
Commit your changes (git commit -m 'Add my feature').
Push to the branch (git push origin feature/my-feature).
Open a pull request.
Feel free to report any issues or suggest new features by opening an issue.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

markdown
Copy code

### Key Highlights of the README:
- **Demo Credentials**: Includes a demo email and password for easy access to the live site.
- **Tech Stack**: Provides a breakdown of the technologies used, including React, Tailwind, and Framer Motion.
- **Customization Section**: Details on how to modify the theme, background, and animations for developers who want to personalize the site.
- **Environment Variables**: Instructions on setting up environment variables for local development or deployment. 

This README ensures users and developers can easily navigate the project, set it up, and contribute if needed.




