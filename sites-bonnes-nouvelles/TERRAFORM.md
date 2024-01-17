# Terraform

## Installation
```bash
apt-get update && apt-get install -y gnupg software-properties-common wget curl

wget -O- https://apt.releases.hashicorp.com/gpg | gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | tee /etc/apt/sources.list.d/hashicorp.list

apt-get update && apt-get install terraform
```

## Commandes utiles
```bash
#Installation des providers
terraform init
#Vérification des changements
terraform plan
#Application des changements
terraform apply
#Suppression des changements
terraform destroy
```

## Azure

### Installation
```bash
curl -sL https://aka.ms/InstallAzureCLIDeb | bash
```

### Login
```bash
az login --use-device-code
```