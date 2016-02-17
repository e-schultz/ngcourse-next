## Verifying the Setup

Once you have all the tools set up correctly, you should be able to do the
following steps through the command line. This is the best way to check that
`git`, `node`, and `npm` were installed correctly.

Clone the training repository:

```sh
  git clone https://github.com/rangle/ngcourse-next.git
  cd ngcourse-next
```

Install the project's `npm` modules:

```sh
  npm install
```

Fire up the development server:

```sh
  npm start
```

Once you've run those commands, you should be able to access the server at
<http://localhost:8080>. If you see a login form at that point, then you did
everything correctly and are ready for the course.

### Proxy Issues

While running the above commands you might get errors related to proxies.  If
this is the case, you'll need to configure your command-line tools to handle
proxies.

#### Git
This most likely means that you are behind a proxy that blocks SSH access to
Github. In this case, run the following command:

```sh
  git config --global url."https://".insteadOf git://
```

Then re-run the failed command.

It's a somewhat blunt weapon, but should work in most cases. If this doesn't
work, and if you know the URL of your proxy server, you can try this:

```sh
git config —global http.proxy <proxy server url>
```

#### npm

```sh
npm config set proxy <proxy server url>
```