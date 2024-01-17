# Créer une image docker
1) Créer un fichier Dockerfile

```bash
sudo nano Dockerfile
```
2) Ajouter le contenu suivant dans le fichier Dockerfile

```bash
FROM debian:latest # Définit l'image de base

LABEL maintainer="Corentin" # Définit le créateur de l'image
LABEL version="1.0" # Définit la version de l'image
LABEL description="Image Docker pour le serveur web" # Définit la description de l'image

ARG EXAMPLE=tamer # Définit une variable d'environnement

ENV EXAMPLE_ENV=$EXAMPLE # Définit une variable d'environnement

RUN apt-get update && apt-get upgrade -y # Exécute une commande lors de la création de l'image

COPY index.html /var/www/html/ # Copie un fichier dans l'image

ADD index.html /var/www/html/ # Meme chose que COPY mais permet de copier des fichiers distants

ENTRYPOINT ["/bin/bash"] # Définit le point d'entrée de l'image

CMD ["echo", "Hello World"] # Définit la commande par défaut de l'image

WORKDIR /var/www/html/ # Définit le répertoire de travail de l'image

EXPOSE 80 # Définit le port à exposer

VOLUME /var/www/html/ # Définit le volume à monter

USER www-data # Définit l'utilisateur à utiliser
```
3) Build l'image

```bash
sudo docker build -t <nomImage> .
```
4) Lancer l'image

```bash
sudo docker run -p portExtérieur:portInterieur <nomImage> --name <nomContainer>
```
5) Voir les containers en cours d'exécution

```bash
sudo docker ps
```
6) Accéder aux logs du container

```bash
sudo docker logs <nomContainer>
```