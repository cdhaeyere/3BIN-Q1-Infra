# Docker

## Installation
```bash
apt-get update
apt-get install ca-certificates curl gnupg

install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
chmod a+r /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
   tee /etc/apt/sources.list.d/docker.list > /dev/null

apt-get update
apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

## Commandes utiles
```bash
#lancer un container en arrière plan avec un nom et un port
docker run -d --name <name> -p <port>:<port> <image>

#lister les containers
docker ps -a
#lister les images
docker images
#lister les volumes
docker volume ls

#supprimer un container
docker rm <name>
#supprimer une image
docker rmi <image>
#supprimer un volume
docker volume rm <volume>

#arrêter un container
docker stop <name>
#démarrer un container
docker start <name>
#redémarrer un container
docker restart <name>

#logs d'un container
docker logs <name>

#build une image
docker build -t <name> .
```
