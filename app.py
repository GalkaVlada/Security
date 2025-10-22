import random
import string

def generate_password(length=12):
    # набор символов: буквы, цифры и спецсимволы
    characters = string.ascii_letters + string.digits + string.punctuation
    # собираем пароль случайным образом
    password = ''.join(random.choice(characters) for _ in range(length))
    return password

# пример использования
if __name__ == "__main__":
    print("Ваш сгенерированный пароль:", generate_password(16))