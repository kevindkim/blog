
# Security Standards
- MANDATORY: All credentials MUST be encrypted at rest using AES encryption with machine-specific keys
- MANDATORY: Sensitive files MUST use 600 permissions (owner read/write only) and be stored in user home directory
- MANDATORY: All credential storage MUST implement multi-layer security: environment variables > encrypted files > secure defaults
- MANDATORY: .gitignore MUST include ALL credential patterns (.env*, *.key, .credentials, .secrets) to prevent accidental commits
- MANDATORY: Never store plaintext passwords, API keys, or tokens in any file that could be version controlled
- MANDATORY: Implement credential managers that use machine-specific encryption keys derived from system information
- MANDATORY: Always validate credential decryption and provide graceful fallbacks for corrupted/missing credentials
- MANDATORY: Use hidden files (.) for credential storage in user directories, never in project directories
- MANDATORY: Test credential security by ensuring encrypted files are unreadable without proper decryption keys
