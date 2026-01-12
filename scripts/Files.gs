/**
 * Copies a file to a new destination folder with an optional new name.
 *
 * @param {string} fileId The ID of the file to copy.
 * @param {string} destFolderId The ID of the destination folder.
 * @param {string=} newName Optional new name for the copied file.
 * @returns {GoogleAppsScript.Drive.File} The newly created copied file.
 */
function copyFile(fileId, destFolderId, newName) {
  try {
    const file = DriveApp.getFileById(fileId);
    const folder = DriveApp.getFolderById(destFolderId);
// Use existing name if newName is not provided.
    const copyName = newName || file.getName();
    return file.makeCopy(copyName, folder);
  } catch (e) {
    Logger.log(`Error copying file ${fileId}: ${e.toString()}`);
    return null; // Return null on error
  }
}


/**
 * Moves a file directly to a new folder.
 *
 * @param {string} fileId The ID of the file to move.
 * @param {string} targetFolderId The ID of the target folder.
 * @returns {GoogleAppsScript.Drive.File} The moved file.
 */
function moveFile(fileId, targetFolderId) {
  try {
    const file = DriveApp.getFileById(fileId);
    const target = DriveApp.getFolderById(targetFolderId);
    return file.moveTo(target);
  } catch (e) {
    Logger.log(`Error moving file ${fileId}: ${e.toString()}`);
    return null; // Return null on error
  }
}


/**
 * Sends a file to the trash (deletes it from the user's view).
 *
 * @param {string} fileId The ID of the file to trash.
 * @returns {void}
 */
function deleteFile(fileId) {
  try {
    DriveApp.getFileById(fileId).setTrashed(true);
    Logger.log(`File ${fileId} successfully sent to trash.`);
  } catch (e) {
    Logger.log(`Error deleting/trashing file ${fileId}: ${e.toString()}`);
  }
}
