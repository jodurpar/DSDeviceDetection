# Contribution Guide - DsDeviceDetection

Thank you for wanting to improve this microservice! Being a **Data-Driven** architecture, you can add support for new browsers, operating systems, or devices without modifying the application's source code. You only need to edit the signatures file.

## Signatures File Structure

All signatures are located in the file:
`data/signatures.json`

The file is divided into four main categories:

### 1. Browsers (`browsers`)
To add a new browser, add an object to the list with:
- `name`: Descriptive name.
- `regex`: Regular expression that captures the version in the first group (using parentheses `()`).
- `priority`: Evaluation order (lower number = higher priority).
    
**Example:**
```json
{
  "name": "Brave",
  "regex": "Brave/([\\d\\.]+)",
  "priority": 1
}
```

### 2. Operating Systems (`os`)
Similar to browsers, it should capture the version via regex.
- `name`: OS name.
- `regex`: Regular expression to detect the OS and its version.
- `priority`: Evaluation order.

**Example:**
```json
{
  "name": "Ubuntu",
  "regex": "Ubuntu/([\\d\\.]+)",
  "priority": 1
}
```

### 3. Devices (`devices`)
Defines the hardware category.
- `type`: Category (`desktop`, `mobile`, `tablet`, `tv`, `console`).
- `regex`: Pattern to identify the type.
- `priority`: Evaluation order.

**Example:**
```json
{
  "type": "console",
  "regex": "Nintendo Switch",
  "priority": 1
}
```

### 4. Bots (`bots`)
Identifies crawlers or automated agents.
- `name`: Bot name.
- `regex`: Detection pattern.
- `category`: Descriptive category (`Search`, `AI`, `Monitor`).

**Example:**
```json
{
  "name": "Slackbot",
  "regex": "Slackbot",
  "category": "Messaging"
}
```

## Contributor Workflow

1.  **Locate the User-Agent**: Get the exact string you want to detect.
2.  **Test your Regex**: Ensure your regular expression is valid and correctly captures the version if necessary.
3.  **Update `data/signatures.json`**: Add your entry following the JSON format.
4.  **Verify**:
    - If using Docker, changes will apply upon restarting the container (as they are loaded into memory at startup).
    - If running locally, run `npm start` and check the result in the web UI (`/`) or in Swagger (`/docs`).
6.  **Sign your Commits (DCO)**: To ensure the legal authorship of your contribution, we require all commits to include a "Signed-off-by".

## Developer Certificate of Origin (DCO)

To protect this project and its users from future legal disputes over the authorship of the code or detection signatures, we use the **Developer Certificate of Origin (DCO)**. By including the `Signed-off-by` line in your commit message, you certify that you have the legal right to submit your contribution.

The DCO text is as follows:

> By making a contribution to this project, I certify that:
> (a) The contribution was created in whole or in part by me and I have the right to submit it under the open source license indicated in the file; or
> (b) The contribution is based upon previous work that, to the best of my knowledge, is covered under an appropriate open source license and I have the right under that license to submit that work with modifications, whether created in whole or in part by me, under the same open source license (unless I am permitted to submit under a different license), as indicated in the file; or
> (c) The contribution was provided directly to me by some other person who certified (a), (b) or (c) and I have not modified it.

### How to sign your commits
Just add the `-s` option to your git command:
```bash
git commit -s -m "Added detection signature for Brave Browser"
```
This will automatically add a line at the end of your commit message similar to this:
`Signed-off-by: Your Name <your.email@example.com>`

---

*Note: We keep code under **KISS (Keep It Simple, Stupid)** principles. If your detection requires complex logic that cannot be resolved with Regex in the JSON, please open an Issue to discuss a new strategy in the `DetectionCoordinator`.*
