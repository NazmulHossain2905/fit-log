# 🏋️ Fit Log

> **TRAIN WITH INTENT. LOG EVERY SET.**

**Fit Log** is a dark, modern fitness companion built with Next.js and TypeScript. It helps users discover exercises, explore workout information, and build a focused workout plan.

The application provides a workout library covering major muscle groups, with details such as equipment, duration, estimated calories burned, and ratings.

## 🌐 Live Demo

**[Visit Fit Log](https://fit-log-bd.vercel.app/)**

## 📸 Project Preview

<details>
  <summary><strong>🖼️ Project Screenshots</strong></summary>
<br />

<strong>Workouts</strong>
<img
    src="./public/preview/fit-log-preview-1.png"
    alt="Workouts"
    width="100%"
/>
<br /><br />

<strong>Exercise Details</strong>
<img
    src="./public/preview/fit-log-preview-2.png"
    alt="Exercise Details"
    width="100%"
/>
<br /><br />

<strong>Today's Plan</strong>
<img
    src="./public/preview/fit-log-preview-3.png"
    alt="Today's Plan"
    width="100%"
/>
<br /><br />

<strong>Saved Plan</strong>
<img
    src="./public/preview/fit-log-preview-4.png"
    alt="Saved Plan"
    width="100%"
/>

</details>

## ✨ Features

- 🏋️ **Workout Library** — Browse exercises covering major muscle groups.
- 🔎 **Exercise Details** — Open individual exercises to explore their information.
- 💪 **Muscle Group Tags** — Quickly identify the muscle groups targeted by each exercise.
- 🧰 **Equipment Information** — See the equipment required for each workout.
- ⏱️ **Workout Duration** — View the estimated duration of each exercise.
- 🔥 **Calories Information** — See the estimated calories burned.
- ⭐ **Exercise Ratings** — View the rating for each workout.
- 📋 **Workout Planning** — Pick exercises and organize your workout plan.
- 🌙 **Dark Interface** — Focused dark-themed gym interface.
- 📱 **Responsive UI** — Designed for different screen sizes.

The exercise library currently contains twelve exercises covering major muscle groups.

## 🛠️ Tech Stack

- **Next.js 16** — React framework
- **React 19** — UI library
- **TypeScript** — Type-safe development
- **Tailwind CSS 4** — Styling
- **React Icons** — Icons
- **React Toastify** — Toast notifications
- **ESLint** — Code linting
- **Prettier** — Code formatting

These technologies and versions are based on the project's current `package.json`.

## 📦 Dependencies

### Production Dependencies

```json
{
  "next": "16.3.6",
  "react": "19.2.8",
  "react-dom": "19.2.8",
  "react-icons": "^5.7.0",
  "react-toastify": "^11.1.0"
}
```

### Development Dependencies

```json
{
  "@tailwindcss/postcss": "^4",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "eslint": "^9",
  "eslint-config-next": "16.3.6",
  "prettier": "^3.9.9",
  "prettier-plugin-tailwindcss": "^0.8.1",
  "tailwindcss": "^4",
  "typescript": "^5"
}
```

## 🔌 API

Fit Log fetches exercise data from the project's API endpoint:

```text
http://api.abcz.workers.dev/api/fitlog
```

Individual exercise data can be requested using:

```text
http://api.abcz.workers.dev/api/fitlog/{id}
```

The exercise library fetches its data from this API on the server side.

## 📋 Prerequisites

Before running the project locally, make sure you have:

- **Node.js**
- **npm**
- **Git**
- A modern web browser

Check your installed versions:

```bash
node --version
npm --version
git --version
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/NazmulHossain2905/fit-log.git
```

### 2. Navigate to the project

```bash
cd fit-log
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## 🧹 Linting

Run ESLint with:

```bash
npm run lint
```

## 📜 Available Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm run start` | Start the production server  |
| `npm run lint`  | Run ESLint                   |

These scripts are defined in the project's `package.json`.

## 🔐 Environment Variables

No environment variables are required for the current version of Fit Log.

The API endpoint is currently defined directly in the application code, so you do not need to create a `.env` file to run the project.

## 📁 Project Structure

```text
fit-log/
│
├── .vscode/
│
├── public/
│   └── assets/
│       └── ...
│
├── src/
│   ├── app/
│   │   ├── exercise/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── exercise/
│   │   │   ├── ExerciseCard.tsx
│   │   │   └── ExerciseGrid.tsx
│   │   │
│   │   ├── Hero.tsx
│   │   └── ...
│   │
│   └── interfaces/
│       └── ...
│
├── .gitignore
├── .prettierrc
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

The main homepage uses a `Hero` component and an `ExerciseGrid` component. The exercise grid fetches the workout data and renders each exercise through an `ExerciseCard`.

## 🏋️ Exercise Information

Each exercise card provides information including:

- Exercise name
- Target muscle groups
- Equipment
- Duration
- Estimated calories burned
- Rating
- Exercise image

Each card links to an individual exercise route using its exercise ID.

## 🏋️ Workout Library

The current application provides a collection of workouts across major muscle groups, including:

| Workout               | Muscle Group         | Equipment      |
| --------------------- | -------------------- | -------------- |
| Barbell Bench Press   | Chest, Arms          | Barbell, Bench |
| Pull-Up               | Back, Arms           | Pull-up Bar    |
| Back Squat            | Legs, Core           | Barbell, Rack  |
| Overhead Press        | Shoulders, Arms      | Barbell        |
| Dumbbell Bicep Curl   | Arms                 | Dumbbells      |
| Hollow-Body Plank     | Core                 | Bodyweight     |
| Burpee                | Full Body            | Bodyweight     |
| Conventional Deadlift | Back, Legs           | Barbell        |
| Push-Up               | Chest, Arms, Core    | Bodyweight     |
| Walking Lunge         | Legs                 | Dumbbells      |
| Russian Twist         | Core                 | Medicine Ball  |
| Kettlebell Swing      | Full Body, Shoulders | Kettlebell     |

The live application currently displays these 12 workouts in its library.

## 🔗 Useful Links

- 🌐 **[Live Demo](https://fit-log-bd.vercel.app/)**
- 💻 **[GitHub Repository](https://github.com/NazmulHossain2905/fit-log)**
- 🔌 **[Fit Log API](http://api.abcz.workers.dev/api/fitlog)**
- ▲ **[Next.js Documentation](https://nextjs.org/docs)**
- ⚛️ **[React Documentation](https://react.dev/)**
- 🎨 **[Tailwind CSS Documentation](https://tailwindcss.com/docs)**
- 📘 **[TypeScript Documentation](https://www.typescriptlang.org/docs/)**
- 🧩 **[React Icons](https://react-icons.github.io/react-icons/)**

## 👨‍💻 Author

**Nazmul Hossain**

- GitHub: https://github.com/NazmulHossain2905
- Repository: https://github.com/NazmulHossain2905/fit-log

---

Built with ❤️ using **Next.js, React, TypeScript & Tailwind CSS**.
