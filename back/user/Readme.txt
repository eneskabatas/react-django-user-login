User django App

bu app direk kopyalanarak django projesine aktarılır rest api için gerekli kullanıcı giriş-çıkış-kayıt işlemlerini barındırır
aşağıdaki ayarların yapılması ve INSTALLED_APPS içindeki belirtilen paketlerin yüklenmesi gerekir

///

settings.py için ayarlar

INSTALLED_APPS = [
    ...
    'rest_framework',
    'corsheaders',
    'rest_framework_simplejwt',
    'user',
]

MIDDLEWARE = [
    ...
    'corsheaders.middleware.CorsMiddleware',
    ...
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
]

CORS_ALLOW_CREDENTIALS = True

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'user.authentication.CookiesJwtAuthentication',
    ),
     'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ]
}

////

ana urls.py için ayarlar

path('api/', include('user.urls'))