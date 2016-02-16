### Git
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
