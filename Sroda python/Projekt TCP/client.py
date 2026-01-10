import socket

host = "127.0.0.1"
port = 65432

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

client.connect((host, port))

while True:
    message = input("Napisz wiadomość dla serwera:")
    client.send(message.encode())
    reply = client.recv(1024)
    print("Odpowiedź od serwera: " + reply.decode())

client.close()
