import socket

host = "127.0.0.1"
port = 65432

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

server.bind((host, port))

server.listen()

print("Serwer nasłuchuje i czeka na klientów")

conn, addr = server.accept()

print("Serwer połączył się z klientem")

while True:
    data = conn.recv(1024)
    if not data:
        break

    message = data.decode()
    print("Klient napisał: " + message)

    answer = input("Podaj wiadomość zwrotną: ")

    conn.send(answer.encode())

conn.close()
print("Połączenie zakończono")