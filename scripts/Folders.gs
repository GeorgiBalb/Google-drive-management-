/**
 * Folder creation logic
 */
 * Drive folder utilities for Apps Script.
 */


/**
 * Creates a folder in the Drive root.
 * @param {string} folderName Folder name.
 * @returns {Drive.Folder | null} New folder or null on error.
 */
function createRootFolder(folderName) {
  if (!folderName) {
    Logger.log("Folder name required.");
    return null;
  }
  try {
    const newFolder = DriveApp.createFolder(folderName);
    Logger.log('Root folder "%s" created.', folderName);
    return newFolder;
  } catch (e) {
    Logger.log('Error creating root folder "%s": %s', folderName, e);
    return null;
  }
}


/**
 * Creates a subfolder in a parent folder found by name.
 * @param {string} parentFolderName Parent folder name.
 * @param {string} subfolderName Subfolder name.
 * @returns {Drive.Folder | null} New folder or null if parent not found or error.
 */
function createSubfolderByName(parentFolderName, subfolderName) {


  if (!parentFolderName || !subfolderName) {
    Logger.log("Parent and subfolder names required.");
    return null;
  }
  try {
    const parentFolders = DriveApp.getFoldersByName(parentFolderName);
    if (parentFolders.hasNext()) {
      const parentFolder = parentFolders.next();
      const newSubfolder = parentFolder.createFolder(subfolderName);
      Logger.log('Subfolder "%s" created in "%s".', subfolderName, parentFolderName);
      return newSubfolder;
    } else {
      Logger.log('Parent folder "%s" not found.', parentFolderName);
      return null;
    }
  } catch (e) {
    Logger.log('Error creating subfolder "%s": %s', subfolderName, e);
    return null;
  }
}


/**
 * Creates a subfolder in a parent folder using its ID (recommended).
 * @param {string} parentFolderId Parent folder ID.
 * @param {string} subfolderName Subfolder name.
 * @returns {Drive.Folder | null} New folder or null if parent not found or error.
 */
function createSubfolderById(parentFolderId, subfolderName) {
  if (!parentFolderId || !subfolderName) {
    Logger.log("Parent ID and subfolder name required.");
    return null;
  }
  try {
    const parentFolder = DriveApp.getFolderById(parentFolderId);
    if (parentFolder) {
      const newSubfolder = parentFolder.createFolder(subfolderName);
      Logger.log('Subfolder "%s" created using parent ID "%s".', subfolderName, parentFolderId);
      return newSubfolder;
    } else {
      Logger.log('Parent folder with ID "%s" not found.', parentFolderId);
      return null;
    }
  } catch (e) {
    Logger.log('Error creating subfolder "%s" with ID "%s": %s', subfolderName, parentFolderId, e);
    return null;
  }
}


/**
 * Demo function for folder creation.
 */
function testFolderCreation() {
  const rootName = "Test_Root_" + new Date().getTime();
  const subA = "Sub_A";
  const subB = "Sub_B";
  const root = createRootFolder(rootName);
  if (root) {
    // Create subfolders efficiently
    if (root.createFolder(subA)) {
      Logger.log("Subfolder A created.");
    }
    if (createSubfolderById(root.getId(), subB)) {
      Logger.log("Subfolder B created via ID.");
    }
  }


  // Test creation by name (less reliable)
  createSubfolderByName(rootName, "Sub_C_By_Name");


  // Test failure cases
  createRootFolder("");
  createSubfolderById("Invalid_ID", "Should_Fail");
}
