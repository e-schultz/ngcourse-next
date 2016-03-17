# Credentials

## 0. Pick good passwords.

Make sure to use good passwords for securing servers, databases, etc. Good
passwords are random and look like this: "XRexQTMPvE4VjxnejG9qPg3U". If you
can remember it, it's probably not a good password.

You can use a secure password manager such as
[LastPass](https://lastpass.com/) to keep track of those passwords.
Or store them in a file on your machine.

## 1. Never commit credentials or keys.

Do not commit credentials and keys, such as database passwords, to the
repository. Load them from environment variables or a key management system.

If your software loads credentials from environment variables, you can load
them into your environment from a bash script that you keep in a folder called
"private" that is added to your `.gitignore` file to prevent you from
committing it by accident.

An alternative approach is to encrypt individual configurations, commit the
encrypted values, and store the decryption key in an environment variable.

The best approach is to use a proper key management system.

While production credentials and keys are the most important ones to secure,
it is best to avoid committing development and staging credentials as well, as
a matter of establishing good habits.

## 2. Do not log credentials and keys.

Do not log passwords and other credentials either to the console or to the
file.

## 3. You shouldn't have the production credentials.

If you know production credentials for a system and you are not a member of
the operations team, something is not right.

## 4. Consider a proper key management system.

To truly secure the keys you would need to use a proper key management system,
i.e., a software solution that will deliver the right keys to authorized
parties. AWS's Key Management Service (KMS) is one example of such a system. A
proper key management system will be able to provide an audit of access to the
keys.
