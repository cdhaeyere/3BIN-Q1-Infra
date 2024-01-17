# Apache

## Installation
```bash
apt install apache2
```

## Commandes utiles
```bash
#activer/ désactiver un site
a2ensite/a2dissite <filenamesite>
#activer/ désactiver une configuration
a2enconf/a2disconf <filenameconf>
#activer/ désactiver un module
a2enmod/a2dismod <filenamemmod>
#tester la configuration
apache2ctl configtest
#redémarrer apache
systemctl restart apache2
```

