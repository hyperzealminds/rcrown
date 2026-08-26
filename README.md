# R Crown Salon & Makeup Studio

This is the production-ready static website codebase for **R Crown Salon & Makeup Studio** (https://rcrown.in).

---

## Getting Started

### 1. Fix "npm not recognized" in your current terminal
If you see the error `npm : The term 'npm' is not recognized...`, it is because Node.js was recently installed in the user scope and the active terminal session's PATH variables need to be refreshed.

#### Option A: Quick Fix for the Current PowerShell Session
Run this command directly in your current PowerShell terminal to load Node.js and npm:
```powershell
$env:PATH = "C:\Users\hyper\AppData\Local\Microsoft\WinGet\Packages\OpenJS.NodeJS.LTS_Microsoft.Winget.Source_8wekyb3d8bbwe\node-v24.19.0-win-x64;" + $env:PATH
```

#### Option B: Permanent Fix
Simply **restart your IDE** (Antigravity IDE / VS Code) or close and **re-open your terminal window**. This will reload the system environment PATH variables, and `npm` will work globally.

---

## Available Scripts

Once npm is available in your shell, you can run the following commands:

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Generate Production Build
```bash
npm run build
```
This compiles the application and outputs static assets into the `dist/` directory.

---

## Hostinger Deployment

1. Run `npm run build` to generate the `dist/` folder.
2. Upload the **contents** of the `dist/` folder directly to Hostinger's `public_html` directory.
3. The bundle includes `.htaccess` which handles rewrite rules, enabling direct access to URL subroutes like `/about` or `/gallery`.
