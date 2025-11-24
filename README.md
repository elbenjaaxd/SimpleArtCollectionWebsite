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

This is a static website with no dependencies. Simply open `index.html` in your web browser to view the site.

You can also use any local web server if you prefer:
- Python: `python -m http.server 8000`
- PHP: `php -S localhost:8000`
- Or any other static file server

## Project Structure

```
.
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # Navigation and painting logic
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


