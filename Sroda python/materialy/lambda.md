# Funkcje lambda w Pythonie

## Wprowadzenie

W Pythonie do tej pory pisaliśmy wiele funkcji. Za każdym razem składnia wyglądała podobnie. Zaczynaliśmy deklarację słówkiem kluczowym `def`, dalej nazwa funkcji i nawiasy `()`, a w środku nich argumenty.

```python
def funkcja():
    # przykładowy kod...
    return 3 # wyjście z funkcji
```

I w 90% przypadków te funkcje będziemy dalej tak deklarować. Jednak, są sytuacje, kiedy potrzebujemy użyć jakiejś funkcji "w locie" i będzie ona dość krótka (powiedzmy ze jedna, dwie linijki). Wtedy kod będzie słabo czytelny. I tutaj pomogą nam tzw. funkcje lambda.

## Jak wygląda funkcja lamda

```python

suma = lambda a, b: a + b
# funkcja przyjmuje 2 argumenty
# i zwraca ich sumę

```

Funkcja lambda jest zawsze anonimowa, czyli nie posiada nazwy. Możemy jej nadać nazwę przypisując ją do zmiennej. Zamiast słówka `def`, używamy słówka `lambda`.

Dalej podajemy jej argumenty, jednak nie używamy żadnych nawiasów. później dwukropek i tzw. ciało funkcji.

Charakterystyczną cechą tego typu funkcji jest to, że musi ona zawierać w środku maksymalnie jedno wyrażenie.

Dodatkowo, nie musimy pisać `return`. Funkcja automatycznie zwróci nam to co podamy w jej ciele.

## Przykładowe funkcje lambda i porównanie ze zwykłymi

```python
def sumaZwykla(a, b): # zwykła funkcja
    return a + b

sumaLambda = lambda a,b: a + b # funkcja lambda

print(sumaZwykla(3,4)) # 7
print(sumaLambda(3,4)) # 7
```

```python
def helloWorld(): # funkcja zwykła bez argumentóœ
    print("Hello world!")

helloWorldLambda = lambda: print("Hello world!"); # lambda bez argumentów

helloWorld() # Hello world!
helloWorldLambda() # Hello world lambda!
```

## Gdzie używamy najczęściej funkcji lambda?

Najczęściej będziemy ich używać, kiedy jakaś funkcja przyjmuje inną funkcję jako argument. O takim mechanizmie dowiecie się więcej na kolejnych lekcjach
