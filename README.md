# Privacy Policy Tracker (TermsPal)

This is a browser extension for Firefox that tracks the number of privacy policies encountered while browsing.
<img src=start.png/>
Follow the steps below to install and run the extension.

## Prerequisites

1. Ensure you have [Node.js](https://nodejs.org/) and `npm` installed.
2. Install the [web-ext](https://github.com/mozilla/web-ext) development tool globally:
   ```bash
   npm install -g web-ext
   ```
3. Clone this repository:
   ```bash
   git clone https://github.com/ains-arch/TermsPal
   cd TermsPal
   ```

## Installation

1. **Build Dependencies** (if necessary):  
   If you plan to modify or test the extension using `web-ext`, ensure dependencies are installed:
   ```bash
   npm install
   ```

2. **Enable Extension Debugging in Firefox**:
   - Open Firefox.
   - Navigate to `about:debugging` in the URL bar.
   - Click on **This Firefox** in the sidebar.

3. **Load the Extension**:
   - Use `web-ext` to run the extension temporarily in a Firefox instance:
     ```bash
     web-ext run
     ```
   - This will start a new Firefox browser window with the extension loaded.

4. **Manual Installation (Optional)**:
   - If you want to install the extension without `web-ext`:
     1. Zip the project files:
        ```bash
        zip -r extension.zip .
        ```
     2. Go to `about:debugging` in Firefox and click **Load Temporary Add-on**.
     3. Select the `extension.zip` file.

## Usage
<img src=google.png/>

1. **Functionality**:
   - The extension automatically detects privacy-related or terms-related links on websites.
   - When such a link is found, the site is added to the tracker, and a counter is updated. Returning to the site will not increase the counter.
   - Click on the extension's toolbar icon to see the number of privacy policies accepted through browsing the internet.

2. **Popup**:
   - The popup displays the total count of detected privacy policies.

3. **Badge**:
   - The extension updates its badge to show the count of detected policies.

## Development

- To modify the extension, edit the corresponding files:
  - `background.js`: Handles messaging and storage updates.
  - `content.js`: Scans web pages for privacy-related links.
  - `popup.html` and `popup.js`: Control the extension popup.

- Use `web-ext lint` to check for issues:
  ```bash
  web-ext lint
  ```

- Reload the extension after making changes:
  ```bash
  web-ext run
  ```
