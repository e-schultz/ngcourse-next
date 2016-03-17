# Privacy

## 0. Make privacy possible.

As application developers we usually do not control what our clients will
ultimately do with their users' data, but we can make it easier for them to
follow best practices in regards to user data. We can also advise them about
such best practices.

## 1. Don't collect data you don't need.

The easiest way to avoid disclosing sensitive user data is to not collect it
in the first place. Consider alternative solutions.

In the age of big data it may be tempting to collect everything you can, but
every bit of information you collect is a bit that you can later inadvertently
compromise. If the client wants to collect sensitive data, try to understand
their ultimate objectives and consider suggesting alternative ways of
achieving them.

## 2. Disclose and ask for consent.

When collecting data, you would usually want to ensure that the user
understands what data is being collected and why. It is also helpful to
indicate whether the data is required.

## 3. Consider partitioning your data.

Partitioning your data can help you manage privacy in a number of ways. First,
you can separate sensitive data from non-sensitive data, which allows you to
focus on securing the smaller data set better. Alternatively, you can
anonymize your data by storing identifying information separately.

Partitioning your data into two different data stores (e.g., two different
MongoDB databases) makes it possible for the client organization to give
specific people access to a part of the data without giving them access to all
of them. If user's accounts and other identifying information are stored in
one database while their private details (medical exam results, financial
assets) are stored in a different database, a person can be tasked with doing
maintenance or analytics on one of the databases without being granted access
to the other.

## 4. Guard anonymized data.

It is really hard to truly anonymize data. Do not assume that removing names
is enough. Instead, assume that any "anonymized" data set can be potentially
de-anonymized. Consequently, take care to preserve even "anonymized" data.

AOL learned this [the hard way](http://en.wikipedia.org/wiki/AOL_search_data_leak)
in 2006. So did Facebook
[in 2011](http://www.michaelzimmer.org/2011/02/15/facebook-data-of-1-2-million-users-from-2005-released/).

## 5. Only expose what needs to be exposed.

When working with sensitive data, ensure that your endpoints only send out
data that needs to be sent out.

This is also a good idea when working with less sensitive data. First, most
data is potentially sensitive. Second, don't waste bandwidth.

## 6. Consider individual access rights.

Many jurisdictions mandate that a user should be given access to their
personal information stored by an organization. You should consider how such
access would be practically realized in your system.

Depending on your database design, complying with such a request could either
be trivial or very costly.

Once again, the less data you collect, the less data is there to provide to
the user upon demand.

## 7. Consider access monitoring.

Many jurisdictions require monitoring of access to private data. This can
sometimes be done as parts of the operations setup, but application support
may also be needed.
