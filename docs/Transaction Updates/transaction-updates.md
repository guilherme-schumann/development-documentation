# Transaction Updates

Merchants can access transaction information either via callback or on demand. We notify merchants of transaction updates by sending a notification to the URLs they provide. Upon receiving a notification, merchants should retrieve the updated transaction details using one of the methods described below.

If a notification attempt fails, we will retry sending the notification, starting 2 seconds after the failure. We will continue retrying up to 6 hours. If, after 6 hours, we are still unable to reach the notification URL, merchants can manually trigger a notification from their merchant dashboard.