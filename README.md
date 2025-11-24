# Ethereal Fragments - Conceptual Art Collection Landing Page

A minimalistic landing page for a series of conceptual art paintings with smooth animations.

## Features

- **Minimalistic Design**: Clean, elegant interface focused on the artwork
- **Smooth Animations**: Transitions and fade effects throughout
- **Progressive Navigation**: Start with collection title, then navigate through 6 paintings
- **Direct Navigation Menu**: Jump to any painting or section instantly
- **Author Section**: Separate section for artist information
- **Responsive Design**: Works on desktop and mobile devices

## Setup Instructions

### Prerequisites

1. Install [Node.js](https://nodejs.org/) (which includes npm)
   - Download and install the LTS version
   - Verify installation by running: `node --version` and `npm --version`

### Installation

1. Open a terminal in the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Server

Start the development server:
```bash
npm start
```

This will:
- Start live-server on `http://localhost:3000`
- Automatically open the page in your browser
- Watch for file changes and reload automatically

Alternatively, use the dev script for more detailed watching:
```bash
npm run dev
```

## Project Structure

```
.
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # Navigation and painting logic
├── package.json    # Node.js dependencies
└── README.md       # This file
```

## Usage

1. **Initial View**: The page starts showing only the collection title "ETHEREAL FRAGMENTS"
2. **Enter Exhibition**: Click "Enter Exhibition" to view the first painting
3. **Navigate Paintings**: Click "Next Work" to move through the collection
4. **Menu Navigation**: Click "Menu" in the top-right to jump to any painting or section
5. **Author Section**: After viewing all paintings, or via the menu, access the artist information

## Customization

To modify the paintings, edit the `paintings` array in `script.js`:
- Update titles, years, mediums, dimensions, descriptions, and image URLs
- Add or remove paintings as needed

To customize styling, edit `styles.css`:
- Modify CSS variables in `:root` for colors and timing
- Adjust animations and transitions
- Update responsive breakpoints


