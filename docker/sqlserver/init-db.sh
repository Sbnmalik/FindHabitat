#!/bin/bash

echo "Waiting for SQL Server to be ready..."

until /opt/mssql-tools18/bin/sqlcmd -S sqlserver -U sa -P "$DB_PASSWORD" -C -Q "SELECT 1" > /dev/null 2>&1
do
  echo "SQL Server is not ready yet..."
  sleep 5
done

echo "SQL Server is ready. Creating database if it does not exist..."

/opt/mssql-tools18/bin/sqlcmd -S sqlserver -U sa -P "$DB_PASSWORD" -C -Q "
IF DB_ID('findhabitat') IS NULL
BEGIN
    CREATE DATABASE findhabitat;
END
"

echo "Database initialization completed."