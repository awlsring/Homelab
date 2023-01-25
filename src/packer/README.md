# Packer Builds

This repo is my collection of packer builds. Curently this is just for Proxmox to build cloud-init-able proxmox templates

### Setup packer
```shell
brew tap hashicorp/tap && brew install hashicorp/tap/packer
```

### Example run steps

Validate template
```shell
packer validate -var-file='../../credentials.pkr.hcl' -var-file='./config.pkr.hcl' ./jammy.pkr.hcl
```

```shell
packer build -var-file='../../credentials.pkr.hcl' -var-file='./config.pkr.hcl' ./jammy.pkr.hcl
```