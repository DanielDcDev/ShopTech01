import json
import mysql.connector

# Conectar ao banco de dados
cnx = mysql.connector.connect(
    host='localhost',
    user='root',
    password='',
    database='country'
)
# Obter os resultados da consulta
results = cursor.fetchall()

data = []
for row in results:
    data.append({ 'nome': row[1], 'sigla': row[2]})

json_data = json.dumps(data)
cursor.close()
cnx.close()

# Imprimir os resultados como resposta
print(json_data)
