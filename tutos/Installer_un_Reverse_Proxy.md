1) Mettre à jour les paquets et installer apache2

```bash
sudo apt update && sudo apt install apache2
```
2) Vérifier que le serveur est bien lancé

```bash
sudo systemctl status apache2
```
3) Activer le module apache2 pour les proxy

```bash
sudo a2enmod proxy proxy_http
```
4) Redémarrer le serveur apache2

```bash
sudo systemctl restart apache2
```
5) Créer un fichier de configuration pour le proxy

```bash
sudo nano /etc/apache2/sites-available/001-reverse-proxy.conf
```

```bash
<VirtualHost *:80>

    ServerName siteReverseProxy # Nom du serveur
    ServerAdmin webmaster@localhost # Adresse mail du webmaster

    ProxyPass /  http://www.example.com/ # Adresse du site à rediriger
        ProxyPassReverse / http://www.example.com/ # Adresse du site à rediriger

    ErrorLog ${APACHE_LOG_DIR}/siteReverse_error.log # Fichier de log des erreurs
    CustomLog ${APACHE_LOG_DIR}/siteReverse_access.log combined # Fichier de log des accès
</VirtualHost>
```
6) Tester la configuration

```bash
sudo apache2ctl configtest
```
7) Activer le site

```bash
sudo a2ensite 001-reverse-proxy.conf
```
8) Modifier le fichier hosts

```bash
sudo nano /etc/hosts
```

```bash
127.0.0.1 siteReverseProxy
```
9) Tester le site

```bash
curl siteReverseProxy
```