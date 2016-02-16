## Promises vs Events

While promises are nearly always better than Node- style callbacks, the choice
of when to use promises vs a publish-subscribe approach is a bit more complex. Here are the key differences between the two approaches:

| Promises                           | Events (aka “Publish – Subscribe”) |
|------------------------------------|------------------------------------|
| Things that happen ONCE            | Things that happen MANY TIMES      |
| Same treatment for past and future | Only care about the future*        |
| Easily matched with requests       | Detached from requests             |

Promises are often the best approach for handling responses to an explicit
request, such as an HTTP call. Publish-subscribe often works better for
handling actions initiated by the user (except with modals).
