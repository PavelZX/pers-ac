#!/usr/bin/env bash
 
set -e
 
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE USER pers-ac;
	CREATE DATABASE pers-ac ENCODING UTF8;
	GRANT ALL PRIVILEGES ON DATABASE pers-ac TO pers-ac;
 
	ALTER USER pers-ac WITH PASSWORD 'password123';
	ALTER USER pers-ac WITH SUPERUSER;
EOSQL
