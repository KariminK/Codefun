# Serwer i klient TCP w Pythonie

## Co to jest serwer i klient?

Żeby dwa programy mogły ze sobą rozmawiać przez internet (albo przez jeden komputer), potrzebujemy **serwera** i **klienta**.

- **Serwer** – czeka na połączenie i odbiera wiadomości
- **Klient** – łączy się z serwerem i wysyła wiadomości

Można to porównać do rozmowy telefonicznej:

- serwer to osoba, która **czeka przy telefonie**
- klient to osoba, która **dzwoni**

Do takiej komunikacji w Pythonie użyjemy protokołu **TCP**, który jest stabilny i dba o to, żeby dane dotarły w całości.

## Jak stworzyć serwer TCP

W Pythonie do pracy z siecią używamy wbudowanej biblioteki socket.

Serwer:

1. tworzy „gniazdko” (socket)
2. czeka na połączenie
3. odbiera wiadomości

Przykładowy **serwer TCP**:

```python
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
```

## Jak stworzyć klienta TCP

Ponownie korzystamy z wbudowanej biblioteki socket. Jednak teraz używamy go do łączenia się z już istniejącym serwerem

```python
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

```
