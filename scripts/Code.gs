/**
 * Main entry point and global configuration for the Google Drive Automation Toolkit.
 */

// --- CONFIGURATION ---

// INSTRUCTION: Replace 'INSERT_YOUR_FOLDER_ID_HERE' with the actual ID of your target Drive folder.
// This variable is required for other scripts to reference the main working directory.
const parentFolderId = 'INSERT_YOUR_FOLDER_ID_HERE'; 


// --- MENUS & TRIGGERS ---

/**
 * Creates a custom menu when the script is opened in a container (e.g., Google Sheets/Docs).
 * This allows you to run functions manually from the toolbar.
 */
function onOpen() {
  try {
    // Determine the UI environment (Spreadsheet or Document)
    const ui = SpreadsheetApp.getUi();
    
    ui.createMenu('Drive Toolkit')
      .addItem('Test Folder Creation', 'testFolderCreation') // Logic resides in Folders.gs
      .addToUi();
      
  } catch (e) {
    // Logs a warning if running in a standalone script where getUi() is not available.
    Logger.log('onOpen: Menu could not be created. Script may be running as standalone.');
  }
}
