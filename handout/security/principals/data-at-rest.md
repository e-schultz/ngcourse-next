# Data at Rest

# 0. Consider drive encryption.

Many applications require encrypting data while it is being stored. The
simplest way to achieve this is by using full hard-drive encryption.

AWS makes it easy to encrypt EBS volumes with no performance loss, but you
have to be mindful of where you store the keys.

# 1. Consider application-level encryption.

Application level encryption means your application encrypts the data before
saving it in the database. This is more work than full drive encryption, but
offers more protection for your data.

With good application-level encryption, someone who manages to get into your
database will find encrypted data.

Application-level encryption has an important downside: since your database
essentially does not have access to the original data, many types of queries
become hard or impossible to carry out. For this reason, application-level
encryption is often applied selectively.

# 2. Consider public-key encryption.

Classic symmetric encryption uses the same key for encrypting and decrypting
the data. This makes sense where when the data is being encrypted for later
consumption by the same entity. In cases where the data is being sent from one
entity to another, however, public-key encryption makes more sense.

E.g., if process A writes data into the database and process B read it, we can
have process A write the data using process B's public key. This eliminates
the need to share the private key with staff members who are supporting process
A.

# 3. Use standard libraries.

NodeJS's [crypto](http://nodejs.org/api/crypto.html) module should be the
first place to look.

The main functions to consider are `crypto.publicEncrypt()` and
`crypto.privateDecrypt()`.

# 4. Have a plan for how to manage keys.

Encryption is of little use if you don't secure the keys.
