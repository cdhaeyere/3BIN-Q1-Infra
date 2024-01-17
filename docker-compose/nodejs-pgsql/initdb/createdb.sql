CREATE DATABASE exoplanets;

\c exoplanets;

CREATE TABLE exoplanets (
  exoplanet_id serial PRIMARY KEY,
  unique_name character varying(255) NOT NULL,
  hclass character varying(255) NOT NULL,
  discovery_year integer
  
);

INSERT INTO exoplanets (unique_name, hclass, discovery_year) VALUES ('TRAPPIST-1-d','Mésoplanète',2016);
INSERT INTO exoplanets (unique_name, hclass, discovery_year) VALUES ('KOI-1686.01','Mésoplanète',2011);
INSERT INTO exoplanets (unique_name, hclass, discovery_year) VALUES ('LHS 1723 b','Mésoplanète',2017);

