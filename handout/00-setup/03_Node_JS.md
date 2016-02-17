## Node.JS

<http://nodejs.org/download/>

This should install two commands: `node` and `npm`.

`npm` may require some extra configuration to set permissions properly on your
system.

On __Mac OS X__, do the following:

```sh
npm config set prefix ~/.npm
echo 'export PATH="$PATH:~/.npm/bin"' >> ~/.bashrc
~/.bashrc
```

On __Windows__, fire up `Git Bash` and type the following:

```sh
mkdir /c/Users/$USER/AppData/Roaming/npm
echo 'export PATH="$PATH:/c/Program Files/nodejs"' >> ~/.bashrc
~/.bashrc
```
__Note:__ if you installed the 32-bit Windows version of node, the second line
above should instead read:

```
echo 'export PATH="$PATH:/c/Program Files (x86)/nodejs"' >> ~/.bashrc
```
