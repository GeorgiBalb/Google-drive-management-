/**
 * Creates a Doc in a specific folder.
 * @param {string} name The name of the new document.
 * @param {string} folderId The ID of the destination folder.
 * @returns {GoogleAppsScript.Document.Document | null} The created doc or null on error.
 */
function createDocInFolder(name, folderId) {
  try {
    const doc = DocumentApp.create(name);
    const folder = DriveApp.getFolderById(folderId);
    
    // Move file to the correct folder
    const file = DriveApp.getFileById(doc.getId());
    file.moveTo(folder);
    
    return doc;
  } catch (e) {
    Logger.log(`Error creating doc "${name}" in folder "${folderId}": ${e.toString()}`);
    return null;
  }
}

/**
 * Finds and replaces text in a Google Doc.
 * @param {string} docId The ID of the document to edit.
 * @param {string} findText The text to search for.
 * @param {string} replaceText The text to replace it with.
 */
function editDoc(docId, findText, replaceText) {
  try {
    const doc = DocumentApp.openById(docId);
    const body = doc.getBody();
    
    // Perform replacement
    body.replaceText(findText, replaceText);
    
    doc.saveAndClose();
    Logger.log(`Successfully replaced text in doc: ${docId}`);
  } catch (e) {
    Logger.log(`Error editing doc ${docId}: ${e.toString()}`);
  }
}
