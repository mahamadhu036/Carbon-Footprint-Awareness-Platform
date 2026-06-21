# EcoCompass - Carbon Footprint Tracker

EcoCompass is a smart, dynamic web application designed to help individuals understand, track, and reduce their carbon footprint through personalized insights and actionable steps. This project is my submission for **Challenge 3**.

## 1. Chosen Vertical
**Everyday Individual / Eco-conscious Beginner**
The application targets an average person who wants to understand their environmental impact but may feel overwhelmed by complex data. EcoCompass simplifies this by focusing on three core areas: Transport, Diet, and Home Energy.

## 2. Approach and Logic
* **Context-Aware Decision Making:** The app first conducts a short assessment to calculate the user's estimated annual carbon footprint (in tons of CO₂). 
* **Dynamic Insights:** Based on the assessment, the app generates personalized, logical recommendations. For example, if a user indicates a meat-heavy diet, the app suggests practical steps like 'Meatless Mondays' rather than unrealistic extreme changes.
* **Actionable Tracking:** A gamified "Daily Actions" tracker is provided, allowing users to mark simple, eco-friendly activities they've completed.
* **Premium Aesthetics:** The interface uses modern glassmorphism, smooth animations, and a rich color palette to make the experience engaging and highly readable.

## 3. How the Solution Works
1. **Assessment Phase:** Users answer 3 simple questions about their lifestyle (Transport, Diet, Energy).
2. **Dashboard:** The app calculates an estimated footprint and displays a breakdown using clean progress bars.
3. **Smart Assistant:** Personalized tips are displayed based directly on the highest contributing factors identified in the assessment.
4. **Action Tracker:** Users can tick off daily habits, giving them a sense of progression.
5. **Data Persistence:** The application uses browser `localStorage` and React Context to save user progress locally, ensuring privacy and eliminating the need for a complex backend.

## 4. Assumptions Made
* **Estimates over Precision:** The CO₂ calculations are simplified averages designed for awareness rather than scientific precision.
* **Local Storage:** It is assumed that the user will access the app from the same device/browser, as data is saved via `localStorage` to meet the requirement for a lightweight, fast web application without needing a server.
* **Device Compatibility:** The UI assumes modern browser capabilities (backdrop-filter for glassmorphism) and is responsive for desktop and mobile use.

## 5. Setup & Running the Application

This project was bootstrapped with [Vite](https://vitejs.dev/) and React.

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory:
   ```bash
   cd "corbon footprint"
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running Locally
To start the development server, run:
```bash
npm run dev
```
Then open `http://localhost:5173` in your browser.

### Building for Production
To build the app for production, ensuring it stays well under the 10MB limit, run:
```bash
npm run build
```
The optimized files will be generated in the `dist` folder.
