# Installation Guide for Fjord Quest Adventure Website

## Prerequisites

To run this React application, you'll need to install Node.js and npm on your system.

### Installing Node.js and npm

#### Option 1: Official Node.js Installer (Recommended)
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS (Long Term Support) version for your operating system
3. Run the installer and follow the installation wizard
4. This will install both Node.js and npm

#### Option 2: Using Homebrew (macOS)
```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js and npm
brew install node
```

#### Option 3: Using Package Manager (Linux)
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm

# CentOS/RHEL/Fedora
sudo yum install nodejs npm
```

### Verify Installation
After installation, verify that Node.js and npm are installed correctly:

```bash
node --version
npm --version
```

You should see version numbers for both commands.

## Running the Application

Once Node.js and npm are installed:

1. **Navigate to the project directory:**
   ```bash
   cd /path/to/FQACursor
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   - The application will automatically open at [http://localhost:3000](http://localhost:3000)
   - If it doesn't open automatically, navigate to the URL manually

## Project Structure

The application is now ready to run with the following structure:

```
FQACursor/
├── public/                 # Static files
│   ├── index.html         # Main HTML file
│   ├── manifest.json      # Web app manifest
│   ├── daytrips.json      # Daytrips data
│   ├── activities.json    # Activities data
│   └── accommodations.md  # Accommodation content
├── src/                   # React source code
│   ├── components/        # Reusable components
│   ├── contexts/         # React contexts
│   ├── data/             # Static data and translations
│   ├── pages/            # Page components
│   ├── App.js            # Main app component
│   ├── index.js          # Entry point
│   └── index.css         # Styles
├── images/               # Image assets
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── README.md            # Project documentation
```

## Troubleshooting

### Common Issues

1. **Port 3000 already in use:**
   - Try using a different port: `npm start -- --port 3001`

2. **Permission errors on macOS/Linux:**
   - You may need to use `sudo` for global npm installations

3. **Build errors:**
   - Delete `node_modules` and run `npm install` again
   - Clear npm cache: `npm cache clean --force`

### Development Commands

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## Features Overview

Once running, you'll have access to:

- **Home Page**: Hero section with featured services
- **Daytrips**: Dynamic content from JSON with detailed itineraries
- **Activities**: Location-based activities with terms and conditions
- **Car Rental**: Porsche rental service with image gallery
- **Accommodation**: Hotel information grouped by region
- **Aviation**: Helicopter sightseeing tour details
- **Contact**: Comprehensive inquiry form

## Language Support

The website supports both English and Norwegian:
- Use the language toggle in the header
- Language preference is saved in localStorage

## Next Steps

After installation, you can:
1. Modify content in the JSON and Markdown files
2. Customize the design in the CSS files
3. Add new features to the React components
4. Deploy to a web server for production use

For detailed information about the project structure and features, see the main [README.md](README.md) file. 