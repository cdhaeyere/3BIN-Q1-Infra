# Utilisation de l'image Debian latest
FROM debian:latest

# Installation d'Apache2
RUN apt-get update && apt-get install -y apache2

# Copie du fichier de configuration du VirtualHost dans le conteneur
COPY 000-default.conf /etc/apache2/sites-available/000-default.conf

# Copie de tous les fichiers dans le dossier /var/www/html
COPY . /var/www/html

# Expose le port 80 à l'extérieur
EXPOSE 80

# Démarrage automatique d'Apache2
CMD ["apache2ctl", "-D", "FOREGROUND"]