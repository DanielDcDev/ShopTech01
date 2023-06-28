from flask import Flask, jsonify
import mysql.connector
from flask_cors import CORS




app = Flask(__name__)
CORS(app)
@app.route('/')
def obter_dados():
    # Conectar ao banco de dados
    cnx = mysql.connector.connect(
        host='localhost',
        user='root',
        password='',
        database='country'
    )

    # Executar uma consulta SQL para obter os dados desejados
    cursor = cnx.cursor()
    query = 'SELECT * FROM paises'
    cursor.execute(query)

    # Obter os resultados da consulta
    results = cursor.fetchall()

    # Criar uma lista para armazenar os dados
    dados = []
    for row in results:
        # Criar um dicionário para cada linha de dados
        # Adaptar as chaves conforme a estrutura da sua tabela
        dado = {
            'id': row[0],
            'nome': row[1],
            'sigla': row[2]
        }
        dados.append(dado)

    # Fechar a conexão com o banco de dados
    cursor.close()
    cnx.close()
    # Retornar os dados como resposta em formato JSON
    return jsonify(dados)

if __name__ == '__main__':
    app.run(port=5000, host='127.0.0.1', debug=True, threaded=True)


