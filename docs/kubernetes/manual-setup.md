# Manual Steps

These steps are still manual if standing up a cluster from scratch

### Cert Manager

Cert Manager expects the secret `cloudflare-api-key`. This can be made with

```
kubectl create secret generic cloudflare-api-key -n cert-manager --from-literal=TOKEN=<key>
```

### External DNS

External DNS expects the secret `cloudflare-api-key` and `pihole-password`. These can be made with

```
kubectl create secret generic cloudflare-api-key -n external-dns --from-literal=TOKEN=<key>
```

```
kubectl create secret generic pihole-password -n external-dns --from-literal=EXTERNAL_DNS_PIHOLE_PASSWORD=<password>
```

### 1Password Connect

1Password Connect expects the secrets

- `op-credentials`
- `onepassword-token`

`op-credentials` is a json file with your key. it can be made with

```
kubectl create secret generic op-credentials -n onepassword-connect --from-literal=1password-credentials.json=<file-contents>
```

`onepassword-token` is an api token. it can be made with

```
kubectl create secret generic onepassword-token -n onepassword-connect --from-literal=token=<json>
```

### Cloudflare Operator

```
kubectl create secret generic cloudflare-secrets -n cloudflare-operator-system \
  --from-literal=CLOUDFLARE_API_KEY=<key> \
  --from-literal=CLOUDFLARE_API_TOKEN=<token>
```
