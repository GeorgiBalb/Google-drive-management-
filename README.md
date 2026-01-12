# Google Drive Automation Toolkit

A robust library of Google Apps Script functions and a React-based interface for batch folder creation and document management.

## 🚀 Key Features
- **Bulk Folder Creation:** Create complex paths in one run.
- **Doc Automation:** Automated 'Find and Replace' and PDF export.
- **Cross-Platform:** Integrated with React Web and Native.

## 🛠️ Setup

1. Copy files from `/scripts` to your Apps Script project.
2. Update `parentFolderId` in `Code.gs`.
3. Run `npm install` in `/src` to start the React interface.

## 📄 License

MIT
Organizing Your Apps Script Library

## *Organizing Your Apps Script Library*

If your Google Apps Script project becomes large, you can improve organization by splitting your code into multiple `.gs` files instead of keeping everything in a single file.Suggested File Organization:

| File Name | Purpose | Example Functions/Logic |
| ----- | ----- | ----- |
| `Code.gs` | Main script entry points and global setup. | Main variables, `onOpen()` menus. |
| `Folders.gs` | Functions related to Google Drive folder manipulation. | `createFolder`, `createFolderPath`. |
| `Files.gs` | Functions related to Google Drive file operations. | `moveFile`, `copyFile`, `deleteFile`. |
| `Docs.gs` | Functions related to document-specific tasks. | PDF conversion, 'Find and Replace' logic. |
