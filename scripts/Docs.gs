/**
 * Creates a Doc in a specific folder.
 */
function createDocInFolder(name, folderId) {
  const doc = DocumentApp.create(name);
  const folder = DriveApp.getFolderById(folderId);
  DriveApp.getFileById(doc.getId()).moveTo(folder);
  return doc;
}

/**
 * Finds and replaces text in a Google Doc.
 */
function editDoc(docId, findText, replaceText) {
  const doc = DocumentApp.openById(docId);
  const body = doc.getBody();
  body.replaceText(findText, replaceText);
  doc.saveAndClose();
}
