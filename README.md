# google-drive-automation

Build structure separates your automation logic from your front-end code while providing essential documentation at the root.

## Project Structure

```
google-drive-automation/
├── .github/           	  	# GitHub Actions (for CI/CD)
├── scripts/              		# Google Apps Script files
│   ├── Code.gs         	# Main entry and globals
│   ├── Folders.gs      	# Folder creation logic
│   ├── Files.gs         		# Move/Copy/Delete logic
│   └── Docs.gs         	# PDF & Edit logic
├── src/                 		# React Web/Mobile source code
├── .gitignore         		# Files to exclude from Git
├── LICENSE               	# Open-source license (MIT)
└── README.md             	# Project overview & guide
```
