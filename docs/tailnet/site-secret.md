# Adding a new site secret

### Overview

Machines that are configured with the `tailnet: true` will be automatically added to the tailnet. The machine will be added with a tag of its site. This requires a secret to be configured for the site, which should be captured in `secrets/secrets.yaml` under `tailscale/<site_name>/secret`.

### Steps

First a tag must be declared. This is done in the ACL. Go to https://login.tailscale.com/admin/acls/file and under `tagOwners` create a new section like below

```json
"tag:us-drig-1": [
    "autogroup:admin"
],
```

Save the ACL. The tag is now declared in your tailnet.

Next go to https://login.tailscale.com/admin/settings/oauth and select "Generate OAuth Client". Give it a description like `<site_name>`. This will need devices permissions. These are...

- Device - Core: `Write` | Tags <site_name>
- Device - Posture Attributes: `Write`
- Device - Routes: `Write`
- Auth Keys: `Write` | Tags <site_name>

Once you select these, go to the bottom and click "Generate Client". This will give you a client ID and a client secret. These should be added to the `secrets/secrets.yaml`. Record the client ID as `tailscale/<site_name>/id` and the client secret as `tailscale/<site_name>/secret`.
