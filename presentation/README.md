# Swagelok Presentation Application
Front-end layout for dynamic Swagelok Distributor presentation

## Contents

* _Content: All assets including CSS, fonts, images and videos for all presentations
  * Custom folders include presentation-specific settings files and assets.
* _Scripts: All custom and third-party JS required for the presentations
* capabilities, markets, products: Page templates for three main sections of site content
* index.html: Homepage layout
* mainMenu.html: Main menu layout

## Key files for editing existing presentation
There are two files that control what gets presented for a specific presentation ID:

* _Scripts/main.js: Global presentation settings. Controls page layout, dynamic loading of navigation elements and page content. Contains pageList (JSON) for entire presentation shared page presentation. 
* _Content/{PRESENTATION_ID}/settings.js: Each presentation loads a unique settings.js file that defines general presentation information and customization
