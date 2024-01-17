1) Mettre à jour les paquets et installer apache2

```bash
sudo apt update && sudo apt install apache2
```
2) Vérifier que le serveur est bien lancé

```bash
sudo systemctl status apache2
```
3) Vérifier que le serveur est bien accessible depuis l'extérieur

```bash
curl localhost
```
4) Copier les fichiers du site dans le dossier /var/www

```bash
sudo cp -r /home/username/site/* /var/www/html/
```
5) Créer un fichier de configuration pour le site

```bash
sudo nano /etc/apache2/sites-available/site.conf
```
6) Ajouter le contenu suivant dans le fichier de configuration

```bash
<VirtualHost *:80>
    ServerName monsite # Nom du site
    
    ServerAdmin webmaster@localhost # Adresse mail du webmaster
    DocumentRoot /var/www/htdocs/monsite # Chemin vers le dossier du site
    ErrorLog ${APACHE_LOG_DIR}/monsite_error.log # Chemin vers le fichier de log d'erreur
    CustomLog ${APACHE_LOG_DIR}/monsite_access.log combined # Chemin vers le fichier de log d'accès

    <Directory /var/www/htdocs/monsite> # Chemin vers le dossier du site
    Require all granted
    AllowOverride All
    </Directory>
</VirtualHost>
```
8) Tester la configuration

```bash
sudo apache2ctl configtest
```
7) Activer le site

```bash
sudo a2ensite site.conf
```
8) Modifier le fichier /etc/hosts

```bash
sudo nano /etc/hosts
```
Ajouter la ligne suivante
```bash
127.0.0.1 monsite
```
8) Tester le site

```bash
curl monsite
```

# Ajouter un certificat SSL
1) Installer les dépendances et activer le ssl de apache

```bash
apt-get install openssl && a2enmod ssl && systemctl restart apache2
```
2) Générer le certificat

```bash
mkdir /etc/apache2/ssl &&
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/apache2/ssl/apache.key -out /etc/apache2/ssl/apache.crt
```
3) Modifier le fichier de configuration du site

```bash
nano /etc/apache2/sites-available/site.conf
```

```bash
<VirtualHost *:443>

    ServerName monsite.be

    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/htdocs/monsite
    ErrorLog ${APACHE_LOG_DIR}/monsite_error.log
    CustomLog ${APACHE_LOG_DIR}/monsite_access.log combined

    SSLEngine on # Activer le ssl
    SSLCertificateFile /etc/apache2/ssl/apache.crt # Chemin vers le certificat
    SSLCertificateKeyFile /etc/apache2/ssl/apache.key # Chemin vers la clé

    <Directory /var/www/htdocs/monsite>
    Require all granted
    AllowOverride All
    </Directory>

</VirtualHost>
```
4) Tester la configuration

```bash
apache2ctl configtest
```
5) Activer le site

```bash
a2ensite site.conf
```